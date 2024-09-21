import React, { useEffect, useState } from "react";
import "./Collection.scss";
import Product from "../../components/product/Product";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { axiosClient } from "../../utils/axiosClient";
function Collections() {
  const navigate = useNavigate();
  const params = useParams();
  const [categoryId, setCategoryId] = useState("");
  const categories = useSelector((state) => state.categorySlice?.categories);
  const [products, setProducts] = useState();
  const sortOptions = [
    {
      value: "price - Low to High",
      sort: "price",
    },
    {
      value: "Newest First",
      sort: "createdAt",
    },
  ];
  const [sortBy, setSortBy] = useState(sortOptions[0].sort);
  function handleSortChange(e) {
    const sortKey = e.target.value;
    setSortBy(sortKey);
  }
  async function fetchProducts() {
    const url = params.categoryId
      ? `/products?populate=image&filters[category][key][$eq]=${params.categoryId}&sort=${sortBy}`
      : `/products?populate=image&sort=${sortBy}`;
    const response = await axiosClient.get(url);
    setProducts(response.data.data);
    console.log(response, "resposne data");
  }
  useEffect(() => {
    setCategoryId(params.categoryId);
    fetchProducts();
  }, [params, sortBy]);
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
              <select
                name="sort-by"
                className="select-sort-by"
                id="sort-by"
                onChange={handleSortChange}
              >
                {sortOptions.map((item) => (
                  <option value={item.sort}>{item.value}</option>
                ))}
              </select>
            </div>
          </div>
        </div>
        <div className="content">
          <div className="filter-box">
            <div className="category-filter">
              <h3>Category</h3>
              {categories.map((item) => {
                return (
                  <div key={item.id} className="filter-radio">
                    <input
                      type="radio"
                      id={item.id}
                      value={item.attributes.key}
                      onClick={handleChange}
                      name="category"
                      checked={item.attributes.key === categoryId}
                    />
                    <label htmlFor={item.id}>{item.attributes.title}</label>
                  </div>
                );
              })}
            </div>{" "}
          </div>
          <div className="products-box">
            {products?.map((product) => {
              return <Product key={product.id} product={product} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Collections;
