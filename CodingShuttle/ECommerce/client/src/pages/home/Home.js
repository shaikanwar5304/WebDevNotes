import React, { useEffect, useState } from "react";
import Hero from "../../components/hero/Hero";
import Category from "../../components/category/Category";
import "./Home.scss";
import Product from "../../components/product/Product";
import { axiosClient } from "../../utils/axiosClient";
import axios from "axios";
import { useSelector } from "react-redux";
function Home() {
  const [topProducts, setTopProducts] = useState(null);
  const categories = useSelector((state) => state.categorySlice.categories);
  async function fetchData() {
    const topProductsResponse = await axiosClient.get(
      "/products?filters[isTopPick][$eq]=true&populate=image"
    );
    setTopProducts(topProductsResponse.data.data);
  }
  useEffect(() => {
    fetchData();
  }, []);
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
          {categories?.map((category) => (
            <Category key={category.id} category={category} />
          ))}
        </div>
      </section>
      <section className="collection2 container">
        <div className="info">
          <h2 className="heading">Our Top Pics</h2>
          <p className="subheading">All New Designs, Same Old Details</p>
        </div>
        <div className="content ">
          {topProducts?.map((product) => (
            <Product key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
