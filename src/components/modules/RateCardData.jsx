"use client";
import React, { useState } from "react";
import OurRateCard from "../Card/OurRateCard";

const RateCardData = () => {
  const [cabin, setCabin] = useState([
    {
      id: 1,
      location: "Lapaz",
      cabins: {
        sand_cabin: {
          weekdays: {
            price: "$209",
          },
          weekends: {
            price: "$229",
          },
        },
        sea_cabin: {
          weekdays: {
            price: "$209",
          },
          weekends: {
            price: "$229",
          },
        },
        sun_cabin: {
          weekdays: {
            price: "$209",
          },
          weekends: {
            price: "$229",
          },
        },
      },
      extras: {
        single_booking: {
          type: "1 cabin",
          quantity: "2",
          category: {
            full_day: {
              price: "$150",
            },
            one_night_stay: {
              price: "$130",
            },
          },
        },
        group_booking_one: {
          type: "2 cabin",
          quantity: "4",
          category: {
            full_day: {
              price: "$250",
            },
            one_night_stay: {
              price: "$215",
            },
          },
        },
        group_booking_two: {
          type: "3 cabin",
          quantity: "6",
          category: {
            full_day: {
              price: "$350",
            },
            one_night_stay: {
              price: "$295",
            },
          },
        },
        massage: {
          price: "$80",
        },

        outdoor_movie: {
          price: "$30",
        },

        sax_player: {
          price: "$80",
        },
      },
    },
  ]);
  return (
    <div>
      {cabin.map((cabin) => (
        <OurRateCard
          key={cabin.id}
          location={cabin.location}
          cabins={cabin.cabins}
          extras={cabin.extras}
        />
      ))}
    </div>
  );
};

export default RateCardData;
