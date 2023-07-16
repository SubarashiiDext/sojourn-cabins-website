import OurRateCard from "@/components/Card/OurRateCard";
import ContainerWrapper from "@/components/UI/ContainerWrapper ";
import RateSearch from "@/components/UI/RateSearch";
import UiWrapper from "@/components/UI/UiWrapper";
import React from "react";

export default function Book() {
  return (
    <>
      <div>
        <ContainerWrapper>
          <h1 className="font-semibold text-xl">Book your stay</h1>
          <div>
            <UiWrapper>{/* <OurRateCard /> */}</UiWrapper>
          </div>

          <div>
            <RateSearch />
          </div>

          <div>
            <UiWrapper></UiWrapper>
          </div>
        </ContainerWrapper>
      </div>
    </>
  );
}
