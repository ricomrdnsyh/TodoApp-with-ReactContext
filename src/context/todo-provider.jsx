import { createContext, useState } from "react";

export const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([
    { id: 1, value: "Belajar HTML", status: false },
    { id: 2, value: "Belajar CSS", status: false },
    { id: 3, value: "Belajar Javascript", status: false },
  ]);
  const [todoInput, setTodoInput] = useState("");
  const [todoEdit, setTodoEdit] = useState({});

  const [isEdit, setIsEdit] = useState("");

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        todoInput,
        setTodoInput,
        isEdit,
        setIsEdit,
        todoEdit,
        setTodoEdit,
      }}
    >
      {children}
    </TodoContext.Provider>
  );
}

export default TodoProvider;
