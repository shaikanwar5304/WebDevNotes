import React, { useEffect, useState } from "react";
import "./Categories.scss";
import Product from "../../components/product/Product";
import { useNavigate, useParams } from "react-router-dom";
function Categories() {
  const navigate = useNavigate();
  const params = useParams();
  const [categoryId, setCategoryId] = useState("");
  const categoryList = [
    {
      id: "comics",
      value: "Comics",
    },
    {
      id: "tv-shows",
      value: "TV Shows",
    },
    {
      id: "sports",
      value: "Sports",
    },
  ];
  useEffect(() => {
    setCategoryId(params.categoryId);
  }, [params]);
  function handleChange(e) {
    navigate("/category/" + e.target.value);
  }
  return (
    <div className="Categories">
      <div className="container">
        <div className="header">
          <div className="info">
            <h2>Explore All Pring and Artwork</h2>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Praesentium voluptatibus, mollitia cum adipisci eveniet expedita
              sint optio!
            </p>
          </div>
          <div className="sort-by">
            <div className="sort-by-container">
              <div className="sort-by-text">Sort By</div>
              <select name="sort-by" className="select-sort-by" id="sort-by">
                <option value="relavance">relavance</option>
                <option value="newest-first">newest first</option>
                <option value="price low-high">price low to high</option>
              </select>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="filter-box">
            <div className="category-filter">
              <h3>Category</h3>
              {categoryList.map((item) => {
                return (
                  <div key={item.id} className="filter-radio">
                    <input
                      type="radio"
                      id={item.id}
                      value={item.id}
                      onClick={handleChange}
                      name="category"
                      checked={item.id === categoryId}
                    />
                    <label htmlFor={item.id}>{item.value}</label>
                  </div>
                );
              })}
            </div>{" "}
          </div>
          <div className="products-box">
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
