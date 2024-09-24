import React, { useEffect, useState } from "react";
import dummyImg from "../../assets/naruto.jpeg";
import "./ProductDetail.scss";
import { axiosClient } from "../../utils/axiosClient";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addNItems } from "../../redux/cartSlice";
import { useNavigate } from "react-router-dom";
import NotFound from "../../components/notFound/NotFound";

function ProductDetail() {
  const params = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cartSlice.cart);
  console.log("first");
  const quantity =
    cart.find((item) => item.key === params.productId)?.quantity || 0;
  console.log(quantity);
  const [quantityInCart, setQuantityInCart] = useState(quantity);
  async function fetchData() {
    const productResponse = await axiosClient.get(
      `/products?filters[key][$eq]=${params.productId}&populate=image`
    );
    if (productResponse.data.data.length > 0) {
      setProduct(productResponse.data.data[0]);
    } else if (productResponse.data.data.length === 0) {
      navigate("/404");
    }
  }
  useEffect(() => {
    setProduct(null);
    fetchData();
    setQuantityInCart(quantity);
  }, [cart]);
  if (!product) {
    return <div className="notFound flex-center">loading...</div>;
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
                  onClick={() => {
                    setQuantityInCart(
                      quantityInCart - 1 > 0 ? quantityInCart - 1 : 0
                    );
                  }}
                >
                  -
                </span>
                <span className="quantity">{quantityInCart}</span>
                <span
                  className="btn increment"
                  onClick={() => {
                    setQuantityInCart(quantityInCart + 1);
                  }}
                >
                  +
                </span>
              </div>
            </div>
            <button
              className="btn-primary add-to-cart"
              onClick={() => {
                dispatch(addNItems({ ...product, quantity: quantityInCart }));
              }}
            >
              Add to Cart
            </button>
            <div className="return-policy">
              <ul>
                <li>
                  All orders are processed within 2-3 business days. Standard
                  shipping typically takes 5-7 business days, while expedited
                  options are available for faster delivery.
                </li>
                <li>
                  Tracking information will be provided once your order has
                  shipped.
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
