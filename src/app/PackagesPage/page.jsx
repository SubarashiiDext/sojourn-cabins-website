import React from "react";
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { MdOutlineCancel, MdOutlineLocationOn } from "react-icons/md";
import { CiCalendar } from "react-icons/ci";
import ContainerWrapper from "@/components/UI/ContainerWrapper ";
import BookingAlert from "@/components/PromoAlert/BookingAlert";

const PackagePage = () => {
  return (
    <div className="pt-[86px]">
      <BookingAlert />
      <ContainerWrapper>
        <div className="flex justify-between mt-2 flex-col lg:flex-row lg: gap-1 mb-8 text-gray-400">
          <div className="border p-2 rounded flex flex-1 gap-1 items-center">
            <MdOutlineLocationOn className="" size={21} />
            <p>Location</p>
          </div>

          <div className="border p-2 rounded flex flex-1 gap-1 items-center">
            <button>
              <CiCalendar size={21} />
            </button>
            <p>Check In</p>
          </div>

          <div className="border p-2 rounded flex-1 flex gap-1 items-center">
            <button>
              <CiCalendar size={21} />
            </button>
            <p>Check Out</p>
          </div>

          <div className="border p-2 flex gap-2 items-center rounded">
            <p>4</p>
            Guests
            <div className="flex flex-col text-black">
              <button>
                <BsFillCaretUpFill />
              </button>

              <button>
                <BsFillCaretDownFill />
              </button>
            </div>
          </div>

          <button className="p-2 rounded bg-[#0066FF] text-white font-bold hover:bg-blue-400 duration-300">
            Search Cabin
          </button>
        </div>

        {/* Unwrap happiness  */}
        <div className="items-center text-center flex flex-col mb-4">
          <h1 className="font-bold md:text-[22px] text-[1.2rem] md:leading-7">
            Unwrap happiness with our unbeatable package deals!
          </h1>
          <h2 className="md:text-[22px] md:leading-7 font-[500]">
            Hurry and book now while prices are at their lowest!
          </h2>
          <h3 className="md:text-[19px] md:leading-7 ">
            Disconnect and unwind in the privacy of your own cabin.
          </h3>
        </div>
      </ContainerWrapper>
    </div>
  );
};

export default PackagePage;
