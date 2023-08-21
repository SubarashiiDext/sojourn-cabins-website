import Image from "next/image"
import Link from "next/link";
import React from "react";
import Search from "../components/Home/Search";
import Locations from "../components/Home/Locations";
import Cabins from "../components/Home/Cabins";
import BookingProcess from "../components/Home/BookingProcess";
import Amenities from "../components/Home/Amenities";
import ChefBooking from "../components/Home/ChefBooking";
import Gallery from "../components/Home/Gallery";
import NearbySites from "../components/Home/NearbySites";
import Testimonials from "../components/Home/Testimonials";
import FaqSection from "../components/Home/FaqSection";

export default function Home() {
  return (

    <div>
      <div className="my-8 relative w-full h-[calc(100vh-5rem)] overflow-hidden bg-gray-600 space-y-2" >
        <Image className="my-4 object-cover object-center absolute mix-blend-overlay" src="/asset/coverImage.jpg" alt="Bg Img" fill={true} />
        <div className="mb-4 absolute  md:w-1/3 top-1/2 mx-12 md:left-24 -translate-y-1/2 text-white flex flex-col items-start justify-center">
          <h1 className="capitalize font-semibold md:text-3xl text-xl">Welcome to an adventure that feels like home</h1>
          <p className="mt-3 text-white font-light md:text-xl sm:text-lg">Unplug from your routines and focus on what matters</p>
          <p className="uppercase text-base py-4 font-semibold">
            2 GUESTS | 1 BEDROOM | 1 BED | 1 BATHROOM | 1 KITCHEN |
            COMPLIMENTARY CONTINENTAL BREAKFAST
          </p>
          <button className="rounded  bg-blue-600 text-white font-bold hover:bg-blue-300 hover:text-black transition duration-300 py-2 px-3">BOOK CABIN</button>
        </div>
      </div>

      <div className="relative sm:flex items-center justify-center hidden">
        <Search />
      </div>
      <div>
        <Locations />
      </div>
      <div>
        <Cabins />
      </div>
      <div>
        <BookingProcess />
      </div>
      <div>
        <Amenities />
      </div>
      <div>
        <ChefBooking />
      </div>
      <div>
        <Gallery />
      </div>
      <div>
        <NearbySites />
      </div>
      <div>
        <Testimonials />
      </div>
      <div>
        <FaqSection />
      </div>

    </div>
  )
}
