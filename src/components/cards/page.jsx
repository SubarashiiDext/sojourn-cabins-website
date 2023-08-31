import React from "react";
import Card from "../card/page";
import { cabinData } from "../Modules/card-dummy-data/page";

export default function Cards() {
  return (
    <div>
      <div className=" mt-2 mb-2">
        <div className=" mx-auto flex flex-wrap justify-center gap-4 ">
          {cabinData.map((cabin) => (
            <Card
              key={cabin.id}
              name={cabin.name}
              thumbnail={cabin.thumbnail}
              people={cabin.people}
              location={cabin.location}
              price={cabin.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
