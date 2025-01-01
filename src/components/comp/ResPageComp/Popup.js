import React from "react";
import PropTypes from "prop-types";
import "/Users/gerwy/Coding/Coursera - Meta Front-End Dev Course/React/Little_Lemon/src/components/Styling/Popup.css";
import Button from "../OtherComp/button";

const Popup = React.memo(({ title, description, onClose }) => {
  return (
    <>
      <div
        data-testid="popup-background"
        className="popup-background"
        onClick={onClose}
        role="button"
        aria-label="Close popup"
        tabIndex={0}
      ></div>
      <div className="popup" role="dialog" aria-labelledby="popup-title" aria-describedby="popup-description">
        <h2 id="popup-title" className="popup-title">{title}</h2>
        <p id="popup-description" className="popup-description">{description}</p>
        <div className="popup-button">
          <Button onClick={onClose} title="Close" />
        </div>
      </div>
    </>
  );
});

Popup.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Popup;
