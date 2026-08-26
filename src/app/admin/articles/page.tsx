"use client";

import { useState } from "react";
import DataTable from "@/components/admin/DataTable";
import ArticleModal from "@/components/admin/ArticleModal";
import ConfirmDialog from "@/components/admin/ConfirmDialog";
import { useAdminData } from "@/context/AdminDataContext";
import type { Article } from "@/types/admin.types";
import type { Column } from "@/components/admin/DataTable";
import { Plus } from "lucide-react";

const columns: Column<Article>[] = [
  {
    key: "title",
    label: "Title",
    render: (item) => (
      <div className="max-w-md">
        <p className="truncate font-serif font-bold text-[#2D2D2D]">{item.title}</p>
      </div>
    ),
  },
];

export default function ArticlesPage() {
  const { articles, addArticle, updateArticle, deleteArticle, toggleArticleStatus } =
    useAdminData();

  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<Article | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Article | null>(null);

  const handleSave = (data: { title: string; description: string }) => {
    if (editItem) {
      updateArticle(editItem.id, data);
    } else {
      addArticle(data);
    }
    setEditItem(null);
  };

  const handleEdit = (item: Article) => {
    setEditItem(item);
    setModalOpen(true);
  };

  const handleDelete = (item: Article) => {
    setDeleteTarget(item);
  };

  const confirmDelete = () => {
    if (deleteTarget) {
      deleteArticle(deleteTarget.id);
      setDeleteTarget(null);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-serif text-2xl font-bold text-[#2D2D2D]">Articles</h2>
          <p className="mt-1 text-sm text-[#666666]">
            Manage your salon blog articles and rich content.
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
          Add Article
        </button>
      </div>

      {/* Table */}
      <DataTable
        columns={columns}
        data={articles}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onToggleStatus={toggleArticleStatus}
        searchKey="title"
        emptyMessage="No articles yet"
        emptyDescription="Create your first salon article to get started."
      />

      {/* Modal */}
      <ArticleModal
        isOpen={modalOpen}
        onClose={() => {
          setModalOpen(false);
          setEditItem(null);
        }}
        onSave={handleSave}
        editItem={editItem}
      />

      {/* Delete confirmation */}
      <ConfirmDialog
        isOpen={!!deleteTarget}
        title="Delete Article"
        message={`Are you sure you want to delete "${deleteTarget?.title}"? This action cannot be undone.`}
        onConfirm={confirmDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}
