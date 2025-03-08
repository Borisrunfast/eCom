import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";

function CartIcon() {
  // Pull cartItems from context
  const { cartItems } = useContext(CartContext);

  // Calculate total number of items in the cart
  // If each item in cartItems has "quantity", you can sum that:
  const cartCount = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <Link to="/cart" className="cart-icon">
      <img src="/shoppingcart.svg" alt="Shopping cart" className="shopping-cart"/>

      {/* Show the cart count if it's greater than 0 */}
      {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
    </Link>
  );
}

export default CartIcon;
