import React from "react";
import "./playlist.css";
import { Link } from "react-router-dom";
import Image from "./img.jpg";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const Playlist = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="playlist">
      <div className="playlist-container">
        <div data-aos="fade-left" className="playlist-image">
          <img src={Image} alt={Image} />
        </div>
        <div data-aos="fade-right" className="playlist-content">
          <h2>Stream Anytime Anyday</h2>
          <p>
            Flixia is flexible. There are no pesky contracts and no commitments.
            You can easily cancel your account online in two clicks. There are
            no cancellation fees – start or stop your account anytime.. You can
            watch as much as you want, whenever you want without a single
            commercial – all for one low monthly price. There's always something
            new to discover and new TV shows and movies are added every week!
            <br />
            Watch Flixia on your smartphone, tablet, Smart TV, laptop, or
            streaming device, all for one fixed monthly fee. Plans range from
            ₦1,500 to ₦4,400 a month. No extra costs, no contracts.
          </p>
          <Link to="/">
            <button>Click to stream</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Playlist;
