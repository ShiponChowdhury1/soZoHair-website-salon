"use client";

import { useEditor, EditorContent, JSONContent } from "@tiptap/react";
import { StarterKit } from "@tiptap/starter-kit";
import { Table } from "@tiptap/extension-table";
import { TableRow } from "@tiptap/extension-table-row";
import { TableCell } from "@tiptap/extension-table-cell";
import { TableHeader } from "@tiptap/extension-table-header";
import { Image } from "@tiptap/extension-image";
import { Youtube } from "@tiptap/extension-youtube";
import { Color } from "@tiptap/extension-color";
import { TextStyle } from "@tiptap/extension-text-style";
import { Highlight } from "@tiptap/extension-highlight";
import { Underline } from "@tiptap/extension-underline";
import { Link } from "@tiptap/extension-link";
import { Placeholder } from "@tiptap/extension-placeholder";
import { TextAlign } from "@tiptap/extension-text-align";
import { Subscript } from "@tiptap/extension-subscript";
import { Superscript } from "@tiptap/extension-superscript";
import { TaskList } from "@tiptap/extension-task-list";
import { TaskItem } from "@tiptap/extension-task-item";
import { CharacterCount } from "@tiptap/extension-character-count";
import { HorizontalRule } from "@tiptap/extension-horizontal-rule";
import { Focus } from "@tiptap/extension-focus";

import { useState, useEffect } from "react";
import { TiptapToolbar } from "./tiptap/TiptapToolbar";
import { TiptapPreviewModal } from "./tiptap/TiptapPreviewModal";
import { VideoUploadExtension } from "./tiptap/extensions/VideoUploadExtension";
import { IframeExtension } from "./tiptap/extensions/IframeExtension";
import { FontSizeExtension } from "./tiptap/extensions/FontSizeExtension";
import { useAutosave } from "./tiptap/useAutosave";

interface RichTextEditorProps {
  value: string | JSONContent;
  onChange: (content: string, json?: JSONContent) => void;
  placeholder?: string;
  onAutosave?: (json: JSONContent) => Promise<void> | void;
}

export default function RichTextEditor({
  value,
  onChange,
  placeholder = "Write your detailed salon article content here...",
  onAutosave,
}: RichTextEditorProps) {
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showPreview, setShowPreview] = useState(false);
  const [currentJson, setCurrentJson] = useState<JSONContent | null>(null);

  // Initialize Tiptap Editor
  const editor = useEditor({
    immediatelyRender: false,
    extensions: [
      StarterKit.configure({
        horizontalRule: false,
      }),
      Table.configure({
        resizable: true,
        HTMLAttributes: {
          class: "tiptap-table",
        },
      }),
      TableRow,
      TableCell,
      TableHeader,
      Image.configure({
        inline: true,
        allowBase64: false,
        HTMLAttributes: {
          class: "tiptap-image max-w-full rounded-2xl border border-[#C4956A]/20 shadow-md my-4",
        },
      }),
      Youtube.configure({
        controls: true,
        nocookie: true,
        HTMLAttributes: {
          class: "tiptap-youtube w-full h-[360px] rounded-2xl border border-[#C4956A]/20 shadow-md my-4",
        },
      }),
      Color,
      TextStyle,
      Highlight.configure({
        multicolor: true,
      }),
      Underline,
      Link.configure({
        openOnClick: false,
        HTMLAttributes: {
          class: "text-[#C4956A] underline font-medium",
        },
      }),
      Placeholder.configure({
        placeholder,
      }),
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Subscript,
      Superscript,
      TaskList,
      TaskItem.configure({
        nested: true,
      }),
      CharacterCount,
      HorizontalRule,
      Focus.configure({
        className: "tiptap-has-focus",
        mode: "shallowest",
      }),

      VideoUploadExtension,
      IframeExtension,
      FontSizeExtension,
    ],
    content: typeof value === "string" ? value : value || "",
    onUpdate: ({ editor }) => {
      const html = editor.getHTML();
      const json = editor.getJSON();
      setCurrentJson(json);
      onChange(html, json);
    },
  });

  // Sync value if updated externally
  useEffect(() => {
    if (editor && value !== undefined) {
      const currentHtml = editor.getHTML();
      if (typeof value === "string" && value !== currentHtml) {
        editor.commands.setContent(value);
      }
    }
  }, [value, editor]);

  // Debounced Autosave Hook (10s inactivity)
  const { status: autosaveStatus } = useAutosave({
    data: currentJson,
    onSave: async (data) => {
      if (data && onAutosave) {
        await onAutosave(data);
      }
    },
    delayMs: 10000,
  });

  return (
    <div
      className={`admin-tiptap-wrapper overflow-hidden border border-[#C4956A]/25 bg-white transition-all ${
        isFullscreen
          ? "fixed inset-0 z-50 rounded-none h-screen flex flex-col p-4 bg-white"
          : "rounded-2xl shadow-xs"
      }`}
    >
      {/* Sticky Full-featured Toolbar */}
      <TiptapToolbar
        editor={editor}
        autosaveStatus={autosaveStatus}
        isFullscreen={isFullscreen}
        onToggleFullscreen={() => setIsFullscreen((prev) => !prev)}
        onTogglePreview={() => setShowPreview(true)}
      />

      {/* Editor Content Area */}
      <div className={`p-4 flex-1 overflow-y-auto ${isFullscreen ? "h-full" : "min-h-[280px]"}`}>
        <EditorContent editor={editor} className="tiptap-editor-content outline-none" />
      </div>

      {/* Live Preview Modal */}
      <TiptapPreviewModal
        isOpen={showPreview}
        onClose={() => setShowPreview(false)}
        jsonContent={currentJson || editor?.getJSON() || null}
      />
    </div>
  );
}
