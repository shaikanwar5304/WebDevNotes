import React from "react";
import naruto from "../../assets/naruto.jpeg";
import "./Product.scss";
import { useNavigate } from "react-router-dom";
function Product() {
  const navigate = useNavigate();
  return (
    <div className="Product" onClick={() => navigate("/products/asdfgdg")}>
      <div className="img-container">
        <img src={naruto} alt="" />
      </div>
      <p className="title">Delux Wall Manget 23", 23x23 Solid Color</p>
      <p className="price">$ 43</p>
    </div>
  );
}

export default Product;
