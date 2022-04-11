import React from "react";
import "../App.css";
import WikiButton from "./WikiButton.jsx";

const CardInfo = (props) => {
  // Assign placeholder values to any prop not passed in.
  const name = props.name || "Island Name";
  const description = props.description || "Description";
  const lat = props.lat || "Lat";
  const lon = props.lon || "Lon";
  return (
    <div className="card-container">
      <div className="card-title">{name}</div>
      <p className="card-text description">{description}</p>
      <p className="card-text lat-lon">
        {lat}, {lon}
      </p>
      <WikiButton />
    </div>
  );
};

export default CardInfo;
