import React from 'react'
import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useRef, useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Link from 'next/link'
import axios from 'axios'



export default function LocationSearch() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const [location, setLocation] = useState([]);
  //get request
  useEffect(() => {
    axios.get("https://dextsitebackend.vercel.app/about")
    .then((response) => {
      setLocation(response.data)
    })
    .catch((error) => {
      console.log(error);
    })
  }, [])

  return (
    
    <div className="w-[80%]  mx-auto justify-between flex items-center flex-1">         
        <div className=" mx-auto w-full ">

          <div className="relative w-full">
            <button
              className="bg-blue-500 text-white w-full py-2 px-4 rounded"
              onClick={toggleDropdown}
            >
              Location
            </button>
            {isOpen && (
              
              <div className="origin-top absolute  mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                {/* Dropdown content */}
                <div className="flex flex-col py-1">

                  {
                    location.map((location)=>( 
                      <Link key={location.id} href={`/CabinListings/${location.id}`} className="px-4 py-2 hover:bg-blue-100">{location.description}</Link>
                    ))
                  }

                  
                </div>
              </div>
              
            )}
          </div>


        </div>
    </div>
    
  )
}
