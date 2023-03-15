import React from "react";
import Nav from "../nav/Nav";
import Hero from "../hero/Hero";
import About from "../homeComponents/aboutUs/About";
import Offers from "../homeComponents/offers/Offers";
import Users from "../homeComponents/users/Users";
import Footer from "../homeComponents/footer/Footer";
import Form from "../signUpComponents/Form";
const Home = () => {
  return (
    <div>
      <Nav />
      <Hero />
      <About />
      <Offers />
      <Users />
      <Form />
      <Footer />
    </div>
  );
};

export default Home;
