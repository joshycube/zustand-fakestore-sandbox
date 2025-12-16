import React, { useEffect } from "react";
import { useCartStore } from "./useCartStore";
import CartComponent from "./CartComponent";

export default function ProductsPage() {
  const { products, fetchAllProducts, addToCart } = useCartStore();

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <>
      <div>
        <h2>All Products</h2>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              <strong>{product.title}</strong> - ${product.price}
              <button onClick={() => addToCart(product.id)}>Add to Cart</button>
            </li>
          ))}
        </ul>
      </div>
      <CartComponent />
    </>
  );
}
