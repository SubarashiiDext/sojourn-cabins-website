"use client";
import { AiOutlineUser } from "react-icons/ai";
import { CiLocationOn, CiHome } from "react-icons/ci";
import React from "react";

const BookingForms = () => {
  return (
    <div className="pb-4 md:pb-20">
      <h2 className="text-[#60f] font-bold text-[20px] pt-6 pb-4 text-center">
        THE BOOKING FORM
      </h2>

      {/* main div  */}
      <div className="max-w-[54.5rem] mx-auto ">
        {/* 1st div */}
        <div className="flex flex-col md:flex-row md:justify-between w-full py-4">
          <div className="mb-4 flex flex-row gap-4 items-center bg-[#F5F5F5] h-[75px] rounded-[5px] ">
            <CiLocationOn
              size={32}
              className="text-[#A8A8A8A1] ml-2 mt-2 md:mt-0"
            />
            <span className="flex flex-col text-base pt-2 md:pt-0 ">
              <p className="text-[#00000059] ">Location</p>
              <p>Kasoa, Ghana</p>
            </span>

            <input
              type="text"
              // placeholder="location"
              className=" border-none focus:border-none px-4 py-2 bg-[#F5F5F5] outline-none"
            />
          </div>

          <div className="mb-4 flex flex-row gap-4 items-center bg-[#F5F5F5] h-[75px] rounded-[5px] ">
            <CiHome size={32} className="text-[#A8A8A8A1] ml-2 mt-2 md:mt-0" />
            <span className="flex flex-col text-base pt-2 md:pt-0 ">
              <p className="text-[#00000059] ">Cabin Type</p>
              <p>Sea Cabin</p>
            </span>

            <input
              type="text"
              // placeholder="location"
              className=" border-none focus:border-none px-4 py-2 bg-[#F5F5F5] outline-none"
            />
          </div>
        </div>

        {/* 2nd div */}
        <div className="flex flex-col md:flex-row md:justify-between w-full py-4">
          <div className="mb-4 flex flex-row gap-4 items-center bg-[#F5F5F5] h-[75px] md:w-[380px] rounded-[5px] ">
            <CiLocationOn
              size={32}
              className="text-[#A8A8A8A1] ml-2 mt-2 md:mt-0"
            />
            <span className="flex flex-col text-base pt-2 md:pt-0 ">
              <p className="text-[#00000059] ">Check - In</p>
              <p>Fri Jun 20</p>
            </span>

            <input
              type="date"
              // placeholder="location"
              className=" border-none focus:border-none px-4 py-2 bg-[#F5F5F5] outline-none"
            />
          </div>

          <div className="mb-4 flex flex-row gap-4 items-center bg-[#F5F5F5] h-[75px] md:w-[360px] rounded-[5px] ">
            <CiHome size={32} className="text-[#A8A8A8A1] ml-2 mt-2 md:mt-0" />
            <span className="flex flex-col text-base pt-2 md:pt-0 ">
              <p className="text-[#00000059] ">Check - out</p>
              <p>Sun Jul 02</p>
            </span>

            <input
              type="date"
              // placeholder="location"
              className=" border-none focus:border-none px-4 py-2 bg-[#F5F5F5] outline-none"
            />
          </div>
        </div>

        {/* gust  */}
        <div className=" pb-4 md:py-4 flex flex-row gap-4 bg-[#F5F5F5] h-[75px] items-center rounded-[5px]  ">
          <AiOutlineUser
            size={32}
            className="text-[#A8A8A8A1] ml-2 mt-2 md:mt-0"
          />
          <span className="flex flex-col text-base pt-2 md:pt-0 ">
            <p className="text-[#00000059] ">Guest</p>
            <p>4 People</p>
          </span>

          <input
            type="number"
            name=""
            id=""
            // placeholder="Guest"
            className=" border-none focus:border-none px-4 py-2 md:w-[713px] bg-[#F5F5F5] outline-none"
          />
        </div>

        {/* button  */}
        <div className="pt-6">
          <button
            type="submit"
            className="w-full py-4 bg-[#0066FF] text-white rounded-[5px]"
          >
            Check Availability
          </button>
        </div>
      </div>
    </div>
  );
};

export default BookingForms;
