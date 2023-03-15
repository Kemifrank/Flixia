import React from "react";
import "./offersComponents.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const OffersComponent = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="offersCom-container">
      <div className="offersCom-content">
        <h1 data-aos="fade-right">Enjoy Endless movies, TV shows, and more</h1>
        <p data-aos="fade-right">
          Flixia has an extensive library of feature films, documentaries, TV
          shows, anime, award-winning
          <br />
          <span>Flixia</span> originals, and more. Watch as much as you want,
          anytime you want
        </p>
        <h4 data-aos="fade-right">
          Ready to watch? Enter your email to create or restart your membership.
        </h4>
      </div>
    </div>
  );
};

export default OffersComponent;
