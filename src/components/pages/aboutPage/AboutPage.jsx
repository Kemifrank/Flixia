import React from "react";
import AboutComponent from "../../aboutComponent/AboutComponent";
import About from "../../homeComponents/aboutUs/About";
import Footer from "../../homeComponents/footer/Footer";
import Users from "../../homeComponents/users/Users";
import Nav from "../../nav/Nav";

const AboutPage = () => {
  return (
    <div>
      <Nav />
      <AboutComponent />
      <About />
      <Users />
      <Footer />
    </div>
  );
};

export default AboutPage;
