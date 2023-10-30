import TodoInfo from "./components/todo-info";
import TodoInput from "./components/todo-input";
import TodoList from "./components/todo-list";

function App() {
  return (
    <div className="text-center border-2 border-slate-400 md:mx-96 md:px-8 md:py-4 sm:my-4 rounded-md">
      <TodoInput />

      <TodoList />

      <TodoInfo />
    </div>
  );
}

export default App;
