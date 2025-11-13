import React from "react";
import TodoList from "./TodoList";
import AnotherComponent from "./AnotherComponent";
import CartComponent from "./CartComponent";

export default function App() {
  return (
    <div className="App">
      <h1>Todo list App with Zustand</h1>
      <TodoList />
      <AnotherComponent />
      <CartComponent />
    </div>
  );
}
