import React from "react";
import "/Users/gerwy/Coding/Coursera - Meta Front-End Dev Course/React/Little_Lemon/src/components/Styling/About.css";
import ResFood from "/Users/gerwy/Coding/Coursera - Meta Front-End Dev Course/React/Little_Lemon/src/components/Images/resfood1.jpeg";
import Res from "/Users/gerwy/Coding/Coursera - Meta Front-End Dev Course/React/Little_Lemon/src/components/Images/resImage1.jpeg";

const About = () => {
  return (
    <div className="about">
      <div>
        <h1 className="about-title">Little Lemon</h1>
        <h2 className="about-subtitle">Los Angeles</h2>
        <p className="about-description">
        Tucked away in the vibrant city of Los Angeles, Little Lemon offers a unique 
        blend of contemporary style and nostalgic comfort. Our eclectic, handcrafted menu 
        showcases mouthwatering bruschettas, delectable lemon desserts, and invigorating Greek salads, 
        reflecting our philosophy that cuisine is a form of art. Prepared by skilled chefs 
        using fresh, locally-sourced ingredients, our meals not only please the taste buds 
        but also nourish the spirit. Whether you're in the mood for a romantic evening, 
        a family gathering, or a laid-back setting with friends, Little Lemon is the perfect culinary haven. 
        Visit us in the heart of LA for a memorable dining experience.
        </p>
      </div>

      <img
        className="about-image-bruchetta"
        src={ResFood}
        alt="Restarurant food"
        height={200}
        width={200}
      />
      <img
        className="about-image-restaurant"
        src={Res}
        alt="Restarurant food"
        height={200}
        width={200}
      />
    </div>
  );
};

export default About;