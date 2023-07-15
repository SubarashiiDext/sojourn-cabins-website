import React from 'react'
import Image from "next/image";
import {MdOutlineLocationOn} from "react-icons/md"


export default function Card() {
  return (
    <div>
      <div className='flex items-center justify-center  '>
        <div className='mb-2 px-2 py-2 border-2 border-black-400  rounded shadow-2xl hover:border-blue-300'>
          
          <Image className=' m-0 rounded' src="/asset/cabin1.png" alt="" width={282} height={336}/>
          
          <div>
            <h1 className='text-base font-bold block'>Cabin Name</h1>
            <div className='block'>Number Adults</div>
            <div className='flex' ><p className='font-bold '>Price</p><p className=''>- per night</p> </div>
            <div className='flex'>
              <div><MdOutlineLocationOn size={20}/></div>
              <div>Location</div>
            </div>
            
          </div>
          <div className='flex justify-end items-center '>
            <button className=" bg-blue-600 font-bold  py-2 px-3 rounded text-white hover:bg-blue-300 hover:text-black transition duration-300 ">
              View Cabin
            </button>
          </div>
        </div>
      </div>
    </div>
    
  )
}
