import React from "react";

const UiWrapper = ({ children }) => {
  return (
    <div className="shadow-md mt-6 mb-20">
      <div className="bg-[#06F] w-full h-[20px] overflow-hidden mb-4"></div>
      <div> {children} </div>
    </div>
  );
};

export default UiWrapper;
