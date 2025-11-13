import React, {useEffect} from "react";
import { useCartStore } from "./useCartStore";

export default function CartComponent() {
  const { cart, fetchCart } = useCartStore();

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
      {cart.products.map(cartItem => (
        <div key={cartItem.productId}>Item: {cartItem.productId}</div>
      ))}
    </div>
  );
}
