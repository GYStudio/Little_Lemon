import React from "react";
import { useNavigate } from "react-router-dom";
import "/Users/gerwy/Coding/Coursera - Meta Front-End Dev Course/React/Little_Lemon/src/components/Styling/Hero.css";
import navigation from "../../Navigation/Navigation";
import Button from "../OtherComp/button";
import Image from "/Users/gerwy/Coding/Coursera - Meta Front-End Dev Course/React/Little_Lemon/src/components/Images/chef.jpeg";



const Hero = () => {
  const navigate = useNavigate();
  const onClickReserve = () => {
    navigate(navigation.get("reservations").path);
  }

  return (
    <div className="hero-background">
      <div className="hero">
        <div>
          <h1 className="title">Little Lemon</h1>
          <h2 className="subtitle">Los Angeles</h2>
          <p>
            Situated in the sun-kissed city of LA, Little Lemon blends 
            contemporary style with a touch of classic elegance." Our diverse, 
            artisanal menu, featuring delectable bruschettas, succulent burgers, 
            and refreshing Greek salads, is a testament to 
            our belief that food is an art.
          </p>
          <Button title={"Reserve a table"} onClick={onClickReserve} />
        </div>

        <img
          className="image"
          src={Image}
          alt="Restarurant food"
          height={200}
          width={200}
        />
      </div>
    </div>
  );
};

export default Hero;