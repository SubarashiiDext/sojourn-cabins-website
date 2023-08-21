import React from "react";
import Link from "next/link";
import { CiLocationOn } from "react-icons/ci";

const RateSearch = ({ value, onChange }) => {
  return (
    <div>
      <div className="gap-2 flex flex-row justify-between items-center">
        <div>
          <button className=" bg-[#f5f5f5] rounded-sm text-black font-semibold px-8 py-[10px] text-base">
            Rates
          </button>
        </div>

        <div className="w-[55rem] border rounded-sm border-red- overflow-hidden flex flex-row items-center">
          <CiLocationOn size={26} className=" mx-2 md:mx-4 text-black" />
          <input
            type="text"
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className="w-full px-2 py-2 rounded-sm focus:border-none focus:outline-none "
          />
        </div>

        <div className="items-center">
          <Link
            href="#"
            className=" bg-[#06F] text-white font-semibold px-8 py-[10px] border border-[#06F] hover:bg-transparent hover:text-[#06F] duration-100 text-base rounded-sm"
          >
            Search
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RateSearch;
