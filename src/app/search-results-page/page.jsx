"use client"
import React from 'react'
import {MdOutlineCancel, MdOutlineLocationOn} from 'react-icons/md';
import {CiCalendar} from 'react-icons/ci'
import { BsFillCaretDownFill,BsFillCaretUpFill } from "react-icons/bs";
import ResultsCards from '@/components/Modules/search-results-cards/page';
import BookingAlert from '@/components/PromoAlert/BookingAlert';



export default function searchResults() {
  return (
    <div className='pt-[86px]'>
      {/* <div className='min-h-[60px] bg-[#F8F2DA] relative flex justify-center'>
      
        <div className='gap-1  flex md:flex-row justify-center items-center flex-col '>
          <p className='font-bold'>Check out our special packages</p>
          <p className='hidden md:contents'>|</p>
          <p className=''>Built with your comfort in mind.</p>
        </div> 
        <div className='absolute flex items-center right-10 sm:right-20 h-[100%] font-grey-400'>
          <MdOutlineCancel className='w-7 h-7 text-gray-300 hover:text-gray-500 ' /> 
        </div>
        
      </div> */}

      <BookingAlert/>


      <div className='w-[80%] mx-auto'>
        <h1 className='font-bold text-lg'>
          Our Rooms
        </h1>

        <div className='flex justify-between mt-2 flex-col lg:flex-row lg: gap-1 mb-8 text-gray-400'>
          <div className='border p-2 rounded flex flex-1 gap-1 items-center'>
            <MdOutlineLocationOn className='' size={21}/>
            <p>Location</p>
          </div>

          <div className='border p-2 rounded flex flex-1 gap-1 items-center'>
            <button>
              <CiCalendar size={21}/>

            </button>
            <p>Check In</p>
          </div>

          <div className='border p-2 rounded flex-1 flex gap-1 items-center'>
            <button>
              <CiCalendar size={21}/>
              
            </button>
            <p>Check Out</p>
          </div>


          <div className='border p-2 flex gap-2 items-center rounded'>
            <p>4</p>
            Guests
            <div className='flex flex-col text-black'>
              <button>
                <BsFillCaretUpFill/>

              </button>
              
              <button>
                <BsFillCaretDownFill/>

              </button>
            </div>

          </div>

          <button className='p-2 rounded bg-[#0066FF] text-white font-bold hover:bg-blue-400 duration-300'>
            Search Cabin
          </button>


        </div>

        <h1 className='font-bold text-lg'>
          Available Rooms
        </h1>

        <div className='flex justify-between flex-col gap-2 lg:flex-row  text-gray-400'>
          <div className='flex gap-2'>
            <p>
              Fri Jun 30 - Sun Jul 02
            </p>

            <p>
              |
            </p>

            <p>
              <span>8</span> Cabins Available
            </p>
          </div>

          <div>
            Discounts available for extras if you book  2 or more cabins
          </div>
        </div>

        <div className='border shadow-md hover:shadow-xl transition duration-200 flex items-center justify-between p-3 rounded  my-5'>
          <div className='flex flex-1  flex-col justify-between items-center sm:flex-row sm:justify-between'>
            <div className='text-center'>
              <span className='font-bold'>2</span> Cabin(s) have been selected: 
            </div>

            <div className='flex flex-1 items-center gap-1 sm:justify-between sm:flex-row flex-col justify-center  '>
              <span className='font-bold ml-1'><span>4</span> or less people</span> 

              <button className='py-1 px-3 rounded bg-[#0066FF] text-white font-bold hover:bg-blue-400 duration-300'>
                Book Now
              </button>
            </div>
          </div>
          
          
        </div>
        
        <ResultsCards/>

      </div>

      


      
      
    
    </div>
    
  )
}
