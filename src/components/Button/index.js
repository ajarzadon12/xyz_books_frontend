import React from "react";

const Button = (props) => {
  const { label = 'btn', type = 'filled', ...otherProps } = props;

  return (
    <button
      className={`button__container ${type === 'link' && 'link'}`}
      {...otherProps}
    >
      {label}
    </button>
  );
};

export default Button;
