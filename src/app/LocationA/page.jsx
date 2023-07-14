import React from "react";
import Image from "next/image";
import Link from "next/link";
import Cards from "../components/cards/page";

export default function LocationA() {
  return (
    <div>
      <div className="relative w-full h-96  bg-cover">
        <Image src="/asset/Background.jpeg" alt="Bg Img" fill={true} />
      </div>
      {/* <div className="">
        Kasoa, formerly known as Odupongkpehe, is a peri-urban town in the Awutu
        Senya East Municipal District of the Central region of Ghana.
      </div> */}
      <div className="w-[100%] mt-2 mb-2">
        <div className=" space-x-1 mx-auto md:w-[80%] w-[100%] justify-between flex md:flex-row md:items-center items-center flex-col">
          <div className="h-[43px] w-[100px] m-1 rounded border-2 border-black ">Any one</div>
          
          <div className="flex space-x-1 w-[95%] justify-between items-center m-1">
            <input className="w-[85%] h-[43px] text rounded border-2 border-black py-1 px-2">
              
            </input>
            <button className="h-[43px] w-[120px] rounded  bg-blue-600 text-white py-1 px-2">
              Apply Filter
            </button>
          </div>
        </div>
      </div>

      
      <Cards/>

    </div>
  );
}
