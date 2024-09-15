import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import { BsCart3 } from "react-icons/bs";
import Cart from "../cart/Cart";
function Navbar() {
  const [openCart, setOpenCart] = useState(false);
  return (
    <>
      <div className="Navbar">
        <div className="container nav-container">
          <div className="nav-left">
            <ul className="link-group">
              <li className="hover-link">
                <Link className="link" to="/products?category=comic">
                  Comics
                </Link>
              </li>
              <li className="hover-link">
                <Link className="link" to="/products?category=shows">
                  TV shows
                </Link>
              </li>
              <li className="hover-link">
                <Link className="link" to="/products?category=sports">
                  Sports
                </Link>
              </li>
            </ul>
          </div>
          <div className="nav-center">
            <Link to="/">
              <h1>Posterz.</h1>
            </Link>
          </div>
          <div className="nav-right">
            <div
              className="nav-cart hover-link"
              onClick={() => setOpenCart(!openCart)}
            >
              <BsCart3 className="icon" />
              <span className="cart-count flex-center">98+</span>
            </div>
          </div>
        </div>
      </div>
      {openCart && (
        <Cart
          onClose={() => {
            setOpenCart(false);
          }}
        />
      )}
    </>
  );
}

export default Navbar;
