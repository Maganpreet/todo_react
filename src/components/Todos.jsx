import { useState } from "react";
import Todo from "./Todo";
import Input from './Input';

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
          return prevList.map((todo) =>
            todo.id === id ? { ...todo, text: editTodo } : todo
          );
        });
        setEditTodo("");
        setEditingId(-1);
      }
    } else {
      if (event.key === "Enter" && inputTodo) {
        console.log("insert");
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

  return (
    <>
      {todos.length > 0 && (
        <ol className="todo_list_container list-decimal list-outside text-2xl">
          {todos.map((todo) =>
            editingId === todo.id ? (
              <Input
                key={todo.id}
                todoId={todo.id}
                todoSetter={setEditTodo}
                enterHandler={handleEnter}
                value={editTodo}
                inputType={"edit"}
              ></Input>
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
      <Input
        todoId={null}
        todoSetter={setInputTodo}
        enterHandler={handleEnter}
        value={inputTodo}
        inputType={"insert"}
        placeholder={"Add a Todo"}
      ></Input>
    </>
  );
};

export default Todos;
