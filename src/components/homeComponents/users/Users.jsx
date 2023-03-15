import React from "react";
import CountUp from "react-countup";
import { useState } from "react";
import ScrollTrigger from "react-scroll-trigger";
import "./users.css";

const Users = () => {
  const [counterOn, setCounterOn] = useState(false);
  return (
    <div className="">
      <div className="users-container">
        <h2>
          <span>10000+</span> Users
        </h2>
        <h1>Around the World</h1>

        <ScrollTrigger
          onEnter={() => setCounterOn(true)}
          onExit={() => setCounterOn()}
          className="counter-container"
        >
          <div className="box-1">
            <h1>
              {counterOn && (
                <CountUp start={0} end={200} duration={3} delay={0} />
              )}
              +
            </h1>
            <p>Total Videos</p>
          </div>
          <div className="box-1">
            <h1>
              {counterOn && (
                <CountUp start={0} end={20} duration={3} delay={0} />
              )}
              +
            </h1>
            <p>Position</p>
          </div>
          <div className="box-1">
            <h1>
              {counterOn && (
                <CountUp start={0} end={50} duration={3} delay={0} />
              )}
              +
            </h1>
            <p>Awards</p>
          </div>
          <div className="box-1">
            <h1>
              {counterOn && (
                <CountUp start={0} end={5000} duration={3} delay={0} />
              )}
              +
            </h1>
            <p>Subcribers</p>
          </div>
        </ScrollTrigger>
      </div>
    </div>
  );
};

export default Users;
