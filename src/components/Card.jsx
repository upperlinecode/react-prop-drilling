import React from "react";
import "../App.css";
import CardImage from "./CardImage.jsx";
import CardInfo from "./CardInfo.jsx";

const Card = (props) => {
  return (
    <li className="cards-item fourth">
      <div className="card">
        <div className="card-content">
          <CardImage />
          <CardInfo />
        </div>
      </div>
    </li>
  );
};

export default Card;
