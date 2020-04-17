import React from "react";

import CountUp from "react-countup";

import Spinner from "../spinner/Spinner";

import icon from "../../assets/up.png";

import "./cards.style.css";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return <Spinner />;
  }
  return (
    <div className="cards-container">
      <div className="info">
        <div className="card">
          <h2 className="card-title">Infected</h2>
          <CountUp
            start={0}
            end={confirmed.value}
            duration={2.5}
            separator=","
            className="count-up"
          />
          <h4 className="date">{new Date(lastUpdate).toDateString()}</h4>
          <img className="icon" src={icon} alt="" />
          <h4 className="text blue">
            Number of <span>active</span> cases of COVID-19
          </h4>
        </div>
        <div className="card">
          <h2 className="card-title">Recovered</h2>
          <CountUp
            start={0}
            end={recovered.value}
            duration={2.5}
            separator=","
            className="count-up"
          />
          <h4 className="date">{new Date(lastUpdate).toDateString()}</h4>
          <img className="icon" src={icon} alt="" />
          <h4 className="text green">
            Number of <span>recovered</span> cases of COVID-19
          </h4>
        </div>
        <div className="card">
          <h2 className="card-title">Deaths</h2>
          <CountUp
            start={0}
            end={deaths.value}
            duration={2.5}
            separator=","
            className="count-up"
          />
          <h4 className="date">{new Date(lastUpdate).toDateString()}</h4>
          <img className="icon" src={icon} alt="" />
          <h4 className="text red">
            Number of <span>deaths</span> caused by COVID-19
          </h4>
        </div>
      </div>
    </div>
  );
};

export default Cards;
