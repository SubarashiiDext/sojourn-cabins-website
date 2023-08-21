import React from 'react'
import { MdOutlineLocationOn, MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";

const Footer = () => {
    return (
        <div className="w-full  bg-[#cddcf7] mt-3">
            <div className="flex flex-col justify-between sm:w-[80%] sm:mx-auto sm:px-0 px-5 pt-2 pb-5 ">
                <p className="mb-2 text-l text-blue-700 font-bold">NEWSLETTER &mdash;</p>
                <p className="mb-1111111111 font-bold text-xl">Stay Up to Date</p>
                <p className="text-gray-500">Subscibe to our newsletter to receive our weekly feed</p>
                <div className="flex gap-2 my-2">

                    {/* Input Section */}

                    <input type="text" placeholder="Enter your Email" className="px-3 py-2 sm:w-80  rounded border border-black border-opacity-20" />
                    <button className=" bg-blue-600 px-4 rounded text-white font-bold hover:bg-blue-300 hover:text-black transition duration-300">SIGN UP</button>
                </div>

                {/* Contact Details */}

                <div className="text-sm align-baseline flex space-x-1">
                    <div className="text-base"><MdOutlineLocationOn size={20} /></div>
                    <p className="">Google Plus Code: 5VCF+Q8 Anomabo, Ghana</p>
                </div>
                <div className="my-2 text-sm align-baseline flex space-x-1">
                    <div className="text-base"><BsTelephoneFill size={20} /></div>
                    <p className="">+233-54-748-4568</p>
                </div>
                <div className="mb-3 text-sm align-baseline flex space-x-1">
                    <div className="text-base"><MdEmail size={20} /></div>
                    <p className="">theteam@sojourngh.com</p>
                </div>

                {/* Social Media */}

                <div className="flex space-x-3">
                    <div className="p-2 bg-blue-600 rounded-full hover:bg-blue-300 transition duration-300" ><BiLogoFacebook className="w-5 h-5 text-white"/></div>
                    <div className="p-2 bg-blue-600 rounded-full hover:bg-blue-300 transition duration-300" ><BiLogoTwitter className="w-5 h-5 text-white"/></div>
                    <div className="p-2 bg-blue-600 rounded-full hover:bg-blue-300 transition duration-300" ><BiLogoInstagram className="w-5 h-5 text-white"/></div>
                </div>
            </div>
        </div>
    );
};

export default Footer
