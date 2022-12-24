import React from "react";

const Button = ({ styles }) => (
  <button type="button" className={`py-3 px-4 font-poppins font-medium text-[16px] text-oldWhite bg-green-gradient rounded-[10px] outline-none ${styles}`}>
    Log in
  </button>
);

export default Button;
