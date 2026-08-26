"use client";

import { useState, useEffect } from "react";
import RichTextEditor from "./RichTextEditorWrapper";
import type { Article } from "@/types/admin.types";
import { X, FileText } from "lucide-react";

interface ArticleModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { title: string; description: string }) => void;
  editItem?: Article | null;
}

export default function ArticleModal({
  isOpen,
  onClose,
  onSave,
  editItem,
}: ArticleModalProps) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editItem) {
      setTitle(editItem.title);
      setDescription(editItem.description);
    } else {
      setTitle("");
      setDescription("");
    }
  }, [editItem, isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen, onClose]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSave({ title: title.trim(), description });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto py-8 px-4">
      {/* Backdrop */}
      <div className="fixed inset-0 bg-[#3B2A1F]/60 backdrop-blur-sm pointer-events-auto" />

      {/* Modal */}
      <div className="relative z-10 w-full max-w-3xl rounded-2xl border border-[#C4956A]/20 bg-white shadow-2xl animate-[scaleIn_200ms_ease]">

        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#C4956A]/15 bg-[#FAF6F0] px-6 py-4.5 rounded-t-2xl">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#C4956A] text-white">
              <FileText className="h-5 w-5" />
            </div>
            <h2 className="font-serif text-lg font-bold text-[#2D2D2D]">
              {editItem ? "Edit Article" : "Add New Article"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-800 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Body */}
        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          {/* Title */}
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#3B2A1F]">
              Article Title <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter article title…"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-[#2D2D2D] outline-none transition-colors placeholder:text-gray-400 focus:border-[#C4956A] focus:ring-2 focus:ring-[#C4956A]/20"
            />
          </div>

          {/* Description (Rich Editor) */}
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#3B2A1F]">
              Description & Content
            </label>
            <RichTextEditor
              value={description}
              onChange={setDescription}
              placeholder="Write your article content with images, videos, formatted text..."
            />
          </div>

          {/* Footer */}
          <div className="flex items-center justify-end gap-3 pt-3 border-t border-gray-100">
            <button
              type="button"
              onClick={onClose}
              className="rounded-xl border border-gray-300 bg-white px-5 py-2.5 text-sm font-semibold text-gray-700 transition-colors hover:bg-gray-50 cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="rounded-xl bg-[#C4956A] px-6 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#C4956A]/30 transition-all hover:bg-[#B3845A] cursor-pointer"
            >
              {editItem ? "Update Article" : "Create Article"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
