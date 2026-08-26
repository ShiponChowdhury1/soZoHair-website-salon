"use client";

import { useState } from "react";
import DataTable from "@/components/admin/DataTable";
import ServiceModal from "@/components/admin/ServiceModal";
import ConfirmDialog from "@/components/admin/ConfirmDialog";
import { useAdminData } from "@/context/AdminDataContext";
import type { Service } from "@/types/admin.types";
import type { Column } from "@/components/admin/DataTable";
import { Plus } from "lucide-react";

const columns: Column<Service>[] = [
  {
    key: "name",
    label: "Service Name",
    render: (item) => (
      <p className="font-serif font-bold text-[#2D2D2D]">{item.name}</p>
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

export default function ServicesPage() {
  const { services, addService, updateService, deleteService, toggleServiceStatus } =
    useAdminData();

  const [modalOpen, setModalOpen] = useState(false);
  const [editItem, setEditItem] = useState<Service | null>(null);
  const [deleteTarget, setDeleteTarget] = useState<Service | null>(null);

  const handleSave = (data: { name: string; price: string; description: string }) => {
    if (editItem) {
      updateService(editItem.id, data);
    } else {
      addService(data);
    }
    setEditItem(null);
  };

  const handleEdit = (item: Service) => {
    setEditItem(item);
    setModalOpen(true);
  };

  const handleDelete = (item: Service) => {
    setDeleteTarget(item);
  };

  const confirmDelete = () => {
    if (deleteTarget) {
      deleteService(deleteTarget.id);
      setDeleteTarget(null);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="font-serif text-2xl font-bold text-[#2D2D2D]">Services</h2>
          <p className="mt-1 text-sm text-[#666666]">
            Manage your salon services and pricing.
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
          Add Service
        </button>
      </div>

      <DataTable
        columns={columns}
        data={services}
        onEdit={handleEdit}
        onDelete={handleDelete}
        onToggleStatus={toggleServiceStatus}
        searchKey="name"
        emptyMessage="No services yet"
        emptyDescription="Add your first salon service."
      />

      <ServiceModal
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
        title="Delete Service"
        message={`Are you sure you want to delete "${deleteTarget?.name}"? This action cannot be undone.`}
        onConfirm={confirmDelete}
        onCancel={() => setDeleteTarget(null)}
      />
    </div>
  );
}
