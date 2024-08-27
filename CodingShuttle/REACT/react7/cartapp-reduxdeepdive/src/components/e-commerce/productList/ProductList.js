import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../redux/slices/productSlice";
import SingleProduct from "../singleProduct/SingleProduct";
import "./ProductList.css";
function ProductList() {
  const products = useSelector((state) => state.productReducer.products);
  const status = useSelector((state) => state.productReducer.status);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchData("args"));
  }, [dispatch]);
  if (status === "pending") return <div>Loading...</div>;
  return (
    <div className="ProductList">
      {products.map((item) => {
        return <SingleProduct key={item.id} product={item} />;
      })}
    </div>
  );
}

export default ProductList;
