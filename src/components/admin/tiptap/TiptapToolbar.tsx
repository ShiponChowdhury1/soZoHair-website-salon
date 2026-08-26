"use client";

import { Editor } from "@tiptap/react";
import { useState, useRef } from "react";
import {
  Undo,
  Redo,
  Bold,
  Italic,
  Underline as UnderlineIcon,
  Strikethrough,
  Subscript as SubscriptIcon,
  Superscript as SuperscriptIcon,
  Palette,
  Highlighter,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  List,
  ListOrdered,
  CheckSquare,
  Quote,
  Code,
  Minus,
  Link as LinkIcon,
  Unlink,
  Table as TableIcon,
  Image as ImageIcon,
  Video,
  Globe,
  RemoveFormatting,
  Search,
  Maximize2,
  Minimize2,
  Eye,
  Check,
  Plus,
  Trash2,
  Rows,
  Columns,
  Combine,
  Split,
  Loader2,
} from "lucide-react";
import { AutosaveStatus } from "./useAutosave";

interface TiptapToolbarProps {
  editor: Editor | null;
  autosaveStatus: AutosaveStatus;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onTogglePreview: () => void;
}

export function TiptapToolbar({
  editor,
  autosaveStatus,
  isFullscreen,
  onToggleFullscreen,
  onTogglePreview,
}: TiptapToolbarProps) {
  const [showLinkModal, setShowLinkModal] = useState(false);
  const [showImageModal, setShowImageModal] = useState(false);
  const [showVideoModal, setShowVideoModal] = useState(false);
  const [showIframeModal, setShowIframeModal] = useState(false);
  const [showSearchModal, setShowSearchModal] = useState(false);
  const [showTableMenu, setShowTableMenu] = useState(false);

  // Link state
  const [linkUrl, setLinkUrl] = useState("");

  // Image upload state
  const [imageAlt, setImageAlt] = useState("");
  const [isUploadingImage, setIsUploadingImage] = useState(false);
  const imageInputRef = useRef<HTMLInputElement>(null);

  // Video state
  const [videoMode, setVideoMode] = useState<"upload" | "youtube">("upload");
  const [youtubeUrl, setYoutubeUrl] = useState("");
  const [isUploadingVideo, setIsUploadingVideo] = useState(false);
  const videoInputRef = useRef<HTMLInputElement>(null);

  // Iframe state
  const [iframeUrl, setIframeUrl] = useState("");

  // Find & Replace state
  const [searchTerm, setSearchTerm] = useState("");
  const [replaceTerm, setReplaceTerm] = useState("");

  if (!editor) return null;

  /* ---- Handlers ---- */

  // Image Upload to /api/upload
  const handleImageUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingImage(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Upload failed");
      const data = await res.json();

      editor
        .chain()
        .focus()
        .setImage({ src: data.url, alt: imageAlt || file.name })
        .run();

      setShowImageModal(false);
      setImageAlt("");
    } catch (err) {
      console.error("Image upload error:", err);
      alert("Failed to upload image. Please try again.");
    } finally {
      setIsUploadingImage(false);
    }
  };

  // Video Upload to /api/upload
  const handleLocalVideoUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setIsUploadingVideo(true);
    try {
      const formData = new FormData();
      formData.append("file", file);

      const res = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      if (!res.ok) throw new Error("Video upload failed");
      const data = await res.json();

      editor.commands.setVideoUpload({ src: data.url, alt: file.name });
      setShowVideoModal(false);
    } catch (err) {
      console.error("Video upload error:", err);
      alert("Failed to upload video file.");
    } finally {
      setIsUploadingVideo(false);
    }
  };

  // YouTube Embed
  const handleInsertYoutube = () => {
    if (!youtubeUrl.trim()) return;
    editor.chain().focus().setYoutubeVideo({ src: youtubeUrl.trim() }).run();
    setShowVideoModal(false);
    setYoutubeUrl("");
  };

  // Iframe Embed
  const handleInsertIframe = () => {
    if (!iframeUrl.trim()) return;
    editor.commands.setIframe({ src: iframeUrl.trim() });
    setShowIframeModal(false);
    setIframeUrl("");
  };

  // Link Handler
  const handleSetLink = () => {
    if (!linkUrl.trim()) {
      editor.chain().focus().unsetLink().run();
    } else {
      editor.chain().focus().setLink({ href: linkUrl.trim() }).run();
    }
    setShowLinkModal(false);
    setLinkUrl("");
  };

  // Find and Replace
  const handleFindAndReplace = () => {
    if (!searchTerm) return;
    const content = editor.getText();
    if (!content.includes(searchTerm)) {
      alert(`Term "${searchTerm}" not found in content.`);
      return;
    }

    // Replace in editor HTML/JSON text
    const currentHtml = editor.getHTML();
    const newHtml = currentHtml.replaceAll(searchTerm, replaceTerm);
    editor.commands.setContent(newHtml);
    setShowSearchModal(false);
  };

  const wordCount = editor.storage.characterCount?.words() ?? 0;
  const characterCount = editor.storage.characterCount?.characters() ?? 0;

  return (
    <div className="sticky top-0 z-20 flex flex-col gap-2 rounded-t-2xl border-b border-[#C4956A]/20 bg-[#FAF6F0] p-3 shadow-xs">
      {/* Top Meta Bar: Status, Words, Controls */}
      <div className="flex flex-wrap items-center justify-between gap-2 border-b border-[#C4956A]/15 pb-2 text-xs font-semibold text-[#3B2A1F]">
        <div className="flex items-center gap-3">
          <span className="font-serif text-sm font-bold text-[#2D2D2D]">Tiptap Editor</span>
          {/* Autosave Indicator */}
          <div className="flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1 text-[11px] font-medium border border-[#C4956A]/20">
            {autosaveStatus === "saving" && (
              <>
                <Loader2 className="h-3 w-3 animate-spin text-[#C4956A]" />
                <span className="text-[#C4956A]">Saving draft…</span>
              </>
            )}
            {autosaveStatus === "saved" && (
              <>
                <Check className="h-3 w-3 text-emerald-600" />
                <span className="text-emerald-700">Saved to MongoDB</span>
              </>
            )}
            {autosaveStatus === "unsaved" && (
              <span className="text-amber-700">Unsaved changes</span>
            )}
            {autosaveStatus === "idle" && (
              <span className="text-gray-500">Draft ready</span>
            )}
          </div>
        </div>

        <div className="flex items-center gap-2">
          {/* Character & Word count */}
          <div className="hidden sm:flex items-center gap-2 text-gray-600 bg-white px-2.5 py-1 rounded-lg border border-[#C4956A]/15 text-[11px]">
            <span>{wordCount} words</span>
            <span>•</span>
            <span>{characterCount} chars</span>
          </div>

          {/* Find & Replace */}
          <button
            type="button"
            onClick={() => setShowSearchModal(true)}
            title="Find & Replace"
            className="flex items-center gap-1 rounded-lg border border-gray-300 bg-white px-2.5 py-1 text-xs font-semibold text-gray-700 hover:bg-[#C4956A] hover:text-white transition-colors cursor-pointer"
          >
            <Search className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Find</span>
          </button>

          {/* Preview Toggle */}
          <button
            type="button"
            onClick={onTogglePreview}
            className="flex items-center gap-1 rounded-lg bg-[#3B2A1F] px-2.5 py-1 text-xs font-semibold text-white hover:bg-[#C4956A] transition-colors cursor-pointer shadow-xs"
          >
            <Eye className="h-3.5 w-3.5" />
            <span>Preview</span>
          </button>

          {/* Fullscreen */}
          <button
            type="button"
            onClick={onToggleFullscreen}
            title={isFullscreen ? "Exit Fullscreen" : "Fullscreen Mode"}
            className="rounded-lg border border-gray-300 bg-white p-1 text-gray-700 hover:bg-gray-100 cursor-pointer"
          >
            {isFullscreen ? <Minimize2 className="h-4 w-4" /> : <Maximize2 className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Toolbar Buttons Row 1: Formatting, Headings, Fonts, Colors */}
      <div className="flex flex-wrap items-center gap-1">
        {/* Undo / Redo */}
        <button
          type="button"
          onClick={() => editor.chain().focus().undo().run()}
          disabled={!editor.can().undo()}
          className="rounded-lg p-1.5 text-gray-700 hover:bg-white disabled:opacity-30 cursor-pointer"
          title="Undo"
        >
          <Undo className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().redo().run()}
          disabled={!editor.can().redo()}
          className="rounded-lg p-1.5 text-gray-700 hover:bg-white disabled:opacity-30 cursor-pointer"
          title="Redo"
        >
          <Redo className="h-4 w-4" />
        </button>

        <div className="h-4 w-px bg-gray-300 mx-1" />

        {/* Heading Dropdown */}
        <select
          value={
            editor.isActive("heading", { level: 1 })
              ? "h1"
              : editor.isActive("heading", { level: 2 })
              ? "h2"
              : editor.isActive("heading", { level: 3 })
              ? "h3"
              : editor.isActive("heading", { level: 4 })
              ? "h4"
              : "p"
          }
          onChange={(e) => {
            const val = e.target.value;
            if (val === "p") editor.chain().focus().setParagraph().run();
            if (val === "h1") editor.chain().focus().toggleHeading({ level: 1 }).run();
            if (val === "h2") editor.chain().focus().toggleHeading({ level: 2 }).run();
            if (val === "h3") editor.chain().focus().toggleHeading({ level: 3 }).run();
            if (val === "h4") editor.chain().focus().toggleHeading({ level: 4 }).run();
          }}
          className="rounded-lg border border-gray-300 bg-white px-2 py-1 text-xs font-semibold text-[#2D2D2D] outline-none"
        >
          <option value="p">Paragraph</option>
          <option value="h1">Heading 1</option>
          <option value="h2">Heading 2</option>
          <option value="h3">Heading 3</option>
          <option value="h4">Heading 4</option>
        </select>

        {/* Font Size Dropdown */}
        <select
          onChange={(e) => {
            const size = e.target.value;
            if (size === "normal") editor.chain().focus().unsetFontSize().run();
            else editor.chain().focus().setFontSize(size).run();
          }}
          className="rounded-lg border border-gray-300 bg-white px-2 py-1 text-xs font-semibold text-[#2D2D2D] outline-none"
        >
          <option value="normal">Size</option>
          <option value="12px">12px</option>
          <option value="14px">14px</option>
          <option value="16px">16px</option>
          <option value="18px">18px</option>
          <option value="20px">20px</option>
          <option value="24px">24px</option>
          <option value="28px">28px</option>
          <option value="32px">32px</option>
        </select>

        <div className="h-4 w-px bg-gray-300 mx-1" />

        {/* Bold, Italic, Underline, Strike, Sub, Super */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={`rounded-lg p-1.5 cursor-pointer ${
            editor.isActive("bold") ? "bg-[#C4956A] text-white" : "text-gray-700 hover:bg-white"
          }`}
          title="Bold"
        >
          <Bold className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={`rounded-lg p-1.5 cursor-pointer ${
            editor.isActive("italic") ? "bg-[#C4956A] text-white" : "text-gray-700 hover:bg-white"
          }`}
          title="Italic"
        >
          <Italic className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={`rounded-lg p-1.5 cursor-pointer ${
            editor.isActive("underline") ? "bg-[#C4956A] text-white" : "text-gray-700 hover:bg-white"
          }`}
          title="Underline"
        >
          <UnderlineIcon className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={`rounded-lg p-1.5 cursor-pointer ${
            editor.isActive("strike") ? "bg-[#C4956A] text-white" : "text-gray-700 hover:bg-white"
          }`}
          title="Strikethrough"
        >
          <Strikethrough className="h-4 w-4" />
        </button>

        <button
          type="button"
          onClick={() => editor.chain().focus().toggleSubscript().run()}
          className={`rounded-lg p-1.5 cursor-pointer ${
            editor.isActive("subscript") ? "bg-[#C4956A] text-white" : "text-gray-700 hover:bg-white"
          }`}
          title="Subscript"
        >
          <SubscriptIcon className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleSuperscript().run()}
          className={`rounded-lg p-1.5 cursor-pointer ${
            editor.isActive("superscript") ? "bg-[#C4956A] text-white" : "text-gray-700 hover:bg-white"
          }`}
          title="Superscript"
        >
          <SuperscriptIcon className="h-4 w-4" />
        </button>

        <div className="h-4 w-px bg-gray-300 mx-1" />

        {/* Text Color */}
        <label title="Text Color" className="relative cursor-pointer rounded-lg p-1.5 hover:bg-white flex items-center">
          <Palette className="h-4 w-4 text-[#C4956A]" />
          <input
            type="color"
            onChange={(e) => editor.chain().focus().setColor(e.target.value).run()}
            className="absolute opacity-0 w-4 h-4 cursor-pointer"
          />
        </label>

        {/* Highlight Color */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleHighlight({ color: "#fef08a" }).run()}
          className={`rounded-lg p-1.5 cursor-pointer ${
            editor.isActive("highlight") ? "bg-yellow-300 text-black" : "text-gray-700 hover:bg-white"
          }`}
          title="Highlight Yellow"
        >
          <Highlighter className="h-4 w-4" />
        </button>

        <div className="h-4 w-px bg-gray-300 mx-1" />

        {/* Alignments */}
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("left").run()}
          className={`rounded-lg p-1.5 cursor-pointer ${
            editor.isActive({ textAlign: "left" }) ? "bg-[#C4956A] text-white" : "text-gray-700 hover:bg-white"
          }`}
          title="Align Left"
        >
          <AlignLeft className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("center").run()}
          className={`rounded-lg p-1.5 cursor-pointer ${
            editor.isActive({ textAlign: "center" }) ? "bg-[#C4956A] text-white" : "text-gray-700 hover:bg-white"
          }`}
          title="Align Center"
        >
          <AlignCenter className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("right").run()}
          className={`rounded-lg p-1.5 cursor-pointer ${
            editor.isActive({ textAlign: "right" }) ? "bg-[#C4956A] text-white" : "text-gray-700 hover:bg-white"
          }`}
          title="Align Right"
        >
          <AlignRight className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setTextAlign("justify").run()}
          className={`rounded-lg p-1.5 cursor-pointer ${
            editor.isActive({ textAlign: "justify" }) ? "bg-[#C4956A] text-white" : "text-gray-700 hover:bg-white"
          }`}
          title="Justify"
        >
          <AlignJustify className="h-4 w-4" />
        </button>
      </div>

      {/* Toolbar Buttons Row 2: Lists, Tables, Media, Clear */}
      <div className="flex flex-wrap items-center gap-1 pt-1 border-t border-[#C4956A]/10">
        {/* Bullet List, Ordered List, Task List */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBulletList().run()}
          className={`rounded-lg p-1.5 cursor-pointer ${
            editor.isActive("bulletList") ? "bg-[#C4956A] text-white" : "text-gray-700 hover:bg-white"
          }`}
          title="Bullet List"
        >
          <List className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleOrderedList().run()}
          className={`rounded-lg p-1.5 cursor-pointer ${
            editor.isActive("orderedList") ? "bg-[#C4956A] text-white" : "text-gray-700 hover:bg-white"
          }`}
          title="Ordered List"
        >
          <ListOrdered className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleTaskList().run()}
          className={`rounded-lg p-1.5 cursor-pointer ${
            editor.isActive("taskList") ? "bg-[#C4956A] text-white" : "text-gray-700 hover:bg-white"
          }`}
          title="Task Checklist"
        >
          <CheckSquare className="h-4 w-4" />
        </button>

        <div className="h-4 w-px bg-gray-300 mx-1" />

        {/* Blockquote, CodeBlock, HR */}
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={`rounded-lg p-1.5 cursor-pointer ${
            editor.isActive("blockquote") ? "bg-[#C4956A] text-white" : "text-gray-700 hover:bg-white"
          }`}
          title="Quote"
        >
          <Quote className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={`rounded-lg p-1.5 cursor-pointer ${
            editor.isActive("codeBlock") ? "bg-[#C4956A] text-white" : "text-gray-700 hover:bg-white"
          }`}
          title="Code Block"
        >
          <Code className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
          className="rounded-lg p-1.5 text-gray-700 hover:bg-white cursor-pointer"
          title="Horizontal Line"
        >
          <Minus className="h-4 w-4" />
        </button>

        <div className="h-4 w-px bg-gray-300 mx-1" />

        {/* Link */}
        <button
          type="button"
          onClick={() => setShowLinkModal(true)}
          className={`rounded-lg p-1.5 cursor-pointer ${
            editor.isActive("link") ? "bg-[#C4956A] text-white" : "text-gray-700 hover:bg-white"
          }`}
          title="Add / Edit Link"
        >
          <LinkIcon className="h-4 w-4" />
        </button>
        {editor.isActive("link") && (
          <button
            type="button"
            onClick={() => editor.chain().focus().unsetLink().run()}
            className="rounded-lg p-1.5 text-rose-600 hover:bg-rose-50 cursor-pointer"
            title="Remove Link"
          >
            <Unlink className="h-4 w-4" />
          </button>
        )}

        <div className="h-4 w-px bg-gray-300 mx-1" />

        {/* Table Operations Menu */}
        <div className="relative">
          <button
            type="button"
            onClick={() => setShowTableMenu((prev) => !prev)}
            className={`flex items-center gap-1 rounded-lg px-2 py-1 text-xs font-semibold cursor-pointer ${
              editor.isActive("table")
                ? "bg-[#C4956A] text-white"
                : "border border-gray-300 bg-white text-gray-700 hover:bg-gray-50"
            }`}
          >
            <TableIcon className="h-4 w-4 text-[#C4956A]" />
            <span>Table</span>
          </button>

          {showTableMenu && (
            <div className="absolute top-full left-0 z-30 mt-1 flex flex-col gap-1 rounded-xl border border-[#C4956A]/20 bg-white p-2 shadow-xl w-48 text-xs font-semibold text-gray-700">
              <button
                type="button"
                onClick={() => {
                  editor.chain().focus().insertTable({ rows: 3, cols: 3, withHeaderRow: true }).run();
                  setShowTableMenu(false);
                }}
                className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-[#FAF6F0] hover:text-[#C4956A] text-left cursor-pointer"
              >
                <Plus className="h-3.5 w-3.5" /> Insert 3x3 Table
              </button>
              {editor.isActive("table") && (
                <>
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().addRowAfter().run()}
                    className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-[#FAF6F0] text-left cursor-pointer"
                  >
                    <Rows className="h-3.5 w-3.5" /> Add Row After
                  </button>
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().deleteRow().run()}
                    className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-rose-50 text-rose-600 text-left cursor-pointer"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> Delete Row
                  </button>
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().addColumnAfter().run()}
                    className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-[#FAF6F0] text-left cursor-pointer"
                  >
                    <Columns className="h-3.5 w-3.5" /> Add Column After
                  </button>
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().deleteColumn().run()}
                    className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-rose-50 text-rose-600 text-left cursor-pointer"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> Delete Column
                  </button>
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().mergeCells().run()}
                    className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-[#FAF6F0] text-left cursor-pointer"
                  >
                    <Combine className="h-3.5 w-3.5" /> Merge Cells
                  </button>
                  <button
                    type="button"
                    onClick={() => editor.chain().focus().splitCell().run()}
                    className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-[#FAF6F0] text-left cursor-pointer"
                  >
                    <Split className="h-3.5 w-3.5" /> Split Cell
                  </button>
                  <button
                    type="button"
                    onClick={() => {
                      editor.chain().focus().deleteTable().run();
                      setShowTableMenu(false);
                    }}
                    className="flex items-center gap-2 rounded-lg p-1.5 hover:bg-rose-100 text-rose-700 text-left cursor-pointer"
                  >
                    <Trash2 className="h-3.5 w-3.5" /> Delete Table
                  </button>
                </>
              )}
            </div>
          )}
        </div>

        {/* Media: Image, Video, Iframe */}
        <button
          type="button"
          onClick={() => setShowImageModal(true)}
          className="rounded-lg p-1.5 text-gray-700 hover:bg-white cursor-pointer"
          title="Insert Image (SEO Alt Text)"
        >
          <ImageIcon className="h-4 w-4 text-[#C4956A]" />
        </button>

        <button
          type="button"
          onClick={() => setShowVideoModal(true)}
          className="rounded-lg p-1.5 text-gray-700 hover:bg-white cursor-pointer"
          title="Insert / Upload Video"
        >
          <Video className="h-4 w-4 text-[#C4956A]" />
        </button>

        <button
          type="button"
          onClick={() => setShowIframeModal(true)}
          className="rounded-lg p-1.5 text-gray-700 hover:bg-white cursor-pointer"
          title="Embed Iframe (Maps/Widgets)"
        >
          <Globe className="h-4 w-4 text-[#C4956A]" />
        </button>

        <div className="h-4 w-px bg-gray-300 mx-1" />

        {/* Clear formatting */}
        <button
          type="button"
          onClick={() => editor.chain().focus().clearNodes().unsetAllMarks().run()}
          className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-200 cursor-pointer"
          title="Clear Formatting"
        >
          <RemoveFormatting className="h-4 w-4" />
        </button>
      </div>

      {/* Image Modal */}
      {showImageModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3B2A1F]/60 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 border border-[#C4956A]/20 shadow-2xl">
            <h3 className="font-serif text-base font-bold text-[#2D2D2D] mb-3">Upload Image with SEO Alt Text</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-gray-600 mb-1">Image Alt Text (SEO)</label>
                <input
                  type="text"
                  value={imageAlt}
                  onChange={(e) => setImageAlt(e.target.value)}
                  placeholder="e.g. Hair Salon Stylist at Work"
                  className="w-full rounded-xl border border-gray-300 p-2.5 text-sm outline-none focus:border-[#C4956A]"
                />
              </div>
              <div>
                <button
                  type="button"
                  onClick={() => imageInputRef.current?.click()}
                  disabled={isUploadingImage}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#C4956A] py-3 text-sm font-semibold text-white hover:bg-[#B3845A] cursor-pointer"
                >
                  {isUploadingImage ? <Loader2 className="h-4 w-4 animate-spin" /> : "Choose Image File"}
                </button>
                <input
                  ref={imageInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                />
              </div>
              <button
                type="button"
                onClick={() => setShowImageModal(false)}
                className="w-full rounded-xl border border-gray-300 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-50 cursor-pointer"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Video Modal */}
      {showVideoModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3B2A1F]/60 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 border border-[#C4956A]/20 shadow-2xl">
            <h3 className="font-serif text-base font-bold text-[#2D2D2D] mb-3">Insert or Upload Video</h3>
            <div className="flex gap-2 mb-4 bg-[#FAF6F0] p-1 rounded-xl">
              <button
                type="button"
                onClick={() => setVideoMode("upload")}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg ${
                  videoMode === "upload" ? "bg-[#C4956A] text-white" : "text-gray-600"
                }`}
              >
                Local Upload (/api/upload)
              </button>
              <button
                type="button"
                onClick={() => setVideoMode("youtube")}
                className={`flex-1 py-1.5 text-xs font-bold rounded-lg ${
                  videoMode === "youtube" ? "bg-[#C4956A] text-white" : "text-gray-600"
                }`}
              >
                YouTube Embed
              </button>
            </div>

            {videoMode === "upload" ? (
              <div className="space-y-3">
                <button
                  type="button"
                  onClick={() => videoInputRef.current?.click()}
                  disabled={isUploadingVideo}
                  className="w-full flex items-center justify-center gap-2 rounded-xl bg-[#C4956A] py-3 text-sm font-semibold text-white hover:bg-[#B3845A] cursor-pointer"
                >
                  {isUploadingVideo ? <Loader2 className="h-4 w-4 animate-spin" /> : "Select Video File"}
                </button>
                <input
                  ref={videoInputRef}
                  type="file"
                  accept="video/*"
                  onChange={handleLocalVideoUpload}
                  className="hidden"
                />
              </div>
            ) : (
              <div className="space-y-3">
                <input
                  type="url"
                  value={youtubeUrl}
                  onChange={(e) => setYoutubeUrl(e.target.value)}
                  placeholder="https://www.youtube.com/watch?v=..."
                  className="w-full rounded-xl border border-gray-300 p-2.5 text-sm outline-none focus:border-[#C4956A]"
                />
                <button
                  type="button"
                  onClick={handleInsertYoutube}
                  className="w-full rounded-xl bg-[#C4956A] py-2.5 text-sm font-semibold text-white hover:bg-[#B3845A] cursor-pointer"
                >
                  Embed YouTube Video
                </button>
              </div>
            )}

            <button
              type="button"
              onClick={() => setShowVideoModal(false)}
              className="mt-3 w-full rounded-xl border border-gray-300 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-50 cursor-pointer"
            >
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Link Modal */}
      {showLinkModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3B2A1F]/60 backdrop-blur-xs">
          <div className="w-full max-w-sm rounded-2xl bg-white p-6 border border-[#C4956A]/20 shadow-2xl space-y-4">
            <h3 className="font-serif text-base font-bold text-[#2D2D2D]">Insert Link</h3>
            <input
              type="url"
              value={linkUrl}
              onChange={(e) => setLinkUrl(e.target.value)}
              placeholder="https://example.com"
              className="w-full rounded-xl border border-gray-300 p-2.5 text-sm outline-none focus:border-[#C4956A]"
            />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setShowLinkModal(false)}
                className="flex-1 rounded-xl border border-gray-300 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleSetLink}
                className="flex-1 rounded-xl bg-[#C4956A] py-2 text-xs font-semibold text-white hover:bg-[#B3845A] cursor-pointer"
              >
                Apply Link
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Iframe Modal */}
      {showIframeModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3B2A1F]/60 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 border border-[#C4956A]/20 shadow-2xl space-y-4">
            <h3 className="font-serif text-base font-bold text-[#2D2D2D]">Embed Generic Iframe</h3>
            <input
              type="url"
              value={iframeUrl}
              onChange={(e) => setIframeUrl(e.target.value)}
              placeholder="https://maps.google.com/embed/..."
              className="w-full rounded-xl border border-gray-300 p-2.5 text-sm outline-none focus:border-[#C4956A]"
            />
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => setShowIframeModal(false)}
                className="flex-1 rounded-xl border border-gray-300 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleInsertIframe}
                className="flex-1 rounded-xl bg-[#C4956A] py-2 text-xs font-semibold text-white hover:bg-[#B3845A] cursor-pointer"
              >
                Embed Iframe
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Find & Replace Modal */}
      {showSearchModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3B2A1F]/60 backdrop-blur-xs">
          <div className="w-full max-w-md rounded-2xl bg-white p-6 border border-[#C4956A]/20 shadow-2xl space-y-4">
            <h3 className="font-serif text-base font-bold text-[#2D2D2D]">Find & Replace</h3>
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1">Find</label>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search word..."
                className="w-full rounded-xl border border-gray-300 p-2.5 text-sm outline-none focus:border-[#C4956A]"
              />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-600 mb-1">Replace With</label>
              <input
                type="text"
                value={replaceTerm}
                onChange={(e) => setReplaceTerm(e.target.value)}
                placeholder="Replacement word..."
                className="w-full rounded-xl border border-gray-300 p-2.5 text-sm outline-none focus:border-[#C4956A]"
              />
            </div>
            <div className="flex gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowSearchModal(false)}
                className="flex-1 rounded-xl border border-gray-300 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-50 cursor-pointer"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={handleFindAndReplace}
                className="flex-1 rounded-xl bg-[#C4956A] py-2 text-xs font-semibold text-white hover:bg-[#B3845A] cursor-pointer"
              >
                Replace All
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
