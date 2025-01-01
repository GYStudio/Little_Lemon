import React from "react";
import "/Users/gerwy/Coding/Coursera - Meta Front-End Dev Course/React/Little_Lemon/src/components/Styling/Card.css";
import delivery from "/Users/gerwy/Coding/Coursera - Meta Front-End Dev Course/React/Little_Lemon/src/components/Images/delivery.svg";

const Card = ({ title, description, image, price }) => {
  return (
    <div className="card">
      <div className="card-image">
        <img src={image} alt="food" height={200}></img>
      </div>
      <div className="card-body">
        <div className="card-body-header">
          <div className="card-body-title-header">
            <p className="card-title">{title}</p>
            <p className="card-price">{price}</p>
          </div>
          <p className="card-description">{description}</p>
        </div>

        <div className="card-delivery">
          <p className="card-delivery-title">Order delivery!</p>
          <img src={delivery} alt="uber eats"></img>
        </div>
      </div>
    </div>
  );
};

export default Card;