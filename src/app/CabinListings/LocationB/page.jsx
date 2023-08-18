"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Cards from "../../../components/cards/page";
import LocationSearch from "@/components/Location-search/page";


export default function LocationB() {
  const [count, setCount] = useState(1);
  return (
    <div className="pt-20">
      <div className=" relative w-full h-96   overflow-hidden bg-gray-600 z-20 ">
        <Image
          className="object-cover object-center absolute mix-blend-overlay z-10 "
          src="/asset/hero-sectionA.png"
          alt="Bg Img"
          fill={true}
        />
        <div className=" h-96  flex items-center justify-center flex-col px-3 py-20 sm:py-auto z-20">
          <h1 className="text-orange-500 font-bold sm:text-6xl text-5xl">
            TEMA
          </h1>
          <h2 className="text-white text-center font-semibold sm:text-3xl text-xl">
            Tema formerly known as Odupongkpehe, is a peri-urban town in the
            Awutu Senya East Municipal District of the Central region of Ghana.
          </h2>
        </div>
      </div>
      <div className="mx-auto md:w-[80%]  w-[100%] my-5">
        

        <LocationSearch/>
      </div>

      <Cards />
      

      <Link href= "LocationA/search-results-page">Results</Link>
      
    </div>
  );
}
