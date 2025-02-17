"use client";

import { useTodoList } from "@/hooks/use-todo-list";

export default function TodoList() {
  const { lists, moveItemToCategory, moveBackToMain } = useTodoList();

  return (
    <div className="grid grid-cols-3 gap-8 p-8">
      {/* Main List */}
      <div className="border rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4">Main List</h2>
        <div className="flex flex-col gap-2">
          {lists.mainList.map((item) => (
            <button
              key={item.name}
              onClick={() => moveItemToCategory(item)}
              className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Fruits List */}
      <div className="border rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4">Fruits</h2>
        <div className="flex flex-col gap-2">
          {lists.fruitList.map((item) => (
            <button
              key={item.name}
              onClick={() => moveBackToMain(item)}
              className="bg-red-500 text-white p-2 rounded hover:bg-red-600 transition"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>

      {/* Vegetables List */}
      <div className="border rounded-lg p-4">
        <h2 className="text-xl font-bold mb-4">Vegetables</h2>
        <div className="flex flex-col gap-2">
          {lists.vegetableList.map((item) => (
            <button
              key={item.name}
              onClick={() => moveBackToMain(item)}
              className="bg-green-500 text-white p-2 rounded hover:bg-green-600 transition"
            >
              {item.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
