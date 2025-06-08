import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useNavigate } from "react-router-dom";
import "../styles/checkout.css";

function Checkout() {
  const { cartItems, clearCart } = useContext(CartContext);
  const navigate = useNavigate();

  // Calculate total cost
  const total = cartItems.reduce((acc, item) => {
    const productPrice =
      item.discountedPrice < item.price ? item.discountedPrice : item.price;
    return acc + productPrice * item.quantity;
  }, 0);

  // If the cart is empty, display a message
  if (cartItems.length === 0) {
    return (
      <div className="checkout-page">
        <h2>Checkout</h2>
        <p>Your cart is empty. Please add some products first.</p>
        <Link to="/">Go back to products</Link>
      </div>
    );
  }

  function handlePlaceOrder() {

    clearCart();
    navigate("/checkout/success"); 
  }

  return (
    <div className="checkout-page">
      <h2>Checkout</h2>

      <div className="checkout-summary">
        <h3>Order Summary</h3>
        <ul>
          {cartItems.map((item) => {
            const productPrice =
              item.discountedPrice < item.price
                ? item.discountedPrice
                : item.price;
            return (
              <li key={item.id}>
                {item.title} (x{item.quantity}) — $
                {(productPrice * item.quantity).toFixed(2)}
              </li>
            );
          })}
        </ul>
        <div className="checkout-total">
          <strong>Total: ${total.toFixed(2)}</strong>
        </div>
      </div>

      <button className="place-order-btn" onClick={handlePlaceOrder}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;
