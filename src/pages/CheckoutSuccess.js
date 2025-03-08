import React from "react";
import { Link } from "react-router-dom";
import "../styles/checkoutSuccess.css";

function CheckoutSuccess() {
  return (
    <div className="checkout-success">
      <h1>Order Successful!</h1>
      <p>Thank you for your purchase. Your order has been placed.</p>
      <Link to="/">Return to Store</Link>
    </div>
  );
}

export default CheckoutSuccess;
