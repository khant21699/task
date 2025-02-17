import TodoList from "@/components/todo-list/todo-list";

export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <h1 className="text-2xl font-bold text-center mb-8">
        Fruit and Vegetable Sorter
      </h1>
      <TodoList />
    </main>
  );
}
