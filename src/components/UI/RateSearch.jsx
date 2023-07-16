import React from "react";
import Link from "next/link";

const RateSearch = () => {
  return (
    <div>
      <div className="gap-2 flex flex-row justify-between items-center">
        <div>
          <button className=" bg-gray-300 rounded-sm text-black font-semibold px-8 py-[10px] text-base">
            Rates
          </button>
        </div>

        <div className="w-[55rem] border rounded-sm border-red- overflow-hidden">
          <input type="text" className="w-full py-2 rounded-sm" />
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
