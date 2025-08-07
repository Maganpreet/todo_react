import { useState } from "react";
import Todo from "./Todo";

let todos_arr = [];

const Todos = () => {
  const [todos, setTodos] = useState(todos_arr);
  const [inputTodo, setInputTodo] = useState("");
  const [editingId, setEditingId] = useState(-1);
  const [editTodo, setEditTodo] = useState("");

  const handleEnter = (event, id, operation) => {
    if (operation === "edit") {
      if (event.key === "Enter" && editTodo) {
        console.log("edit");
        setTodos((prevList) => {
          prevList.map(todo => 
            todo.id === id ? { ...todo, text: editTodo } : todo
          );
        });
        setEditTodo("");
      }
    } else {
      if (event.key === "Enter" && inputTodo) {
        console.log("insert")
        setTodos((prevList) => {
          return [
            ...prevList,
            { id: prevList.length + 1, text: inputTodo, completed: false },
          ];
        });
        setInputTodo("");
      }
    }
  };

  const handleDelete = (id) => {
    setTodos((prevList) => prevList.filter((todo) => todo.id !== id));
  };

  const handleEdit = (id, editText) => {
    setEditTodo(editText);
    setEditingId(id);
  };

  console.log(todos);

  return (
    <>
      {todos.length > 0 && (
        <ol className="todo_list_container list-decimal list-inside text-2xl font-medium">
          {todos.map((todo) =>
            editingId === todo.id ? (
              <input
                key={todo.id}
                type="text"
                name="todo"
                onChange={(e) => setEditTodo(e.target.value)}
                onKeyDown={(e) => handleEnter(e, todo.id, "edit")}
                className="border-b ml-4 border-gray-700 w-2xl text-2xl focus:outline-none"
                value={editTodo}
              ></input>
            ) : (
              <Todo
                key={todo.id}
                id={todo.id}
                text={todo.text}
                completed={todo.completed}
                onEdit={handleEdit}
                onDelete={handleDelete}
              ></Todo>
            )
          )}
        </ol>
      )}
      <input
        type="text"
        name="todo"
        onChange={(e) => setInputTodo(e.target.value)}
        onKeyDown={(e) => handleEnter(e, null, "insert")}
        className="border-b ml-4 border-gray-700 w-2xl text-2xl focus:outline-none"
        value={inputTodo}
        placeholder="Add a Todo"
      />
    </>
  );
};

export default Todos;
