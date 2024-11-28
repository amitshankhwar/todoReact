import React from "react";

export const Button = ({ onClear }) => {
  return (
    <>
      <button onClick={onClear} className="clear">Clear All</button>
    </>
  );
};
