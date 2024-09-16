import React from "react";
import itemImg from "../../assets/naruto.jpeg";
import { FaRegWindowClose } from "react-icons/fa";
import "./CartItem.scss";
function CartItem() {
  return (
    <div className="item">
      <div className="item-img">
        <img src={itemImg} alt="item" />
      </div>
      <div className="item-info-wrapper">
        <div className="item-info">
          <h3 className="title">Product Title here</h3>
          <div className="price">$ 49</div>
          <div className="quatity-selector">
            <span className="btn decrement">-</span>
            <span className="quantity">3</span>
            <span className="btn increment">+</span>
          </div>
          <div className="total-price">Subtotal: $ 242</div>
        </div>
      </div>
      <div className="item-remove">
        <FaRegWindowClose />
      </div>
    </div>
  );
}

export default CartItem;
