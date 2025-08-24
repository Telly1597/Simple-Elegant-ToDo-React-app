"use client";
import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

type Props = {
  open: boolean;
  onClose: () => void;
  onSave: (data: {
    title: string;
    description: string;
    critical: boolean;
  }) => void;
  initial?: { title?: string; description?: string; critical?: boolean };
};

export default function EditTaskPopup({
  open,
  onClose,
  onSave,
  initial,
}: Props) {
  const [title, setTitle] = useState(initial?.title ?? "");
  const [description, setDescription] = useState(initial?.description ?? "");
  const [critical, setCritical] = useState(!!initial?.critical);

  // keep fields in sync when opening with different initial values
  useEffect(() => {
    if (open) {
      setTitle(initial?.title ?? "");
      setDescription(initial?.description ?? "");
      setCritical(!!initial?.critical);
    }
  }, [open, initial]);

  const handleSave = () =>
    onSave({ title: title.trim(), description: description.trim(), critical });

  return (
    <Popup
      open={open}
      onClose={onClose}
      modal
      closeOnDocumentClick
      overlayStyle={{ background: "rgba(0,0,0,0.35)" }}
      contentStyle={{ background: "transparent", border: "none", padding: 0 }}
    >
      <div className="w-[380px] rounded-2xl bg-white shadow-2xl ring-1 ring-black/10">
        {/* Header panel */}
        <div className="rounded-2xl bg-gray-50 p-6">
          <h2 className="text-3xl font-extrabold text-gray-900 text-center">
            Edit Task
          </h2>
          <p className="mt-2 text-center text-gray-600">Are you sure</p>
        </div>

        {/* Form */}
        <div className="px-6 pt-5 pb-4 space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Title
            </label>
            <input
              className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Description
            </label>
            <textarea
              className="w-full rounded-xl border border-gray-300 bg-white px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-none"
              rows={3}
              placeholder="Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>

          <label className="flex items-center gap-3 select-none">
            <input
              type="checkbox"
              className="w-5 h-5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              checked={critical}
              onChange={(e) => setCritical(e.target.checked)}
            />
            <span className="text-gray-800 font-medium">Critical</span>
          </label>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-3 px-6 pb-6">
          <button
            className="h-11 rounded-xl border border-gray-300 bg-white text-gray-800 font-medium hover:bg-gray-50"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="h-11 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 shadow-sm disabled:opacity-50"
            onClick={handleSave}
            disabled={!title.trim()}
          >
            Save
          </button>
        </div>
      </div>
    </Popup>
  );
}
