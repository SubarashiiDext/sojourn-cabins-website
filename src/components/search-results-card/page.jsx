import React from 'react'
import Image from "next/image";
import {MdOutlineLocationOn} from "react-icons/md"


export default function ResultsCard() {
  return (
    <div>
      <div className='flex items-center justify-center  '>
        <div className='mb-2 px-2 py-2 border-2 border-black-400  rounded shadow-2xl hover:border-blue-300'>
          
          <Image className=' m-0 rounded' src="/asset/cabin1.png" alt="" width={282} height={336}/>
          
          <div className='mt-2'>
            <h1 className='text-base font-bold block'>Cabin Name</h1>
            <div className=' text-sm'>Number Adults</div>
            <div className=' text-sm align-baseline' ><p className='inline font-bold text-base '>Price</p><p className='ml-2 inline'>per night</p> </div>
            <div className=' text-sm align-baseline flex space-x-1'>
              <div className=' text-base'><MdOutlineLocationOn size={20}/></div>
              <div className=' ml-2'>Location</div>
            </div>
            
          </div>
         
        </div>
      </div>
    </div>
    
  )
}
