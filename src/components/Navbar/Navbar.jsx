"use client";

import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Home from "@/app/Home/page";
import About from "@/app/About/page";
import Book from "@/app/Book/page";
import CabinListings from "@/app/CabinListings/page";



export default function Navbar() {
  const [open, setOpen] = useState(false); // the humburgr has not been opened

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <div className="absolute z-30">
      <nav className=" bg-black z-99 w-[100%] fixed top-0 text-white">
        <div className="flex items-center justify-between  text-white py-5 w-[80%] mx-auto ">
          <div >
            <Image src="/asset/Sojourn-logo.png" alt="logo" width={138} height={44} />
          </div>

          <div className=" items-center space-x-5 hidden lg:flex">
          
            <div className=" text-white flex space-x-4 transition-all ease-in duration-500 ">
              <Link href= '/Home' className="hover:bg-grey-400">HOME</Link>
              <Link href= '/About' className="hover:bg-grey-400">ABOUT</Link>
              <Link href= '/Book' className="hover:bg-grey-400">BOOK</Link>
              <Link href= '/CabinListings' className="hover:bg-grey-400">CABIN LISTINGS</Link>
              <Link href= '/Terms-&-Condition' className="hover:bg-grey-400">TERMS & CONDITION</Link>
            </div>
            

            <div className="flex items-center space-x-5">
              <span> | </span>
              <ul className="flex items-center space-x-2">
                <li>Login</li>

                <li className=" bg-blue-600 font-bold py-1 px-3 rounded hover:bg-blue-300 hover:text-black transition duration-300">
                  Sign Up
                </li>
              </ul>
            </div>
          </div>
          {/* mobile button goes here */}
          <button
            onClick={handleClick}
            className="lg:hidden flex flex-col justify-center items-end min-w-[-100px] "
          >
            {open ? "" : ""}
            <GiHamburgerMenu size={25} className="" />
          </button>

        </div>
          {open && (
            <div className="  flex flex-col items-center  text-white lg:hidden min-h-[100vh] pt-4" onClick={handleClick}>
              
              <Link href= '/Home' className="hover:text-grey-400 py-2 lg:hidden">HOME</Link>
              <Link href= '/About' className="hover:text-grey-400 py-2 lg:hidden">ABOUT</Link>
              <Link href= '/Book' className="hover:text-grey-400 py-2 lg:hidden">BOOK</Link>
              <Link href= '/CabinListings' className="hover:text-grey-400 py-2 lg:hidden">CABIN LISTINGS</Link>
              <Link href= '/Terms-&-Condition' className="hover:text-grey-400 py-2 lg:hidden">TERMS & CONDITION</Link>
              <ul className="flex flex-col  items-center gap-2">
                <li>Login</li>

                <li className=" bg-blue-600 font-bold py-1 px-3 rounded hover:bg-blue-300 hover:text-black transition duration-300">
                  Sign Up
                </li>
              </ul>
          </div>
            )}
        
        
      </nav>
    </div>
  );
}
