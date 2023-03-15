import React from "react";
import Nav from "../../nav/Nav";
import OffersComponent from "../../offersComponent/OffersComponent";
import Offers from "../../homeComponents/offers/Offers";
import Playlist from "../../offersComponent/playlist/Playlist";
import Users from "../../homeComponents/users/Users";
import Footer from "../../homeComponents/footer/Footer";
const Offerspages = () => {
  return (
    <div>
      <Nav />
      <OffersComponent />
      <Offers />
      <Playlist />
      <Users />
      <Footer />
    </div>
  );
};

export default Offerspages;
