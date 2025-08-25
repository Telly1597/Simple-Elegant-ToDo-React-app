"use client";
import React, { useEffect, useState } from "react";
import { tasks as initialTasks, Task } from "../Data/data";
import ToDoListCard from "./ToDoListCard";
import SingleItem from "./SingleItem";
import DeletePopup from "./DeletePopup";
import EditTaskPopup from "./EditPopUp";

export default function HomePage() {
  const [items, setItems] = useState<Task[]>([]);
  const [deleteOpen, setDeleteOpen] = useState(false);
  const [pendingId, setPendingId] = useState<string | null>(null);

  const [editOpen, setEditOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [editingInitial, setEditingInitial] = useState<{
    title: string;
    description: string;
    critical: boolean;
  }>({
    title: "",
    description: "",
    critical: false,
  });

  // Load from localStorage (fallback to initialTasks)
  useEffect(() => {
    const stored = localStorage.getItem("tasks");
    if (stored) setItems(JSON.parse(stored));
    else setItems(initialTasks);
  }, []);

  // Persist to localStorage on any change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(items));
  }, [items]);

  // ------- ADD -------
  const handleAdd = (title: string) => {
    const trimmed = title.trim();
    if (!trimmed) return;

    const newId = items.length
      ? String(Math.max(...items.map((t) => Number(t.id))) + 1)
      : "1";

    const newTask: Task = {
      id: newId,
      title: trimmed,
      description: "",
      critical: false,
      completed: false,
    };
    setItems((prev) => [...prev, newTask]);
  };

  // ------- DELETE -------
  const handleDeleteClick = (id: string) => {
    setPendingId(id);
    setDeleteOpen(true);
  };
  const confirmDelete = () => {
    if (pendingId) setItems((prev) => prev.filter((t) => t.id !== pendingId));
    setPendingId(null);
    setDeleteOpen(false);
  };

  // ------- EDIT -------
  const handleEditClick = (id: string) => {
    const t = items.find((x) => x.id === id);
    if (!t) return;
    setEditingId(id);
    setEditingInitial({
      title: t.title ?? "",
      description: t.description ?? "",
      critical: !!t.critical,
    });
    setEditOpen(true);
  };

  // ------- CHECKBOX FOR COMPLETED IS TOGGLED -------
  const handleToggleComplete = (id: string, completed: boolean) => {
    setItems((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed } : t))
    );
  };
  const handleSaveEdit = (data: {
    title: string;
    description: string;
    critical: boolean;
  }) => {
    if (!editingId) return;
    setItems((prev) =>
      prev.map((t) =>
        t.id === editingId
          ? {
              ...t,
              title: data.title,
              description: data.description,
              critical: data.critical,
            }
          : t
      )
    );
    setEditOpen(false);
    setEditingId(null);
  };

  return (
    <div className="flex flex-col items-center justify-start h-screen bg-gray-100 pt-10">
      <div className="bg-white rounded-lg shadow-md w-full max-w-2xl overflow-hidden">
        {/* Add new task */}
        <div className="px-6 pt-6 pb-4">
          <ToDoListCard onAdd={handleAdd} />
        </div>

        {/* full-width separator */}
        <div className="h-px bg-gray-300" />

        {/* List */}
        <div>
          {items.map((it) => (
            <div
              key={it.id}
              className="px-6 py-2 border-b border-gray-300 last:border-b-0"
            >
              <SingleItem
                id={it.id}
                name={it.title}
                completed={it.completed}
                onEdit={handleEditClick}
                onDelete={handleDeleteClick}
                onToggleComplete={handleToggleComplete}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Delete modal */}
      <DeletePopup
        open={deleteOpen}
        onClose={() => setDeleteOpen(false)}
        onConfirm={confirmDelete}
      />

      {/* Edit modal */}
      <EditTaskPopup
        open={editOpen}
        onClose={() => setEditOpen(false)}
        initial={editingInitial}
        onSave={handleSaveEdit}
      />
    </div>
  );
}
