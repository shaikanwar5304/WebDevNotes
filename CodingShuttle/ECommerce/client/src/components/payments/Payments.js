import React from "react";
import { BsFillCartCheckFill } from "react-icons/bs";
import { BiErrorCircle } from "react-icons/bi";
import { useParams } from "react-router-dom";
import "./Payments.scss";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cartSlice";

function Payments() {
  const params = useParams();
  const dispatch = useDispatch();
  const status = params.status;
  if (status !== "success" && status !== "failure") {
    window.location.href = "/404";
  }
  const infoData = {
    success: {
      message: "Your order has been placed",
      cta: "Shop More",
      icon: <BsFillCartCheckFill />,
    },
    failure: {
      message: "Payment Failed",
      cta: "Try Again Later",
      icon: <BiErrorCircle />,
    },
  };
  if (status === "success") {
    dispatch(resetCart());
  }
  function handleButton() {
    window.location.href = "/category";
  }
  return (
    <div className="Payments">
      <div className="icon"> {infoData[status].icon} </div>
      <h2 className="message">{infoData[status].message}</h2>
      <div className="btn-primary" onClick={handleButton}>
        {infoData[status].cta}
      </div>
    </div>
  );
}

export default Payments;
