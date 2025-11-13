import React from "react";
import { useTodoStore } from "./useTodoStore";

export default function AnotherComponent() {
  const { todos } = useTodoStore();

  return (
    <div>
      <h2>Another Component</h2>

      {todos.map((todo) => (
        <>{todo.text}</>
      ))}
    </div>
  );
}
