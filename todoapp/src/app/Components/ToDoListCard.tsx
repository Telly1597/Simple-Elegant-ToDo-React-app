import React, { useState } from "react";
export default function ToDoListCard({
  onAdd,
}: {
  onAdd: (title: string) => void;
}) {
  const [taskName, setTaskName] = useState(""); // controlled input

  const submit = () => {
    if (!taskName.trim()) return;
    onAdd(taskName);
    setTaskName("");
  };
  return (
    <div className="flex flex-row items-center justify-center gap-4 px-4">
      <input
        className="flex-grow border rounded px-3 py-2"
        type="text"
        value={taskName}
        onChange={(e) => setTaskName(e.target.value)}
        placeholder="Add a new Task"
        required
      />
      <button
        onClick={submit}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
      >
        Add
      </button>
    </div>
  );
}
