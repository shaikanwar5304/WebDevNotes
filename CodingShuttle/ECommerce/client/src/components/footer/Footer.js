import React from "react";
import "./Footer.scss";
import { LuMail } from "react-icons/lu";
import { FaInstagram, FaTwitter, FaFacebookSquare } from "react-icons/fa";
import paymentImg from "../../assets/creditcardicons.png";
function Footer() {
  return (
    <div className="Footer">
      <div className="container">
        <div className="content flex-center">
          <div className="footer-left ">
            <div className="title">Follow us</div>
            <ul className="flex-center">
              <li className="hover-link">
                <FaInstagram />
              </li>
              <li className="hover-link">
                <FaTwitter />
              </li>
              <li className="hover-link">
                <FaFacebookSquare />
              </li>
              <li className="hover-link">
                <LuMail />
              </li>
            </ul>
          </div>
          <div className="footer-right ">
            <div className="title ">Company</div>
            <div className="company">
              <ul>
                <li className="hover-link">Contact Us</li>
                <li className="hover-link">Privacy Policy</li>
                <li className="hover-link">Returns And Exhcange Policy</li>
                <li className="hover-link">Terms & Conditions</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom flex-center">
          <img src={paymentImg} alt="" />
          <div>Copyright {new Date().getFullYear()} © All Rights Reserved</div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
