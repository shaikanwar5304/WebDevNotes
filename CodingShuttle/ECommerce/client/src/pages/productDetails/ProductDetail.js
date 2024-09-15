import React from "react";
import dummyImg from "../../assets/naruto.jpeg";
import "./ProductDetail.scss";

function ProductDetail() {
  return (
    <div className="ProductDetail">
      <div className="container">
        <div className="product-layout flex-center">
          <div className="product-img flex-center">
            <img src={dummyImg} alt="product Img" />
          </div>
          <div className="product-info">
            <h1 className="heading">This is the Title, wall poster</h1>
            <h3 className="price">$ 49</h3>
            <p className="description">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sunt
              recusandae eaque, dolores fugit necessitatibus odio delectus
              perspiciatis, fugiat modi repellat unde maxime dolorum beatae
              inventore dicta ea nulla tempora amet!
            </p>
            <div className="cart-options">
              <div className="quatity-selector">
                <span className="btn decrement">-</span>
                <span className="quantity">3</span>
                <span className="btn increment">+</span>
              </div>
            </div>
            <button className="btn-primary add-to-cart">Add to Cart</button>
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
