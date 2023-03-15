import React from "react";
import "./hero.css";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Hero = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="hero-container">
      <div data-aos="fade-right" className="hero-content">
        <h1>Enjoy Endless movies, TV shows, and more</h1>
        <p>Enjoy anywhere. Unsubscribe anytime.</p>
        <h4>
          Ready to watch? Enter your email to create or restart your membership.
        </h4>
      </div>
      <form>
        <input type="email" />
        <button className="form-btn">Get Started</button>
      </form>
    </div>
  );
};

export default Hero;
