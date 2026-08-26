"use client";

import dynamic from "next/dynamic";
import { JSONContent } from "@tiptap/react";

const RichTextEditorComponent = dynamic(
  () => import("./RichTextEditor"),
  {
    ssr: false,
    loading: () => (
      <div className="flex h-[320px] items-center justify-center rounded-2xl border border-[#C4956A]/20 bg-white">
        <div className="flex flex-col items-center gap-2">
          <div className="h-7 w-7 animate-spin rounded-full border-2 border-[#C4956A] border-t-transparent" />
          <p className="text-xs text-gray-500 font-medium">Loading Tiptap Editor…</p>
        </div>
      </div>
    ),
  }
);

interface RichTextEditorWrapperProps {
  value: string | JSONContent;
  onChange: (content: string, json?: JSONContent) => void;
  placeholder?: string;
  onAutosave?: (json: JSONContent) => Promise<void> | void;
}

export default function RichTextEditorWrapper(props: RichTextEditorWrapperProps) {
  return <RichTextEditorComponent {...props} />;
}
