import React from "react";
import { GrFormClose } from "react-icons/gr";

const BookingAlert = () => {
  return (
    <div>
      <div className="bg-[#F8F2DA] py-4 ">
        <div className="flex flex-row items-center text-center justify-center">
          <div className="flex flex-col md:flex-row gap-1 md:gap-4 items-center text-center justify-center">
            <p className="font-semibold">Check out our special packages</p>
            <span className="w-[2px] h-6 bg-black hidden md:block"></span>
            <p>built with your comfort in mind.</p>
          </div>
          <div className="bg-[#f5f5f5] rounded-full">
            <GrFormClose
              size={30}
              className="flex justify-items-end text-[#A8A8A8A1]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookingAlert;
