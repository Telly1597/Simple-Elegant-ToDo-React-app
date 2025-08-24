"use client";
import React from 'react'
interface SingleItemProps {
  id: string; // unique identifier for the item
  name: string;
  onEdit?: (id: string) => void;
  onDelete?: (id: string) => void;
}

const SingleItem: React.FC<SingleItemProps> = ({
  id,
  name,
  onEdit,
  onDelete,
}) => {
  return (
    <div className="flex flex-row items-center gap-4 py-2">
      {/* checkbox to mark complete */}
      <input type="checkbox" className="checkbox checkbox-primary w-6 h-6" />

      {/* name grows, truncates if too long */}
      <p className="flex-1 text-lg font-medium truncate">{name}</p>

      {/* actions fixed on the right */}
      <div className="flex items-center gap-4 shrink-0">
        <button
          className="text-blue-500 hover:text-blue-700 font-bold whitespace-nowrap"
          onClick={() => onEdit?.(id)}
        >
          Edit
        </button>
        <button
          className="text-red-500 hover:text-red-700 font-bold whitespace-nowrap"
          onClick={() => onDelete?.(id)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};

export default SingleItem;
