import React from "react";
import { CiLocationOn } from "react-icons/ci";
import { BsCalendarCheck } from "react-icons/bs";

const PackageSearch = () => {
  return (
    <>
      <div className="flex flex-col md:flex-row items-center justify-evenly gap-2 pb-4">
        <div className="border bg-[#F5F5F5] rounded-[5px] flex flex-row items-center">
          <CiLocationOn size={30} className=" bg-[#F5F5F5] mx-1 md:mx-2" />
          <input
            type="text"
            className="border-none focus:border-none px-4 py-3 bg-[#F5F5F5] rounded-[5px] outline-none"
          />
        </div>
        <div className="border bg-[#F5F5F5] rounded-[5px] flex flex-row items-center">
          <BsCalendarCheck size={30} className=" bg-[#F5F5F5] mx-1 md:mx-2" />
          <input
            type="date"
            placeholder="Date"
            className="border-none focus:border-none px-4 py-3 bg-[#F5F5F5] rounded-[5px] outline-none"
          />
        </div>
        <div className="border bg-[#F5F5F5] rounded-[5px] flex flex-row items-center">
          <BsCalendarCheck size={30} className=" bg-[#F5F5F5] mx-1 md:mx-2" />
          <input
            type="date"
            placeholder="Date"
            className="border-none focus:border-none px-4 py-3 bg-[#F5F5F5] rounded-[5px] outline-none"
          />
        </div>
        <div className="border bg-[#F5F5F5] rounded-[5px]">
          <input
            type="number"
            placeholder="Guest"
            className="w-full border-none focus:border-none px-4 py-3 bg-[#F5F5F5] rounded-[5px] outline-none"
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-8 py-3 bg-[#0066FF] text-white rounded-[5px]"
          >
            Search Cabin
          </button>
        </div>
      </div>
    </>
  );
};

export default PackageSearch;
