import ResultsCard from '@/components/search-results-card/page'
import React from 'react'
import {MdOutlineCancel} from 'react-icons/md';

export default function searchResults() {
  return (
    <div className='pt-[86px]'>
      <div className='min-h-[60px] bg-[#F8F2DA] relative flex justify-center'>
      
        <div className='gap-1  flex md:flex-row justify-center items-center flex-col '>
          <p className='font-bold'>Check out our special packages</p>
          <p className='hidden md:contents'>|</p>
          <p className=''>Built with your comfort in mind.</p>
        </div> 
        <div className='absolute flex items-center right-10 sm:right-20 h-[100%] font-grey-400'>
          <MdOutlineCancel className='w-7 h-7 text-gray-300 hover:text-gray-500 ' /> 
        </div>
        
      </div>
      
      <div className=' w-[80%] mx-auto'>
        
        <ResultsCard />
    </div>
    </div>
    
  )
}
