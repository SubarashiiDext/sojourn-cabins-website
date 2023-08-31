"use client";
import React from "react";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Card from "@/components/card/page";
import Cards from "@/components/cards/page";
import LocationSearch from "@/components/Location-search/page";
import axios from "axios";

export const getStaticProps = async (context) => {
  const res = await axios(
    `http://ec2-54-91-145-179.compute-1.amazonaws.com/sojourn-cabins/api/v1/locations/homepage/${context.params.id}`
  );
  const data = await res.json();
  console.log("location data goes here:");
  // console.log(data);

  return {
    props: { data },
  };
};

export const getStaticPaths = async () => {
  const res = await axios(
    "http://ec2-54-91-145-179.compute-1.amazonaws.com/sojourn-cabins/api/v1/locations/homepage/"
  );
  const data = await res.json();
  const ids = data.map((item) => item.id);

  const paths = ids.map((item) => ({ params: { id: item.toString() } }));
  console.log(ids);
  return {
    paths,
    fallback: false,
  };
};

export default function Location({ data }) {
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
            {/* {data.location_name} */}
          </h1>
          <h2 className="text-white text-center font-semibold sm:text-3xl text-xl">
            formerly known as Odupongkpehe, is a peri-urban town in the Awutu
            Senya East Municipal District of the Central region of Ghana.
          </h2>
        </div>
      </div>
      <div className="mx-auto md:w-[80%]  w-[100%] my-5">
        <LocationSearch />
      </div>

      <div className=" mt-2 mb-2">
        <div className=" mx-auto  flex flex-wrap justify-center   gap-4">
          {/* {CabinListings.map((cabin) => (
            <Card
              key={cabin.id}
              name={cabin.name}
              thumbnail={cabin.images[0].image}
              location={cabin.location.location_name}
              people={cabin.maximum_adults}
              price={cabin.price_rate.weekday_price}
            />
          ))} */}
        </div>
      </div>

      <Cards />
    </div>
  );
}
