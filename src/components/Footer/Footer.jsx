import React from 'react'
import { MdOutlineLocationOn, MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { BiLogoFacebook, BiLogoTwitter, BiLogoInstagram } from "react-icons/bi";

const Footer = () => {
    return (
        <div className="w-full pb-4 border-t-2 shadow-t-lg shadow-gray-400 bg-[#cddcf7] bottom-0 mt-10">
            <div className="flex flex-col justify-between mx-5 my-14">
                <p className="mb-5 text-l text-blue-700 font-bold">NEWSLETTER &mdash;</p>
                <p className="mb-3 font-bold text-2xl">Stay Up to Date</p>
                <p className="">Subscibe to our newsletter to receive our weekly feed</p>
                <div className="flex my-4">

                    {/* Input Section */}

                    <input type="text" placeholder="Enter your Email" className="px-3 sm-w-80 w-96 h-16 rounded border border-black border-opacity-20" />
                    <button className="w-44 h-16 bg-blue-600 rounded text-white font-bold hover:bg-blue-300 hover:text-black transition duration-300">SIGN UP</button>
                </div>

                {/* Contact Details */}

                <div className="text-sm align-baseline flex space-x-1">
                    <div className="text-base"><MdOutlineLocationOn size={20} /></div>
                    <p className="">Google Plus Code: 5VCF+Q8 Anomabo, Ghana</p>
                </div>
                <div className="my-3 text-sm align-baseline flex space-x-1">
                    <div className="text-base"><BsTelephoneFill size={20} /></div>
                    <p className="">+233-54-748-4568</p>
                </div>
                <div className="mb-3 text-sm align-baseline flex space-x-1">
                    <div className="text-base"><MdEmail size={20} /></div>
                    <p className="">theteam@sojourngh.com</p>
                </div>

                {/* Social Media */}

                <div className="flex space-x-3">
                    <div className="p-2 bg-blue-600 rounded-full hover:bg-blue-300 transition duration-300" ><BiLogoFacebook className="w-8 h-8 text-white"/></div>
                    <div className="p-2 bg-blue-600 rounded-full hover:bg-blue-300 transition duration-300" ><BiLogoTwitter className="w-8 h-8 text-white"/></div>
                    <div className="p-2 bg-blue-600 rounded-full hover:bg-blue-300 transition duration-300" ><BiLogoInstagram className="w-8 h-8 text-white"/></div>
                </div>
            </div>
        </div>
    );
};

export default Footer
