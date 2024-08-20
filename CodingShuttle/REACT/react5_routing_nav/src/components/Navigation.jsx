import React from "react";
import { Link } from "react-router-dom";
import Home from "../pages/Home";
import Pricing from "../pages/Pricing/Pricing";
import About from "../pages/About";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";
function Navigation() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/" element={<Home />}>
            Home
          </Link>
        </li>
        <li>
          <Link
            to="/About"
            state={{ key1: "value1", key2: "value2" }}
            element={<About />}/**when you want to send data only while routing through app Not by copy pasting the links */
          >
            About
          </Link>
        </li>
        <li>
          <Link to="/Pricing" element={<Pricing />}>
            Pricing
          </Link>
        </li>
        <li>
          <Link to="/RandomNotFound" element={<NotFound />}>
            Random
          </Link>
        </li>
        <li>
          <Link to="/Login" element={<Login />}>
            Login
          </Link>
        </li>
      </ul>
    </div>
  );
}
export default Navigation;
