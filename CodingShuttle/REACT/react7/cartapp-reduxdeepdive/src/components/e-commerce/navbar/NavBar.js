import React from 'react'
import {IoCartOutline} from 'react-icons/io5'
import './NavBar.css'
import { useSelector } from 'react-redux';
function NavBar() {
  const cart = useSelector(state=>state.cartSlice.cart)
  let quant =0
  for (let i =0;i<cart.length;i++){
    quant+=cart[i].quantity
  }
  return (
      <nav>
        <h2 className="banner">My Myntra</h2>
        <div className="right-layout">
          <div className="cart-layout">
            <IoCartOutline />
            <h3>{quant}</h3>
          </div>
        </div>
      </nav>
  );
}

export default NavBar