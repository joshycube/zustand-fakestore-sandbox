import React, { useEffect } from "react";
import { useCartStore } from "./useCartStore";
import "./CartComponent.css";

export default function CartComponent() {
  const { cart, fetchCart, products, fetchAllProducts } = useCartStore();

  useEffect(() => {
    fetchCart();
    fetchAllProducts();
  }, []);

  console.log("Cart state - in component:", cart);

  if (!cart || !cart?.products?.length > 0) {
    return <div>Loading cart...</div>;
  }

  return (
    <div>
      <h2>Cart</h2>
      <ul>
        {cart.products.map((cartItem) => {
          const product = products.find(
            (product) => product.id === cartItem.productId
          );

          return (
            <li
              key={cartItem.productId}
              className={cartItem.isCompleted ? "completed-fading" : ""}
            >
              <span>{product.title}</span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
