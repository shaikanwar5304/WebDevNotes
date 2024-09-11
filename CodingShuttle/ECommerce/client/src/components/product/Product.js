import React from "react";
import naruto from "../../assets/naruto.jpeg";
import "./Product.scss";
function Product() {
  return (
    <div className="Product">
      <div className="img-container">
        <img src={naruto} alt="" />
      </div>
      <p className="title">Delux Wall Manget 23", 23x23 Solid Color</p>
      <p className="price">$ 43</p>
    </div>
  );
}

export default Product;
