import React from "react";
import { LiaTimesCircleSolid } from "react-icons/lia";
import ModalCard from "./ModalCard";

const Modal = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  const handleCloseModal = (e) => {
    if (e.target.id === "close") onClose();
  };

  return (
    <div
      className="fixed px-2 md:pt-0 pt-6  inset-0 bg-black bg-opacity-25 backdrop-blur-sm flex justify-center items-center"
      onClick={handleCloseModal}
      id="close"
    >
      <div className=" w-full md:w-[600px]">
        <div className="bg-white p-6 flex flex-col">
          <button className="absolute bg-black rounded-full place-self-end mt-[-30px] mr-[-30px]">
            <LiaTimesCircleSolid
              size={25}
              className="relative text-white rounded-full"
              onClick={() => onClose()}
            />
          </button>
          <div>
            <ModalCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
