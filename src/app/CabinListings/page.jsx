"use client";
import React from "react";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";

import LocationSearch from "@/components/Location-search/page";
import Card from "@/components/card/page";
import axios from "axios";
import Cards from "@/components/cards/page";

export default function CabinListings() {
  const [CabinListings, setCabinListings] = useState([]);
  const [thumbnail, setThumbnail] = useState([]);

  //get request
  useEffect(() => {
    axios
      .get(
        "http://ec2-54-91-145-179.compute-1.amazonaws.com/sojourn-cabins/api/v1/cabins?page=1&min_number_of_guests=3"
      )
      .then((response) => {
        setCabinListings(response.data.results);
      }, [])
      .catch((error) => {
        console.log(error);
      });
  });
  // // Log the array of image URLs
  // console.log("Image URLs:", imageUrls);

  // console.log(imageUrl);
  return (
    <div className="pt-20">
      <div className=" relative w-full h-96   overflow-hidden bg-gray-600">
        <Image
          className="object-cover object-center absolute mix-blend-overlay"
          src="/asset/Background.jpeg"
          alt="Bg Img"
          fill={true}
        />
        <div className=" h-96  flex items-center justify-center flex-col px-3 py-20 sm:py-auto">
          <h1 className="text-orange-500 font-bold sm:text-6xl text-5xl">
            CABIN LISTINGS
          </h1>
          <h2 className="text-white text-center font-semibold sm:text-3xl text-xl">
            Ready to getaway? Plan your escape now!
          </h2>
        </div>
      </div>
      <div className="mx-auto md:w-[80%]  w-[100%] my-5">
        <LocationSearch />
      </div>

      <div className=" mt-2 mb-2">
        <div className=" mx-auto  flex flex-wrap justify-center   gap-4">
          {CabinListings.map((cabin) => (
            <Card
              key={cabin.id}
              name={cabin.name}
              thumbnail={cabin.images[0].image}
              location={cabin.location.location_name}
              people={cabin.maximum_adults}
              price={cabin.price_rate.weekday_price}
            />
          ))}
        </div>
        {/* <Cards /> */}
      </div>
    </div>
  );
}
