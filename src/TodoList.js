import React from "react";
import { useTodoStore } from "./useTodoStore";
import "./TodoList.css";

export default function TodoList() {
  const [todoValue, setTodoValue] = React.useState("");
  const { todos, addTodo, deleteTodo } = useTodoStore((state) => state);

  const handleSubmit = (e) => {
    e.preventDefault();

    addTodo(todoValue);
    setTodoValue("");
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label htmlFor="new-todo" id="shopping-list-title">
          Shopping List
        </label>
        <div className="input-group">
          <input
            type="text"
            id="new-todo"
            name="newTodo"
            value={todoValue}
            onChange={(e) => setTodoValue(e.target.value)}
          />
          <button type="submit">Add</button>
        </div>
      </form>

      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              <span
                style={{
                  textDecoration: todo.isCompleted ? "line-through" : "unset",
                }}
              >
                {todo.text}{" "}
              </span>
              <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </>
  );
}
