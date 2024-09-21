import React, { useEffect, useState } from "react";
import dummyImg from "../../assets/naruto.jpeg";
import "./ProductDetail.scss";
import { axiosClient } from "../../utils/axiosClient";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "../../redux/cartSlice";

function ProductDetail() {
  const params = useParams();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartSlice.cart);
  const quantity =
    cart.find((item) => item.key === params.productId)?.quantity || 0;
  async function fetchData() {
    const productResponse = await axiosClient.get(
      `/products?filters[key][$eq]=${params.productId}&populate=image`
    );
    if (productResponse.data.data.length > 0) {
      setProduct(productResponse.data.data[0]);
    }
  }
  useEffect(() => {
    setProduct(null);
    fetchData();
  }, []);
  if (!product) {
    return <div>loading...</div>;
  }
  return (
    <div className="ProductDetail">
      <div className="container">
        <div className="product-layout flex-center">
          <div className="product-img flex-center">
            <img
              src={product?.attributes.image.data.attributes.url || dummyImg}
              alt="product Img"
            />
          </div>
          <div className="product-info">
            <h1 className="heading">{product?.attributes.title}</h1>
            <h3 className="price">$ {product?.attributes.price}</h3>
            <p className="description">{product?.attributes.description}</p>
            <div className="cart-options">
              <div className="quatity-selector">
                <span
                  className="btn decrement"
                  onClick={() => dispatch(removeFromCart(product))}
                >
                  -
                </span>
                <span className="quantity">{quantity}</span>
                <span
                  className="btn increment"
                  onClick={() => dispatch(addToCart(product))}
                >
                  +
                </span>
              </div>
            </div>
            <button
              className="btn-primary add-to-cart"
              onClick={() => dispatch(addToCart(product))}
            >
              Add to Cart
            </button>
            <div className="return-policy">
              <ul>
                <li>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Omnis, repellendus.
                </li>
                <li>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                  repudiandae non mollitia labore, voluptatum cupiditate.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
