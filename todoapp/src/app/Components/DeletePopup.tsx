"use client";
import React from "react";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

export default function DeletePopup({
  open,
  onClose,
  onConfirm,
}: {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
}) {
  return (
    <Popup
      open={open}
      onClose={onClose}
      modal
      closeOnDocumentClick
      overlayStyle={{ background: "rgba(0,0,0,0.35)" }} // dim backdrop
      contentStyle={{ background: "transparent", border: "none", padding: 0 }} // let Tailwind style the card
    >
      <div className="w-[360px] rounded-2xl bg-white shadow-2xl ring-1 ring-black/10">
        {/* inset panel vibe */}
        <div className="rounded-2xl bg-gray-50 p-6">
          <h2 className="text-2xl font-bold text-gray-900 text-center">
            Delete Task
          </h2>
          <p className="mt-2 text-center text-gray-600">Are you sure?</p>
        </div>

        {/* actions */}
        <div className="grid grid-cols-2 gap-3 p-4 pt-3">
          <button
            className="h-11 rounded-xl border border-gray-300 bg-white text-gray-800 font-medium hover:bg-gray-50"
            onClick={onClose}
          >
            Cancel
          </button>
          <button
            className="h-11 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 shadow-sm"
            onClick={onConfirm}
          >
            Delete
          </button>
        </div>
      </div>
    </Popup>
  );
}
