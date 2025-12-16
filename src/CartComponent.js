import React, { useEffect } from "react";
import { useCartStore } from "./useCartStore";
import "./CartComponent.css";

export default function CartComponent() {
  const { cart, deleteAllItems, deleteItem, fetchCart, products, fetchAllProducts } = useCartStore();

  useEffect(() => {
    fetchCart();
    fetchAllProducts();
  }, []);

  console.log("Cart state - in component:", cart);

  if (!cart) {
    return <div>Loading cart...</div>;
  }

  if(cart && !cart?.products?.length > 0) {
    return <div>Add something to your cart</div>
  }

  return (
    <div>
      <h2>Cart</h2><button onClick={() => deleteAllItems()}>Empty cart</button>
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
              <span>{product.title}</span><button onClick={() => deleteItem(product.id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
