"use client";

import { useState, useEffect } from "react";
import RichTextEditor from "./RichTextEditorWrapper";
import type { Product } from "@/types/admin.types";
import { X, Package } from "lucide-react";

interface ProductModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { name: string; price: string; category: string; description: string }) => void;
  editItem?: Product | null;
}

const CATEGORIES = [
  "Hair Care",
  "Hair Repair",
  "Styling",
  "Tools",
  "Skin Care",
  "Accessories",
  "Wigs",
  "Other",
];

export default function ProductModal({
  isOpen,
  onClose,
  onSave,
  editItem,
}: ProductModalProps) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [category, setCategory] = useState("Hair Care");
  const [description, setDescription] = useState("");

  useEffect(() => {
    if (editItem) {
      setName(editItem.name);
      setPrice(editItem.price);
      setCategory(editItem.category);
      setDescription(editItem.description);
    } else {
      setName("");
      setPrice("");
      setCategory("Hair Care");
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
    if (!name.trim()) return;
    onSave({
      name: name.trim(),
      price: price.trim(),
      category,
      description,
    });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[90] flex items-start justify-center overflow-y-auto py-8 px-4">
      <div className="fixed inset-0 bg-[#3B2A1F]/60 backdrop-blur-sm pointer-events-auto" />

      <div className="relative z-10 w-full max-w-3xl rounded-2xl border border-[#C4956A]/20 bg-white shadow-2xl animate-[scaleIn_200ms_ease]">

        <div className="flex items-center justify-between border-b border-[#C4956A]/15 bg-[#FAF6F0] px-6 py-4.5 rounded-t-2xl">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#C4956A] text-white">
              <Package className="h-5 w-5" />
            </div>
            <h2 className="font-serif text-lg font-bold text-[#2D2D2D]">
              {editItem ? "Edit Product" : "Add New Product"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-lg p-1.5 text-gray-500 transition-colors hover:bg-gray-200 hover:text-gray-800 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5 p-6">
          {/* Name row */}
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#3B2A1F]">
              Product Name <span className="text-rose-500">*</span>
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g. Moroccan Oil Treatment"
              required
              className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-[#2D2D2D] outline-none transition-colors placeholder:text-gray-400 focus:border-[#C4956A] focus:ring-2 focus:ring-[#C4956A]/20"
            />
          </div>

          {/* Price & Category */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#3B2A1F]">
                Price ($)
              </label>
              <input
                type="text"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                placeholder="e.g. 34"
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-[#2D2D2D] outline-none transition-colors placeholder:text-gray-400 focus:border-[#C4956A] focus:ring-2 focus:ring-[#C4956A]/20"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#3B2A1F]">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="w-full rounded-xl border border-gray-300 bg-white px-4 py-3 text-sm text-[#2D2D2D] outline-none transition-colors focus:border-[#C4956A] focus:ring-2 focus:ring-[#C4956A]/20"
              >
                {CATEGORIES.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Description */}
          <div>
            <label className="mb-1.5 block text-xs font-bold uppercase tracking-wider text-[#3B2A1F]">
              Description
            </label>
            <RichTextEditor
              value={description}
              onChange={setDescription}
              placeholder="Describe this product..."
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
              {editItem ? "Update Product" : "Create Product"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
