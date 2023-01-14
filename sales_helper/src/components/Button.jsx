import React from "react";

const Button = ({ styles, type, content }) => (
  <button type={type} className={`py-3 px-4 font-poppins font-medium text-[16px] text-oldWhite bg-extra-gradient rounded-[10px] outline-none ${styles}`}>
    {content}
  </button>
);

export default Button;
