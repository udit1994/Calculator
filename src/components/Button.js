import React from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "./ThemeProvider";
import "../styles/button.css";

function Button({ label, onButtonClick, value, wide }) {
  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <button
          type="button"
          className={`${theme}-btn ${wide ? "btn-wide" : "btn"}`}
          value={value}
          onClick={onButtonClick}
        >
          {label}
        </button>
      )}
    </ThemeContext.Consumer>
  );
}

Button.propTypes = {
  label: PropTypes.string.isRequired,
  onButtonClick: PropTypes.func.isRequired,
  value: PropTypes.string,
  wide: PropTypes.bool,
};

Button.defaultProps = {
  value: null,
  wide: false,
};

export default Button;
