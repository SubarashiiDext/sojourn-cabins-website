import React from "react";
import Image from "next/image";
import Link from "next/link";

const ModalCard = ({ imgsrc, title, promo, description, id, btn }) => {
  return (
    <>
      <div className="items-center py-4 border-[0.5px] border-gray-400 rounded-md grid grid-cols-1 md:grid-cols-2 mb-7">
        <div className=" relative h-full w-full ">
          <Image
            src={imgsrc}
            fill="fill"
            objectFit="cover"
            alt=""
            className="ml-2 "
          />
        </div>

        {/* right section  */}
        <div className="text-center">
          <h1 className="text-black font-bold text-2xl">
            {/* The Valentine day */}
            {title}
          </h1>
          <h2 className="text-4xl font-bold text-red-600 py-1">
            {/* Promo! */}
            {promo}
          </h2>
          <p className="py-4 px-5">
            {/* We are here to help, but you can completely self manage your
                experience, cook your own food and explore the beauty of the
                Ghanaian coast! */}
            {description}
          </p>
          <div className="py-4">
            <Link
              href="#"
              className=" bg-red-600 text-white font-semibold px-14 py-4 border border-red-600 hover:bg-transparent hover:text-red-600 duration-100 text-base"
            >
              Book Now
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCard;
