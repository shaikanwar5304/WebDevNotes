import React from "react";
import Hero from "../../components/hero/Hero";
import Category from "../../components/category/Category";
import "./Home.scss";
import Product from "../../components/product/Product";
function Home() {
  return (
    <div>
      <Hero />
      <section className="collection container">
        <div className="info">
          <h2 className="heading">Shop by categories</h2>
          <p className="subheading">
            Shop from the best our Film and TV Posters Collections
          </p>
        </div>
        <div className="content flex-center">
          <Category />
          <Category />
          <Category />
        </div>
      </section>
      <section className="collection2 container">
        <div className="info">
          <h2 className="heading">Our Top Pics</h2>
          <p className="subheading">All New Designs, Same Old Details</p>
        </div>
        <div className="content flex-center">
          <Product />
          <Product />
          <Product />
          <Product />
        </div>
      </section>
    </div>
  );
}

export default Home;
