"use client";
import React, { useState } from "react";
import ToDoListCard from "./ToDoListCard";
import SingleItem from "./SingleItem";
import DeletePopup from "./DeletePopup";
import EditTaskPopup from "./EditPopUp";
import { tasks as initialTasks, Task } from "../Data/data" // <-- adjust path if needed

export default function HomePage() {
  // use the exported tasks as initial state
  const [items, setItems] = useState<Task[]>(initialTasks);

  // DELETE modal state
  const [openDelete, setOpenDelete] = useState(false);
  const [pendingId, setPendingId] = useState<string | null>(null);

  // EDIT modal state
  const [editOpen, setEditOpen] = useState(false);
  const [editing, setEditing] = useState<{ id: string | null; title: string; description: string; critical: boolean }>({
    id: null,
    title: "",
    description: "",
    critical: false,
  });

  // Delete flow
  const handleDeleteClick = (id: string) => {
    setPendingId(id);
    setOpenDelete(true);
  };
  const confirmDelete = () => {
    if (pendingId) setItems(prev => prev.filter(it => it.id !== pendingId));
    setOpenDelete(false);
    setPendingId(null);
  };

  // Edit flow
  const handleEditClick = (id: string) => {
    const t = items.find(it => it.id === id);
    if (!t) return;
    setEditing({
      id: t.id,
      title: t.title ?? "",
      description: t.description ?? "",
      critical: !!t.critical,
    });
    setEditOpen(true);
  };
  const handleSave = (data: { title: string; description: string; critical: boolean }) => {
    setItems(prev =>
      prev.map(it =>
        it.id === editing.id ? { ...it, title: data.title, description: data.description, critical: data.critical } : it
      )
    );
    setEditOpen(false);
  };

  return (
    <div className="flex flex-col items-center justify-start  h-screen bg-gray-100">
      <h1 className="font-bold mb-4 text-2xl">TO-DO LIST:</h1>
      <div className="bg-white rounded-lg shadow-md w-full max-w-2xl overflow-hidden">
        <div className="px-6 pt-6 pb-4">
          <ToDoListCard />
        </div>
        <div className="h-px bg-gray-300" />
        <div className="divide-y divide-gray-300">
          {items.map((it) => (
            <div key={it.id} className="px-6 py-2">
              <SingleItem
                id={it.id}
                name={it.title}
                onDelete={handleDeleteClick}
                onEdit={handleEditClick}
              />
            </div>
          ))}
        </div>
      </div>
      <DeletePopup
        open={openDelete}
        onClose={() => setOpenDelete(false)}
        onConfirm={confirmDelete}
      />

      <EditTaskPopup
        open={editOpen}
        onClose={() => setEditOpen(false)}
        initial={{
          title: editing.title,
          description: editing.description,
          critical: editing.critical,
        }}
        onSave={handleSave}
      />
    </div>
  );
}