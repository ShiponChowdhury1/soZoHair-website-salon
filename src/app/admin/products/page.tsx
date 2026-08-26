"use client";

import { useState } from "react";
import DataTable from "@/components/admin/DataTable";
import ProductModal from "@/components/admin/ProductModal";
import ConfirmDialog from "@/components/admin/ConfirmDialog";
import { useAdminData } from "@/context/AdminDataContext";
import type { Product } from "@/types/admin.types";
import type { Column } from "@/components/admin/DataTable";
import { Plus } from "lucide-react";

const columns: Column<Product>[] = [
  {
    key: "name",
    label: "Product Name",
    render: (item) => (
      <p className="font-serif font-bold text-[#2D2D2D]">{item.name}</p>
    ),
  },
  {
    key: "category",
    label: "Category",
    width: "150px",
    render: (item) => (
      <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-xs font-semibold text-blue-700 ring-1 ring-blue-600/20">
        {item.category}
      </span>
    ),
  },
  {
    key: "price",
    label: "Price",
    width: "120px",
    render: (item) => (
      <span className="rounded-lg bg-[#FAF6F0] px-3 py-1.5 text-xs font-bold text-[#C4956A] border border-[#C4956A]/20">
        ${item.price}
      </span>
    ),
  },
];

export default function ProductsPage() {
  const { products, addProduct, updateProduct, deleteProduct, toggleProductStatus } =
    useAdminData();

  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<Product | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Product | null>(null);

  const handleSave = (data: {
    name: string;
    price: string;
    category: string;
    description: string;
  }) => {
    if (editItem) {
      updateProduct(editItem.id, data);
    } else {
      addProduct(data);
    }
    setEditItem(null);
  };

  const handleEdit = (item: Product) => {
    setEditItem(item);
    setModalOpen(true);
  };

  const handleDelete = (item: Product) => {
    setDeleteTarget(item);
  };

  const confirmDelete = () => {
    if (deleteTarget) {
      deleteProduct(deleteTarget.id);
      setDeleteTarget(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-serif text-2xl font-bold text-[#2D2D2D]">Products</h2>
          <p className="mt-1 text-sm text-[#666666]">
            Manage your salon products and inventory.
          </p>
        </div>
        <button
          onClick={() => {
            setEditItem(null);
            setModalOpen(true);
          }}
          className="inline-flex items-center gap-2 rounded-xl bg-[#C4956A] px-5 py-2.5 text-sm font-semibold text-white shadow-md shadow-[#C4956A]/20 transition-all hover:bg-[#B3845A] cursor-pointer"
        >
          <Plus className="h-4 w-4" />
          Add Product
        </button>
      </div>

      <DataTable
        columns={columns}
        data={products}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onToggleStatus={toggleProductStatus}
        searchKey="name"
        emptyMessage="No products yet"
        emptyDescription="Add your first product listing."
      />

      <ProductModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditItem(null);
        }}
        onSave={handleSave}
        editItem={editItem}
      />

      <ConfirmDialog
        isOpen={!!deleteTarget}
        title="Delete Product"
        message={`Are you sure you want to delete "${deleteTarget?.name}"? This action cannot be undone.`}
        onConfirm={confirmDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}
