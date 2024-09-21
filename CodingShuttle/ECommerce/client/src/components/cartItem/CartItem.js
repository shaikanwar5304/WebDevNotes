import React from "react";
import itemImg from "../../assets/naruto.jpeg";
import { FaRegWindowClose } from "react-icons/fa";
import "./CartItem.scss";
import { removeFromCart, addToCart } from "../../redux/cartSlice";
import { useDispatch } from "react-redux";
function CartItem({ cart }) {
  const dispatch = useDispatch();
  console.log(cart, "cart");
  return (
    <div className="item">
      <div className="item-img">
        <img src={cart.image || itemImg} alt="item" />
      </div>
      <div className="item-info-wrapper">
        <div className="item-info">
          <h3 className="title">{cart.title}</h3>
          <div className="price">$ {cart.price}</div>
          <div className="quatity-selector">
            <span
              className="btn decrement"
              onClick={() => dispatch(removeFromCart(cart))}
            >
              -
            </span>
            <span className="quantity">{cart.quantity}</span>
            <span
              className="btn increment"
              onClick={() => dispatch(addToCart(cart))}
            >
              +
            </span>
          </div>
          <div className="total-price">
            Subtotal: $ {cart.quantity * cart.price}
          </div>
        </div>
      </div>
      <div className="item-remove">
        <FaRegWindowClose />
      </div>
    </div>
  );
}

export default CartItem;
