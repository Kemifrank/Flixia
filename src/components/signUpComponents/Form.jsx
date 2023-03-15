import React from "react";
import "./form.css";
import "aos/dist/aos.css";
import { useEffect } from "react";
import AOS from "aos";

const Form = () => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return <div></div>;
};

export default Form;
