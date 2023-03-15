import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { ImWhatsapp } from "react-icons/im";

const Footer = () => {
  return (
    <div>
      <div className="footer">
        <div className="footer-content">
          <div className="copyright">
            <p>
              Copyright © <span>Flixia</span> 2022. All Right Reserved
            </p>
          </div>

          <div className="icons">
            <BsFacebook className="facebook" />
            <BsTwitter className="facebook" />
            <ImWhatsapp className="facebook" />
            <BsInstagram className="facebook" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
