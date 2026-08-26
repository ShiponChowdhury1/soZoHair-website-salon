"use client";

import { useState } from "react";
import RichTextEditorWrapper from "@/components/admin/RichTextEditorWrapper";
import { renderTiptapJsonToHtml } from "@/components/admin/tiptap/renderTiptapHtml";
import { JSONContent } from "@tiptap/react";
import { Save, Eye, CheckCircle2, FileText, Database } from "lucide-react";

/**
 * Sample Mongoose Article Schema Definition (for MongoDB reference):
 * 
 * const ArticleSchema = new Schema({
 *   title: { type: String, required: true },
 *   slug: { type: String, required: true, unique: true },
 *   content: { type: Object, required: true }, // Tiptap JSON Object
 *   status: { type: String, enum: ['draft', 'published'], default: 'draft' },
 * }, { timestamps: true });
 * 
 * export const ArticleModel = models.Article || model('Article', ArticleSchema);
 */

export default function SampleMongoDBArticlePage() {
  const [title, setTitle] = useState("Spring Haircare & Spa Treatments 2026");
  const [status, setStatus] = useState<"draft" | "published">("draft");
  const [tiptapJson, setTiptapJson] = useState<JSONContent | null>(null);
  const [htmlOutput, setHtmlOutput] = useState("");
  const [isSavedToMongo, setIsSavedToMongo] = useState(false);
  const [activeTab, setActiveTab] = useState<"editor" | "json" | "public">("editor");

  const handleEditorChange = (html: string, json?: JSONContent) => {
    setHtmlOutput(html);
    if (json) {
      setTiptapJson(json);
    }
  };

  // Simulated MongoDB Save Handler
  const handleSaveToMongoDB = async (jsonToSave?: JSONContent) => {
    const payload = {
      title,
      content: jsonToSave || tiptapJson,
      status,
      updatedAt: new Date().toISOString(),
    };

    console.log("Saving Article to MongoDB:", payload);
    setIsSavedToMongo(true);
    setTimeout(() => setIsSavedToMongo(false), 3000);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between border-b border-[#C4956A]/20 pb-4">
        <div>
          <div className="flex items-center gap-2 text-[#C4956A] text-xs font-bold uppercase tracking-wider">
            <Database className="h-4 w-4" />
            MongoDB Article Integration
          </div>
          <h2 className="font-serif text-2xl font-bold text-[#2D2D2D] mt-1">
            Tiptap Article Editor & Preview
          </h2>
        </div>

        <div className="flex items-center gap-3">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value as "draft" | "published")}
            className="rounded-xl border border-gray-300 bg-white px-3 py-2 text-xs font-bold text-[#2D2D2D] outline-none"
          >
            <option value="draft">Status: Draft</option>
            <option value="published">Status: Published</option>
          </select>

          <button
            onClick={() => handleSaveToMongoDB()}
            className="flex items-center gap-2 rounded-xl bg-[#C4956A] px-5 py-2.5 text-xs font-bold text-white shadow-md hover:bg-[#B3845A] cursor-pointer"
          >
            <Save className="h-4 w-4" />
            Save to MongoDB
          </button>
        </div>
      </div>

      {/* MongoDB Save Toast Notification */}
      {isSavedToMongo && (
        <div className="flex items-center gap-2 rounded-xl bg-emerald-50 border border-emerald-300 p-3 text-xs font-bold text-emerald-800 animate-[fadeIn_150ms_ease]">
          <CheckCircle2 className="h-4 w-4 text-emerald-600" />
          Successfully saved article payload (content: Tiptap JSON) to MongoDB!
        </div>
      )}

      {/* Title Field */}
      <div>
        <label className="block text-xs font-bold uppercase text-gray-700 mb-1">Article Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full rounded-xl border border-gray-300 bg-white p-3 text-sm font-semibold text-[#2D2D2D] outline-none focus:border-[#C4956A]"
        />
      </div>

      {/* Tab Selector: Editor | Tiptap JSON | Public HTML Preview */}
      <div className="flex border-b border-[#C4956A]/20 bg-white rounded-t-2xl p-1 gap-2 border">
        <button
          onClick={() => setActiveTab("editor")}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold cursor-pointer ${
            activeTab === "editor" ? "bg-[#C4956A] text-white" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <FileText className="h-4 w-4" />
          Tiptap Editor
        </button>

        <button
          onClick={() => setActiveTab("json")}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold cursor-pointer ${
            activeTab === "json" ? "bg-[#C4956A] text-white" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <Database className="h-4 w-4" />
          MongoDB JSON Format
        </button>

        <button
          onClick={() => setActiveTab("public")}
          className={`flex items-center gap-2 rounded-xl px-4 py-2 text-xs font-bold cursor-pointer ${
            activeTab === "public" ? "bg-[#C4956A] text-white" : "text-gray-600 hover:text-gray-900"
          }`}
        >
          <Eye className="h-4 w-4" />
          Rendered Public HTML
        </button>
      </div>

      {/* Tab 1: Editor */}
      {activeTab === "editor" && (
        <RichTextEditorWrapper
          value={tiptapJson || ""}
          onChange={handleEditorChange}
          onAutosave={async (json) => {
            await handleSaveToMongoDB(json);
          }}
          placeholder="Start writing article content with formatting, tables, images, and videos..."
        />
      )}

      {/* Tab 2: MongoDB JSON Output */}
      {activeTab === "json" && (
        <div className="rounded-2xl border border-gray-200 bg-[#FAF6F0] p-4">
          <p className="text-xs font-bold uppercase tracking-wider text-[#3B2A1F] mb-2">
            Mongoose Document `content` Field (JSON Format):
          </p>
          <pre className="overflow-x-auto rounded-xl bg-white p-4 text-xs text-gray-800 border border-gray-200 font-mono max-h-[450px]">
            {JSON.stringify({ title, status, content: tiptapJson || {} }, null, 2)}
          </pre>
        </div>
      )}

      {/* Tab 3: Rendered Public HTML */}
      {activeTab === "public" && (
        <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm space-y-4">
          <div className="border-b border-gray-100 pb-3">
            <span className="text-[11px] uppercase font-bold text-[#C4956A]">Public View</span>
            <h1 className="font-serif text-3xl font-bold text-[#2D2D2D] mt-1">{title}</h1>
          </div>

          <div
            className="prose max-w-none text-[#2D2D2D] leading-relaxed [&_h1]:text-2xl [&_h1]:font-serif [&_h1]:font-bold [&_h2]:text-xl [&_h2]:font-serif [&_h2]:font-bold [&_h3]:text-lg [&_h3]:font-serif [&_p]:my-3 [&_ul]:list-disc [&_ul]:pl-5 [&_ol]:list-decimal [&_ol]:pl-5 [&_table]:w-full [&_table]:border-collapse [&_table]:my-4 [&_th]:bg-[#FAF6F0] [&_th]:p-3 [&_th]:border [&_th]:border-[#C4956A]/20 [&_td]:p-3 [&_td]:border [&_td]:border-[#C4956A]/15"
            dangerouslySetInnerHTML={{
              __html: renderTiptapJsonToHtml(tiptapJson) || htmlOutput || "<p>No content written yet.</p>",
            }}
          />
        </div>
      )}
    </div>
  );
}
