import React from 'react'
import Image from "next/image";
import {MdOutlineLocationOn} from "react-icons/md";
import { cabinData } from '../Modules/card-dummy-data/page';


export default function ResultsCard({id, location, price, people, name, image, thumbnail}) {
  return (
    <div>

    
      <div className='flex items-center justify-center  '>
        <div className='mb-2 px-2 py-2 border-2 border-gray-200  rounded shadow-md hover:border-gray-100 hover:shadow-lg transition duration-200'>
          <div className='rounded  overflow-hidden h-40  bg-slate-400'>
            <Image className='object-cover object-center rounded h-40' src={thumbnail} alt="" width={282} height={336}/>
          </div>
          
          <div className='my-2'>
            <h1 className='text-base font-bold block'>{name}</h1>
            <div className=' text-sm'>{people} <p className='inline'>Adult(s)</p></div>
            <div className=' text-sm align-baseline' >
              <p className='inline font-bold'>$</p>
              <p className='inline font-bold text-bold text-bold'>{price}</p>
              <p className='ml-2 inline'>per night</p> </div>
            <div className=' text-sm align-baseline flex space-x-0.5'>
              <div className=' text-base'><MdOutlineLocationOn size={20}/></div>
              <div className=' ml-2'>{location}</div>
            </div>
            
          </div>
          
        </div>
      </div>
    </div>
    
  )
}
