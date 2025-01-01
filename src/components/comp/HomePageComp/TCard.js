import React from "react";
import PropTypes from "prop-types";
import "/Users/gerwy/Coding/Coursera - Meta Front-End Dev Course/React/Little_Lemon/src/components/Styling/TCard.css";
import star from "/Users/gerwy/Coding/Coursera - Meta Front-End Dev Course/React/Little_Lemon/src/components/Images/star.svg";

const TCard = React.memo(({ author, description, image, rating }) => {
  return (
    <div className="testimonial-card" data-testid="testimonial-card">
      <div className="testimonial-rating">
        {Number.isInteger(rating) &&
          [...Array(rating)].map((_, index) => (
            <img
              key={index}
              src={star}
              alt={`Star ${index + 1} of ${rating}`}
              height={15}
              width={15}
            />
          ))}
      </div>

      <div className="testimonial-card-container">
        <img
          className="testimonial-profile-picture"
          src={image}
          alt={`Profile of ${author}`}
          height={50}
        />
        <p className="testimonial-card-author">{author}</p>
      </div>
      <p className="testimonial-description">{description}</p>
    </div>
  );
});

TCard.propTypes = {
  author: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  rating: PropTypes.number,
};

export default TCard;
