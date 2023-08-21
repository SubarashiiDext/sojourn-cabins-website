import React from "react";
import Image from "next/image";
// import ModalData from "@/components/modules/ModalData";
import Link from "next/link";

const ModalCard = ({ imgURL, title, promo, description }) => {
  return (
    <>
      <div>
        <div className="items-center py-4 border border-white rounded-md grid grid-cols-1 md:grid-cols-2">
          {/* left section  */}
          {/* <div className="relative w-full h-full object-contain">
            <Image src="/assets/valentine.jpg" fill={true} alt="" />
          </div> */}

          <Image src="/asset/valentine.jpg" width={800} height={800} alt="" />
          {/* right section  */}
          <div className="text-center">
            <h1 className="text-black font-bold text-2xl">The Valentine day</h1>
            <h2 className="text-4xl font-bold text-red-600 py-1"> Promo! </h2>
            <p className="py-4 px-5">
              We are here to help, but you can completely self manage your
              experience, cook your own food and explore the beauty of the
              Ghanaian coast!
            </p>
            <div className="py-4">
              <Link
                href="/"
                className=" bg-red-600 text-white font-semibold px-14 py-4 border border-red-600 hover:bg-transparent hover:text-red-600 duration-100 text-base"
              >
                Book Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalCard;
