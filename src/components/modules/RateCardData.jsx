"use client";
import React, { useState } from "react";
import OurRateCard from "../Card/OurRateCard";
import { cabins, extras } from "@/utils/data";
const RateCardData = () => {
  const [cabin, setCabin] = useState([
    {
      location: "Lapaz",
      cabins,
      extras
    },
  ]);
  return (
    <div>
      {cabin.map((cabin, index) => (
        <OurRateCard
          key={index}
          location={cabin.location}
          cabins={cabin.cabins}
          extras={cabin.extras}
        />
      ))}
    </div>
  );
};

export default RateCardData;
