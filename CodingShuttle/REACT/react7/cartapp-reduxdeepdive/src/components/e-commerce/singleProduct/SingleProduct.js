import React from "react";
import "./SingleProduct.css";
import { addToCart } from "../../../redux/slices/cartSlice";
import { removeFromCart } from "../../../redux/slices/cartSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function SingleProduct({ product }) {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartSlice.cart);
  const currItem = cart.find((item) => item.id === product.id);
  const quantity = currItem ? currItem.quantity : 0;

  return (
    <div className="SingleProduct">
      <img
        className="product-img"
        src={product.images[2]}
        alt={product.category.image}
      />
      <div className="productInfo">
        <h2 className="product-title">{product.title}</h2>
        <p className="product-price">{product.price}</p>
      </div>
      <div className="cartInfo">
        <button
          onClick={() => {
            dispatch(removeFromCart(product.id));
          }}
        >
          -
        </button>
        <h3>{quantity}</h3>
        <button
          onClick={() => {
            dispatch(addToCart(product.id));
          }}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default SingleProduct;
