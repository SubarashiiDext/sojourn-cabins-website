"use client";
import { AiOutlineUser } from "react-icons/ai";
import { MdOutlineDateRange } from "react-icons/md";
import { CiLocationOn, CiHome } from "react-icons/ci";
import React, { useState } from "react";

// For DatePicker
import { DatePicker, Radio } from "antd";
import LocationDropdown from "./LocationDropdown";
const { RangePicker } = DatePicker;
// End of DatePicker

const BookingForms = () => {
  // For DatePicker
  const [placement, SetPlacement] = useState("topLeft");
  const placementChange = (e) => {
    SetPlacement(e.target.value);
  };
  // End of DatePicker

  return (
    <div className="pb-4 md:pb-20">
      <h2 className="text-[#60f] font-bold text-[20px] pt-6 pb-4 text-center">
        BOOK YOUR STAY
      </h2>

      {/* form section  */}
      <form action="" className="max-w-[54rem] mx-auto ">
        <div className="flex flex-col md:flex-row md:justify-between w-full py-4">
          <div className="flex gap-4 items-center bg-[#F5F5F5] h-[75px] md:w-[400px] rounded-[5px] ">
            <div className="md:w-[280px]">
              <select className="w-full h-full border-none rounded-lg px-4 py-2 focus:outline-none focus:border-none bg-[#F5F5F5]">
                <option value="Accra">Accra</option>
                <option value="Kasoa">Kasoa</option>
                <option value="Cape Coast">Cape Coast</option>
              </select>
            </div>
          </div>

          <div className=" pb-4 md:py-4 items-center flex flex-row gap-4 bg-[#F5F5F5] h-[75px] rounded-[5px]  ">
            <div className="ml-3">
              <p className="text-[#00000059] ">Guest</p>
            </div>

            <div className="md:w-[280px]">
              <input
                type="number"
                name=""
                id=""
                className=" border-none focus:border-none px-3 py-2 w-full bg-[#F5F5F5] outline-none"
              />
            </div>

            <AiOutlineUser
              size={22}
              className="text-[#A8A8A8A1] mt-2 md:mt-0 mr-3"
            />
          </div>
        </div>

        {/* CheckIn && CheckOut  */}
        <div className="flex flex-col md:flex-row md:justify-between w-full py-4">
          <div className="flex gap-4 items-center bg-[#F5F5F5] h-[75px] md:w-[400px] rounded-[5px] ">
            <div className="ml-3">
              <p className="text-[#00000059] ">Check - In</p>
            </div>

            <div className="md:w-[280px]">
              <DatePicker
                placement={placement}
                placeholder={null}
                className="border-none focus:border-none px-4 py-2 mr-2 bg-[#F5F5F5] outline-none w-full "
              />
            </div>
          </div>

          <div className="flex gap-4 items-center bg-[#F5F5F5] h-[75px] md:w-[400px] rounded-[5px] ">
            <div className="ml-3">
              <p className="text-[#00000059] ">Check - Out</p>
            </div>

            <div className="md:w-[280px]">
              <DatePicker
                placement={placement}
                placeholder={null}
                className="border-none focus:border-none px-4 py-2 mr-2 bg-[#F5F5F5] outline-none w-full "
              />
            </div>
          </div>
        </div>

        {/* Button Section */}
        <div className="pt-5">
          <button
            type="submit"
            className="w-full py-4 bg-[#0066FF] text-white rounded-[5px]"
          >
            Check Availability
          </button>
        </div>
      </form>
    </div>
  );
};

export default BookingForms;
