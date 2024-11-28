import React from "react";

export const Button = ({ onClear }) => {
  return (
    <>
      <button onClick={onClear}>Clear All</button>
    </>
  );
};
