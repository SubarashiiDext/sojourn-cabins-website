import React from "react";
import Card from "../card/page";
import { cabinData } from "../Modules/card-dummy-data/page";

export default function Cards() {
  return (
    <div>
      <div className="w-[100%] mt-2 mb-2">
        <div className=" mx-auto md:w-[80%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {
            cabinData.map((cabin)=>( 
              <Card key={cabin.id} name={cabin.name} image={cabin.image} thumbnail={cabin.thumbnail} people={cabin.people} location={cabin.location} price={cabin.price} />)
            )
          }
          
        </div>
      </div>
    </div>
  );
}
