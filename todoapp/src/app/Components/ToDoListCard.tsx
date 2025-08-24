import React from 'react'

export default function ToDoListCard() {
  return (
    <div className="flex flex-row items-center justify-center gap-4 px-4">
      <input
        className="flex-grow input border rounded px-3 py-2"
        type="text"
        name="TaskName"
        id="taskId"
        placeholder="Add a new Task"
        required
      ></input>
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Add
      </button>
    </div>
  );
}
