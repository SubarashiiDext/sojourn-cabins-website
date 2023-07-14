import React from 'react'
import Card from '../card/page'

export default function Cards() {
  return (
    <div>
      <div className="w-[100%] mt-2 mb-2">
        <div className=" mx-auto md:w-[80%] flex md:flex-row md:items-center gap-2 items-center flex-col">
          <Card/>
          <Card/>
          <Card/>
          <Card/>
              
          
          
        </div>
      </div>
      

    </div>
  )
}
