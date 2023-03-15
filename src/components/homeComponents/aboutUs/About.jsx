import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
import AOS from "aos";
import Image from "./moviebg.jpg";
import "aos/dist/aos.css";
import { useEffect } from "react";

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="about">
      <div className="about-container">
        <div data-aos="fade-left" className="about-content">
          <h2>About Us</h2>
          <p>
            Flixia is a streaming service that offers a wide variety of
            award-winning TV shows, movies, anime, documentaries, and more on
            thousands of internet-connected devices. You can watch as much as
            you want, whenever you want without a single commercial – all for
            one low monthly price. There's always something new to discover and
            new TV shows and movies are added every week!
            <br />
            Watch Flixia on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly fee. Plans range from
            ₦1,500 to ₦4,400 a month. No extra costs, no contracts.
          </p>
          <Link to="/">
            <button>Read More</button>
          </Link>
        </div>
        <div data-aos="fade-right" className="about-image">
          <img src={Image} alt={Image} />
        </div>
      </div>
    </div>
  );
};

export default About;
