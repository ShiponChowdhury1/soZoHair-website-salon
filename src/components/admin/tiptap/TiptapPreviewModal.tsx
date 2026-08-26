"use client";

import { JSONContent } from "@tiptap/react";
import { X, Eye } from "lucide-react";
import { renderTiptapJsonToHtml } from "./renderTiptapHtml";

interface TiptapPreviewModalProps {
  isOpen: boolean;
  onClose: () => void;
  jsonContent: JSONContent | null;
}

export function TiptapPreviewModal({
  isOpen,
  onClose,
  jsonContent,
}: TiptapPreviewModalProps) {
  if (!isOpen) return null;

  const renderedHtml = renderTiptapJsonToHtml(jsonContent);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-[#3B2A1F]/60 backdrop-blur-sm">
      <div className="relative z-10 flex flex-col w-full max-w-4xl max-h-[85vh] rounded-2xl border border-[#C4956A]/20 bg-white shadow-2xl overflow-hidden animate-[scaleIn_200ms_ease]">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-[#C4956A]/15 bg-[#FAF6F0] px-6 py-4">
          <div className="flex items-center gap-2">
            <Eye className="h-5 w-5 text-[#C4956A]" />
            <h2 className="font-serif text-lg font-bold text-[#2D2D2D]">
              Live Public Article Preview
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-gray-500 hover:bg-gray-200 hover:text-gray-800 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          <div
            className="prose max-w-none text-[#2D2D2D] leading-relaxed [&_h1]:text-2xl [&_h1]:font-serif [&_h1]:font-bold [&_h2]:text-xl [&_h2]:font-serif [&_h2]:font-bold [&_h3]:text-lg [&_h3]:font-serif [&_p]:my-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_table]:w-full [&_table]:border-collapse [&_table]:my-4 [&_th]:bg-[#FAF6F0] [&_th]:p-3 [&_th]:border [&_th]:border-[#C4956A]/20 [&_td]:p-3 [&_td]:border [&_td]:border-[#C4956A]/15"
            dangerouslySetInnerHTML={{ __html: renderedHtml }}
          />
        </div>

        {/* Footer */}
        <div className="flex items-center justify-end border-t border-gray-100 bg-gray-50 px-6 py-3 text-xs text-gray-500">
          <button
            onClick={onClose}
            className="rounded-xl bg-[#3B2A1F] px-5 py-2 text-xs font-semibold text-white hover:bg-[#C4956A] cursor-pointer"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}
