import React, { useEffect, useMemo, useState } from "react";
import { useCartStore } from "./useCartStore";
import CartComponent from "./CartComponent";
import ProductErrorBoundary from "./ProductErrorBoundary";
import "./ProductsPage.css";

// function CrashTest() {
//   throw new Error("Boundary test error");
// }

export default function ProductsPage() {
  const { products, fetchAllProducts, addToCart } = useCartStore();
  const [selectedCategory, setSelectedCategory] = useState("all");

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <>
      <div>
        <h2>All Products</h2>
        <label id="category-filter">
          Filter by category:
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            <option value="all">All</option>
            <option value="electronics">Electronics</option>
            <option value="jewelery">Jewellery</option>
            <option value="men's clothing">Men's Clothing</option>
            <option value="women's clothing">Women's Clothing</option>
          </select>
        </label>

        <ProductErrorBoundary>
          {/* <CrashTest /> */}
          <div className="products-grid">
            {products
              .filter((product) =>
                selectedCategory === "all"
                  ? true
                  : product.category === selectedCategory,
              )
              .map((product) => (
                <div key={product.id} className="product-card">
                  <strong className="product-title">{product.title}</strong>
                  <img
                    src={product.image}
                    alt={product.title}
                    className="product-image"
                  />
                  <p className="product-description">{product.description}</p>
                  <p className="product-price">${product.price}</p>
                  <button onClick={() => addToCart(product.id)}>
                    Add to Cart
                  </button>
                </div>
              ))}
          </div>
        </ProductErrorBoundary>
      </div>
    </>
  );
}
