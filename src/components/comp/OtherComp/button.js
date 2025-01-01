import React from "react";
import PropTypes from "prop-types";
import "/Users/gerwy/Coding/Coursera - Meta Front-End Dev Course/React/Little_Lemon/src/components/Styling/button.css";

const Button = React.memo(({ title, onClick, type }) => {
  const handleClick = (e) => {
    if (type !== 'submit') {
      e.preventDefault();
    }

    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      type={type}
      className="button"
      onClick={handleClick}
    >
      {title}
    </button>
  );
});

Button.defaultProps = {
  type: 'button',
  onClick: null,
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
};

export default Button;
