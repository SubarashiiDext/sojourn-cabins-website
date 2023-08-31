import React from "react";
import { LiaTimesCircleSolid } from "react-icons/lia";
import { modalData } from "@/utils/modalData";
import Link from "next/link";
import Image from "next/image";
import ModalCard from "./ModalCard";
// import ModalCarousel from "./ModalCarousel";

const Modal = ({
  isVisible,
  onClose,
  imgsrc,
  title,
  promo,
  description,
  id,
  btn,
}) => {
  if (!isVisible) return null;

  const handleCloseModal = (e) => {
    if (e.target.id === "close") onClose();
  };

  return (
    <div className="overlay flex justify-center items-center">
      {/* <ModalCard modalData={modalData} /> */}
      <section className="bg-white h-full max-h-[550px]  md:max-h-[400px] max-w-[700px] rounded-lg overflow-hidden border ">
        <div className="py-1 flex justify-end rounded-t-lg px-1 cursor-pointer">
          <LiaTimesCircleSolid
            size={24}
            onClick={handleCloseModal}
            id="close"
          />
        </div>
        <div className="p-5 overflow-y-scroll h-full">
          <div>
            {modalData.map((modals) => (
              <ModalCard
                key={modals.id}
                imgsrc={modals.imgsrc}
                title={modals.title}
                promo={modals.promo}
                description={modals.description}
                btn={modals.btn}
              />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Modal;
