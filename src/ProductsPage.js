import React, { useEffect } from "react";
import { useCartStore } from "./useCartStore";
import CartComponent from "./CartComponent";
import "./ProductsPage.css";

export default function ProductsPage() {
  const { products, fetchAllProducts, addToCart } = useCartStore();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <>
      <div>
        <h2>All Products</h2>
        <div className="products-grid">
          {products.map((product) => (
            <div key={product.id} className="product-card">
              <strong className="product-title">{product.title}</strong>
              <img
                src={product.image}
                alt={product.title}
                className="product-image"
              />
              <p className="product-description">{product.description}</p>
              <p className="product-price">${product.price}</p>
              <button onClick={() => addToCart(product.id)}>Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
      <CartComponent />
    </>
  );
}
