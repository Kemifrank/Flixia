import React from "react";
import { Link } from "react-router-dom";
import "./offers.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const Offers = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="offers-container">
      <h3>Our Offers</h3>
      <div className="offers-wrap">
        <div data-aos="flip-left" className="basic">
          <div className="basic-content">
            <h3>₦1,500</h3>
            <h3>Basic Plan</h3>
            <ul>
              <li>720p Available </li>
              <li>Watch on any Device</li>
              <li>Watch on your laptop</li>
              <li>20 Movies and Shows</li>
              <li>Watch on your mobile phone</li>
              <li>Download Available</li>
            </ul>
          </div>
          <Link to="/">
            <button className="offers-btn">Choose Plan</button>
          </Link>
        </div>
        <div data-aos="flip-right" className="standard">
          <div className="standard-content">
            <h3>₦2,500</h3>
            <h3>Standard Plan</h3>
            <ul>
              <li>HD available </li>
              <li>70 Movies and Shows</li>
              <li>Watch on your laptop</li>
              <li>Watch on your TV</li>
              <li>Watch on your mobile phone</li>
              <li>Download Available</li>
            </ul>
          </div>
          <Link to="/">
            <button className="offers-btn">Choose Plan</button>
          </Link>
        </div>
        <div data-aos="flip-left" className="premium">
          <div className="premium-content">
            <h3>₦4,400</h3>
            <h3>Premium Plan</h3>
            <ul>
              <li>HD available </li>
              <li>Ultra HD available</li>
              <li>Watch on your laptop</li>
              <li>Watch on your TV</li>
              <li>Watch on your mobile phone</li>
              <li>Unlimited movies, TV shows</li>
            </ul>
          </div>
          <Link to="/">
            <button className="offers-btn">Choose Plan</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Offers;
