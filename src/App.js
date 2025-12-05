import React from "react";
import TodoList from "./TodoList";
import AnotherComponent from "./AnotherComponent";
import CartComponent from "./CartComponent";

export default function App() {
  return (
    <div className="App">
      <h1>Shopping cart</h1>
      <CartComponent />
    </div>
  );
}
