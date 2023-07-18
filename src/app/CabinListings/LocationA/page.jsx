"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Cards from "../../../components/cards/page";
import { BsFillCaretDownFill } from "react-icons/bs";
import { BsFillCaretUpFill } from "react-icons/bs";

export default function LocationA() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <div className=" relative w-full h-96   overflow-hidden bg-gray-600">
        <Image
          className="object-cover object-center absolute mix-blend-overlay"
          src="/asset/hero section A.png"
          alt="Bg Img"
          fill={true}
        />
        <div className=" h-96  flex items-center justify-center flex-col px-3 py-20 sm:py-auto">
          <h1 className="text-orange-500 font-bold sm:text-6xl text-5xl">
            KASOA
          </h1>
          <h2 className="text-white text-center font-semibold sm:text-3xl text-xl">
            Kasoa formerly known as Odupongkpehe, is a peri-urban town in the
            Awutu Senya East Municipal District of the Central region of Ghana.
          </h2>
        </div>
      </div>
      <div className="w-[100%] mt-2 mb-10">
        <div className=" space-x-1 mx-auto md:w-[80%] w-[100%] justify-between flex md:flex-row md:items-center items-center flex-col">
          <div className="h-[43px] w-[100px] px-2 py-1 rounded border-2 border-black-400 flex justify-between items-center ">
            <p className="text-semi-bold text-2xl">{count}</p>
            <div className="flex flex-col gap-1">
              <button onClick={() => setCount(count + 1)}>
                <BsFillCaretUpFill className="h-4 w-4" />
              </button>
              <button onClick={() => setCount(count - 1)}>
                <BsFillCaretDownFill className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="flex space-x-1 w-[95%] justify-between items-center m-1">
            <input
              type="text"
              placeholder="Input Location"
              className="w-[85%] h-[43px] text-  rounded border-2 border-black-400 py-1 px-2"
            ></input>
            <button className="h-[43px] w-[120px] rounded  bg-blue-600 text-white py-1 px-2">
              Apply Filter
            </button>
          </div>
        </div>
      </div>

      <Cards />

      
    </div>
  );
}
