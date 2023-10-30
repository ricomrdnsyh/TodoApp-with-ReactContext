import React, { useContext, useState } from "react";
import { TodoContext } from "../context/todo-provider";

function TodoInput() {
  const {
    todos,
    setTodos,
    todoInput,
    setTodoInput,
    isEdit,
    todoEdit,
    setIsEdit,
  } = useContext(TodoContext);

  const handleClick = (e) => {
    e.preventDefault();

    if (isEdit) {
      let cloneTodo = [...todos];
      let index = cloneTodo.findIndex((item) => item.id == todoEdit.id);
      cloneTodo[index].value = todoInput;

      setTodos(cloneTodo);
      setIsEdit(false);
    } else {
      let newTodo = {
        id: new Date(),
        value: todoInput,
        status: false,
      };

      setTodos([...todos, newTodo]);
    }

    setTodoInput("");
  };

  return (
    <>
      <h1 className="font-bold text-3xl">
        <span className="text-[#FFA33C]">Todo App</span> with{" "}
        <span className="text-[#C70039]">React Context</span>
      </h1>
      <form className="flex justify-between gap-2 items-end">
        <input
          className="w-full mt-8 border-2 border-[#FFA33C] rounded-md py-2 px-2"
          type="text"
          placeholder="Input your todo..."
          value={todoInput}
          onChange={(e) => setTodoInput(e.target.value)}
        />
        <button
          className="bg-[#54B435] text-white px-6 py-2 border-2 border-[#54B435] rounded-md font-bold"
          onClick={handleClick}
        >
          {isEdit ? "EDIT" : "ADD"}
        </button>
      </form>
    </>
  );
}

export default TodoInput;
