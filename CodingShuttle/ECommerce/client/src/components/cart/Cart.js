import React from "react";
import "./Cart.scss";
import { FaWindowClose } from "react-icons/fa";
import CartItem from "../cartItem/CartItem";
import { useSelector } from "react-redux";
function Cart({ onClose }) {
  const cart = useSelector((state) => state.cartSlice.cart);
  let totalAmount = 0;
  cart.forEach((item) => (totalAmount += item.quantity * item.price));
  const isCartEmpty = cart.length === 0;
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
          {cart.map((item) => (
            <CartItem cart={item} />
          ))}
          {isCartEmpty && (
            <div className="empty-cart-info">
              <div className="icon"></div>
              <h3>Cart is Empty</h3>
            </div>
          )}
          {!isCartEmpty && (
            <div className="checkout-info">
              <div className="total-amount flex-center">
                <div className="total-message">Total:</div>
                <div className="total-value">$ {totalAmount}</div>
              </div>
              <div className="checkout btn-primary">Checkout now</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Cart;
