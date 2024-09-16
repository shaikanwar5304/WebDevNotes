import React from "react";
import "./Cart.scss";
import { FaWindowClose } from "react-icons/fa";
import CartItem from "../cartItem/CartItem";
function Cart({ onClose }) {
  return (
    <div className="Cart">
      <div className="overlay" onClick={onClose}></div>
      <div className="cart-content">
        <div className="header flex-center">
          <h3>Shopping Cart</h3>
          <div className="close-btn" onClick={onClose}>
            <FaWindowClose />
          </div>
        </div>
        <div className="cart-body">
          <CartItem />
          <CartItem />
          <CartItem />
          <CartItem />
          <div className="checkout-info">
            <div className="total-amount flex-center">
              <div className="total-message">Total:</div>
              <div className="total-value">$ 629</div>
            </div>
            <div className="checkout btn-primary">Checkout now</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
