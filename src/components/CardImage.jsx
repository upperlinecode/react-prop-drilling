import React from "react";
import "../App.css";

const CardImage = (props) => {
  return (
    <div
      className="card-image"
      style={{
        backgroundImage: `url(${
          props.image || "https://via.placeholder.com/300/BBBBBB/FFFFFF/"
        })`,
      }}
    ></div>
  );
};

export default CardImage;
