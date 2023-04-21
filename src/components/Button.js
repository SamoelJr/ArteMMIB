import React from "react";

const Button = ({ text, link }) => {
  return (
    <>
      <button
        className="buttonStarted"
        onClick={() => (window.location.href = link)}
      >
        {text}
      </button>
    </>
  );
};

export default Button;
