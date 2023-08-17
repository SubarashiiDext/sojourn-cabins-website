import React from "react";
import { cabinData } from "../card-dummy-data/page";
import ResultsCard from "@/components/search-results-card/page";

export default function ResultsCards() {
  return (
    <div>
      <div className="w-[100%] mt-2 mb-2">
        <div className=" mx-auto  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 ">
          {
            cabinData.map((cabin)=>( 
              <ResultsCard key={cabin.id} name={cabin.name} image={cabin.image} thumbnail={cabin.thumbnail} people={cabin.people} location={cabin.location} price={cabin.price} />)
            )
          }
          
        </div>
      </div>
    </div>
  );
}
