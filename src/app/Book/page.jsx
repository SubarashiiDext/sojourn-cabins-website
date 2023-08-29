"use client";
import OurRateCard from "@/components/Rate/OurRateCard";
import BookingForms from "@/components/Forms/BookingForms";
// import BookingAlert from "@/components/PromoAlert/BookingAlert";
import ContainerWrapper from "@/components/UI/ContainerWrapper ";
import RateSearch from "@/components/UI/RateSearch";
import UiWrapper from "@/components/UI/UiWrapper";
import { AllLocations, cabins, extras } from "@/utils/data";
import React, { useEffect, useState } from "react";
import BookingAlert from "@/components/PromoAlert/BookingAlert";
import jj from "@/components/UI/jj";
import Modal from "@/components/Modal/Modal";
// import PackageSearch from "@/components/OurPackage/PackageSearch";

// const onChange = (date, dateString) => {
//   console.log(date, dateString);
// };

// import { DatePicker } from "antd";

// function to close modal & redirect to /book

export default function Book() {
  const [data, setData] = useState(AllLocations[0]);
  const [query, setQuery] = useState("");

  // humburgr has not been opened
  const [showModal, setShowModal] = useState(false); // the

  const closeModal = () => {
    //     setShowModal(false);
    // window.location.href = "/Book";
    setShowModal(false);
  };

  useEffect(() => {
    setShowModal(true);
  }, []);

  const search = (query) => {
    const newLocation = AllLocations.find((location) =>
      location.location.toLowerCase().includes(query.toLowerCase())
    );
    setQuery(query);
    setData(newLocation);
  };

  return (
    <div className="pt-20">
      <div>
        <BookingAlert />
      </div>
      <div>
        <ContainerWrapper>
          {/* <h1 className="font-semibold text-xl">Book your stay</h1> */}
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

            {/* <UiWrapper>
              <PackageSearch />
            </UiWrapper> */}
          </div>
        </ContainerWrapper>
      </div>

      {/* modal */}
      <Modal isVisible={showModal} onClose={closeModal} />
    </div>
  );
}
