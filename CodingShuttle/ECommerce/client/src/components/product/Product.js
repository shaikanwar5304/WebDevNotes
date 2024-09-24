import React from "react";
import naruto from "../../assets/naruto.jpeg";
import "./Product.scss";
import { useNavigate } from "react-router-dom";
function Product({ product }) {
  const navigate = useNavigate();
  console.log(product);
  return (
    <div
      className="Product"
      onClick={() => navigate(`/products/${product?.attributes?.key}`)}
    >
      <div className="img-container flex-center">
        <img
          src={product?.attributes?.image?.data.attributes.url || naruto}
          alt={product?.attributes?.key}
        />
      </div>
      <p className="title">{product?.attributes?.title}</p>
      <p className="price">$ {product?.attributes?.price}</p>
    </div>
  );
}

export default Product;
