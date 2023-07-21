import React from "react";
import ModalData from "@/components/modules/ModalData";
import ModalCard from "./ModalCard";

const ModalCollection = () => {
  return (
    <>
      <div>
        {ModalData.map((val, index) => {
          return (
            <ModalCard
              key={val.id}
              imgURL={val.imgURL}
              title={val.title}
              promo={val.promo}
              description={val.description}
            />
          );
        })}
      </div>
    </>
  );
};

export default ModalCollection;
