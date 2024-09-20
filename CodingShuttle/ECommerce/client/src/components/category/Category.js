import React from "react";
import "./Category.scss";
import { useNavigate } from "react-router-dom";
function Category({ category }) {
  console.log(category);
  const navigate = useNavigate();
  return (
    <div
      className="Category"
      style={{
        backgroundImage: `url(${category.attributes.image?.data.attributes.url})`,
      }}
      onClick={() => navigate(`/category/${category.attributes.key}`)}
    >
      <div className="content flex-center">
        <h3>{category.attributes.title}</h3>
      </div>
    </div>
  );
}

export default Category;
