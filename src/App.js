import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { ShoppingCart } from "lucide-react";
import { useCartStore } from "./useCartStore";
import ProductsPage from "./ProductsPage";
import HomePage from "./HomePage";

export default function App() {
  const cart = useCartStore((state) => state.cart);
  const basketCount = (cart?.products ?? []).reduce(
    (total, item) => total + (item.quantity ?? 1),
    0,
  );

  return (
    <BrowserRouter>
      <div className="App">
        <h1>Store Front</h1>

        <nav
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div>
            <Link to="/">Home</Link> | <Link to="/products">All Products</Link>
          </div>
          <div style={{ position: "relative", display: "inline-flex" }}>
            <ShoppingCart size={50} />
            {basketCount > 0 && (
              <span
                style={{
                  position: "absolute",
                  top: "-8px",
                  right: "-8px",
                  background: "#007bff",
                  color: "white",
                  borderRadius: "50%",
                  fontSize: "14px",
                  fontWeight: "bold",
                  width: "24px",
                  height: "24px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {basketCount}
              </span>
            )}
          </div>
        </nav>

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
