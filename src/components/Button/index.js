import React from "react";

const Button = (props) => {
  const { label = 'btn', type = 'filled', color = "light", ...otherProps } = props;

  return (
    <button
      className={`button__container ${type === 'link' && 'link'}  ${color === 'dark' && 'dark'}`}
      {...otherProps}
    >
      {label}
    </button>
  );
};

export default Button;
