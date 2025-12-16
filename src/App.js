import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import TodoList from "./TodoList";
import ProductsPage from "./ProductsPage";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <h1>Store Front</h1>

        <nav>
          <Link to="/">Home</Link> | <Link to="/products">All Products</Link>
        </nav>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <TodoList />
              </>
            }
          />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
