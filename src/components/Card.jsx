import React from "react";
import "../App.css";
import CardImage from "./CardImage.jsx";
import CardInfo from "./CardInfo.jsx";

const Card = (props) => {
  return (
    <li className="cards-item fourth">
      <div className="card">
        <div className="card-content">
          <CardImage image={props.image} />
          <CardInfo
            name={props.name}
            description={props.description}
            lat={props.lat}
            lon={props.lon}
          />
        </div>
      </div>
    </li>
  );
};

export default Card;
