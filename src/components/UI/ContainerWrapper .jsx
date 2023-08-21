import React, { Children } from "react";

const ContainerWrapper = ({ children }) => {
  return (
    <div className="max-w-[74.5rem] mx-auto px-[0.2rem] md:px-[0.4rem] pt-10">
      {children}
    </div>
  );
};

export default ContainerWrapper;
