import React from "react";
import { useNavigate } from "react-router-dom";
import "/Users/gerwy/Coding/Coursera - Meta Front-End Dev Course/React/Little_Lemon/src/components/Styling/Specials.css";
import Navigation from "../../Navigation/Navigation";
import Button from "../OtherComp/button";
import Card from "./Card";


const specials = [
  {
    id: 1,
    title: "Greek Salad",
    description:
      "A refreshing mix of crisp cucumbers, ripe tomatoes, tangy feta, and briny olives, drizzled with olive oil and a hint of oregano. Transport your taste buds to the Mediterranean",
    image:
      "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-main.jpg",
    price: "$9.99",
  },
  {
    id: 2,
    title: "Bruschetta",
    description:
      "Indulge in the authentic flavors of Italy with our perfectly crispy toasted bread, generously adorned with a vibrant medley of ripe, juicy tomatoes and fragrant, fresh basil leaves.",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/bruschetta-index-645d03e6f174d.jpg?crop=0.8890414878397711xw:1xh;center,top&resize=1200:*",
    price: "$7.50",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    description:
      "A zesty delight that combines the tangy freshness of ripe lemons with a velvety smooth texture. A must-try for lemon lovers!",
    image:
      "https://www.southernliving.com/thmb/z706skTv8rLcnFwyTEnMzr_H5zQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Southern-Living_27364_SR_Lemon-Lush_13190-fd96c709fc2946a7aeb5c869f9ad470e.jpg",
    price: "$10.00",
  },
];

const Specials = () => {
  const navigate = useNavigate();

  const onClickMenu = () => {
    navigate(Navigation.get("orders").path);
  };
  return (
    <div className="specials">
      <div className="header-container">
        <h1 className="specials-title">Specials</h1>
        <Button title={"Online Menu"} onClick={onClickMenu} />
      </div>

      <div className="header-list">
        {specials.map((special) => (
          <Card
            key={special.id}
            title={special.title}
            description={special.description}
            image={special.image}
            price={special.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Specials;