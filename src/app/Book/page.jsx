"use client";
import OurRateCard from "@/components/Card/OurRateCard";
import BookingForms from "@/components/Forms/BookingForms";
import BookingAlert from "@/components/PromoAlert/BookingAlert";
import ContainerWrapper from "@/components/UI/ContainerWrapper ";
import RateSearch from "@/components/UI/RateSearch";
import UiWrapper from "@/components/UI/UiWrapper";
import { AllLocations, cabins, extras } from "@/utils/data";
import React, { useState } from "react";

export default function Book() {
  const [data, setData] = useState(AllLocations[0]);
  const [query, setQuery] = useState("");

  const search = (query) => {
    const newLocation = AllLocations.find((location) =>
      location.location.toLowerCase().includes(query.toLowerCase())
    );
    setQuery(query);
    setData(newLocation);
  };
  return (
    <>
      <div>
        <BookingAlert />
      </div>
      <div>
        <ContainerWrapper>
          <h1 className="font-semibold text-xl">Book your stay</h1>
          <div>
            <UiWrapper>
              <BookingForms />
            </UiWrapper>
          </div>

          <div>
            <div>
              <RateSearch value={query} onChange={search} />
            </div>
          </div>

          <div>
            <UiWrapper>
              {data ? (
                <OurRateCard
                  cabins={data.cabins}
                  extras={data.extras}
                  location={data.location}
                />
              ) : (
                <p className="text-center py-4 text-3xl font-semibold">
                  No Data
                </p>
              )}
            </UiWrapper>
          </div>
        </ContainerWrapper>
      </div>
    </>
  );
}
