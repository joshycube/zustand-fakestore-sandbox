import React, {useEffect} from "react";
import { useCartStore } from "./useCartStore";

export default function CartComponent() {
  const { cart, fetchCart, completeCartItem } = useCartStore();

  useEffect(() => {
    fetchCart();
  }, []);

  console.log('Cart state - in component:', cart);

  if (!cart || !cart?.products?.length > 0) {
    return <div>Loading cart...</div>
  }
  
  return (
    <div>
      <h2>Cart</h2>
      <ul>
      {cart.products.map(cartItem => (
        <li key={cartItem.productId}>
          <a style={{ textDecoration: cartItem.isCompleted ? "line-through" : "unset" }} 
              onClick={() => completeCartItem(cartItem.productId)}>
            Item: {cartItem.productId}
          </a>
        </li>
      ))}
      </ul>
    </div>
  );
}
