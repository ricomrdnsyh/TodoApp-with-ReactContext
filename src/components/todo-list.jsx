import React, { useContext, useState } from "react";
import { TodoContext } from "../context/todo-provider";

function TodoList() {
  const { todos, setTodos, setTodoInput, setIsEdit, setTodoEdit } =
    useContext(TodoContext);

  const [filter, setFilter] = useState("ALL");

  const handleFilter = () => {
    switch (filter) {
      case "ACTIVE":
        return todos.filter((todo) => !todo.status);
      case "COMPLETED":
        return todos.filter((todo) => todo.status);
      default:
        return todos;
    }
  };

  const handleStatus = (index) => {
    let cloneTodos = [...todos];
    cloneTodos[index].status = !cloneTodos[index].status;

    setTodos([...cloneTodos]);
  };

  const handleEdit = (todo) => {
    setTodoEdit(todo);
    setTodoInput(todo.value);
    setIsEdit(true);
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id != id));
  };

  return (
    <div>
      <div className="flex gap-2 mt-8">
        <button
          onClick={() => setFilter("ALL")}
          className="px-4 bg-slate-400 rounded-md text-white hover:bg-[#54B435]"
        >
          ALL
        </button>
        <button
          onClick={() => setFilter("ACTIVE")}
          className="px-4 bg-slate-400 rounded-md text-white hover:bg-[#54B435]"
        >
          ACTIVE
        </button>
        <button
          onClick={() => setFilter("COMPLETED")}
          className="px-4 bg-slate-400 rounded-md text-white hover:bg-[#54B435]"
        >
          COMPLETED
        </button>
      </div>

      {handleFilter().map((todo, index) => (
        <div
          key={todo.id}
          className="flex justify-between gap-2 items-end mt-4 border-2 border-[#FFA33C] p-2 rounded-md"
        >
          <div>
            <button className="mr-3" onClick={() => handleStatus(index)}>
              ✅
            </button>
            <span className={todo.status ? "line-through" : ""}>
              {todo.value}
            </span>
          </div>
          <div>
            <button onClick={() => handleEdit(todo)}>✏️</button>
            <button onClick={() => handleDelete(todo.id)}>❌</button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
