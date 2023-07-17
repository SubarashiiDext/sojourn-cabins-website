import React from "react";

const OurRateCard = ({ location, cabins, extras }) => {
  return (
    <div>
      <div className="hidden md:block">
        <div className="flex flex-row justify-around  text-[#06f] text-[24px] font-semibold mb-[-50px] mt-14">
          <h1 className="ml-[-220px]"> CABINS {location}</h1>
          <h1 className="ml-[-185px]">EXTRAS {location}</h1>
        </div>
      </div>

      <div className="md:pt-28 pb-20 flex flex-col md:flex-row justify-evenly  text-center ">
        {/* 1 main */}
        <div>
          <div className="md:mt-[-70px] pt-4 flex flex-col">
            {/* <h1 className="text-[#06f] text-[24px] font-semibold">CABINS</h1> */}

            <div className="pt-4 items-center text-center justify-center">
              <h2 className="text-[#000000CC] font-semibold text-[20px] py-4">
                Sand Cabin
              </h2>
              <div className="text-center items-center flex flex-col">
                <p> Weekdays (Monday - Thursday) </p>
                <span className="flex flex-row items-center text-center gap-2">
                  <h1 className="font-semibold text-[#06f] text-[24px]">
                    {cabins.sand_cabin.weekdays.price}
                  </h1>
                  <em className="text-[#000000] font-semibold pt-2">
                    per night
                  </em>
                </span>
              </div>

              <div className="text-center items-center flex flex-col">
                <p> Weekends (Friday - Sunday) </p>
                <span className="flex flex-row items-center text-center gap-2">
                  <h1 className="font-semibold text-[#06f] text-[24px]">
                    {cabins.sand_cabin.weekends.price}
                  </h1>
                  <em className="text-[#000000] font-semibold pt-2">
                    per night
                  </em>
                </span>
              </div>
            </div>

            <div>
              <h2 className="py-4 text-[#000000CC] font-semibold text-[20px]">
                Sea Cabin
              </h2>
              <div className="text-center items-center flex flex-col">
                <p> Weekdays (Monday - Thursday) </p>
                <span className="flex flex-row items-center text-center gap-2">
                  <h1 className="font-semibold text-[#06f] text-[24px]">
                    {cabins.sea_cabin.weekdays.price}
                  </h1>
                  <em className="text-[#000000] font-semibold pt-2">
                    per night
                  </em>
                </span>
              </div>

              <div className="text-center items-center flex flex-col">
                <p> Weekends (Friday - Sunday) </p>
                <span className="flex flex-row items-center text-center gap-2">
                  <h1 className="font-semibold text-[#06f] text-[24px]">
                    {cabins.sea_cabin.weekends.price}
                  </h1>
                  <em className="text-[#000000] font-semibold pt-2">
                    per night
                  </em>
                </span>
              </div>
            </div>

            <div className="text-center items-center flex flex-col">
              <h2 className="text-[#000000CC] font-semibold text-[20px] py-4">
                Sun Cabin
              </h2>
              <div className="text-center items-center flex flex-col">
                <p> Weekdays (Monday - Thursday) </p>
                <span className="flex flex-row items-center text-center gap-2">
                  <h1 className="font-semibold text-[#06f] text-[24px]">
                    {cabins.sun_cabin.weekdays.price}
                  </h1>
                  <em className="text-[#000000] font-semibold pt-2">
                    per night
                  </em>
                </span>
              </div>

              <div className="text-center items-center flex flex-col">
                <p> Weekends (Friday - Sunday) </p>
                <span className="flex flex-row items-center text-center gap-2">
                  <h1 className="font-semibold text-[#06f] text-[24px]">
                    {cabins.sun_cabin.weekends.price}
                  </h1>
                  <em className="text-[#000000] font-semibold pt-2">
                    per night
                  </em>
                </span>
              </div>
            </div>
          </div>
        </div>

        <span className="w-[1px] h-[598px] bg-[#0066FF] hidden md:block"></span>

        {/* 2 main  */}
        <div>
          <div className="md:mt-[-70px] max-w-[250px] mx-auto pt-4 flex flex-col">
            {/* <h1 className="text-[#06f] text-[24px] font-semibold">CABINS</h1> */}

            <div className=" pt-4 items-center text-center justify-center">
              <h2 className="text-[#000000CC] font-semibold text-[20px] py-4">
                Single Booking
              </h2>
              <div className="text-center items-center flex flex-col">
                <div className="flex flex-row font-semibold pb-1">
                  <p>{extras.single_booking.type}</p>
                  <p>({extras.single_booking.quantity} People)</p>
                </div>
                <p>
                  Full Day [Breakfast, Lunch (2 courses) & Dinner (2 courses)]
                </p>
                <span className="flex flex-row items-center text-center gap-2">
                  <h1 className="font-semibold text-[#06f] text-[24px]">
                    {extras.single_booking.category.full_day.price}
                  </h1>
                  <em className="text-[#000000] font-semibold pt-2">
                    per night
                  </em>
                </span>
              </div>

              <div className="text-center items-center flex flex-col">
                <p>One Night Stay [Lunch (2 courses) & Dinner (2 courses)]</p>
                <span className="flex flex-row items-center text-center gap-2">
                  <h1 className="font-semibold text-[#06f] text-[24px]">
                    {extras.single_booking.category.one_night_stay.price}
                  </h1>
                  <em className="text-[#000000] font-semibold pt-2">
                    per night
                  </em>
                </span>
              </div>
            </div>

            <div>
              <h2 className="py-4 text-[#000000CC] font-semibold text-[20px]">
                Group Booking - 1
              </h2>
              <div className="text-center items-center flex flex-col">
                <div className="flex flex-row font-semibold pb-1">
                  <p>{extras.group_booking_one.type}</p>
                  <p>({extras.group_booking_one.quantity} People)</p>
                </div>
                <p>
                  Full Day [Breakfast, Lunch (2 courses) & Dinner (2 courses)]
                </p>
                <span className="flex flex-row items-center text-center gap-2">
                  <h1 className="font-semibold text-[#06f] text-[24px]">
                    {extras.group_booking_one.category.full_day.price}
                  </h1>
                  <em className="text-[#000000] font-semibold pt-2">
                    per night
                  </em>
                </span>
              </div>

              <div className="text-center items-center flex flex-col">
                <p> One Night Stay [Lunch (2 courses) & Dinner (2 courses)] </p>
                <span className="flex flex-row items-center text-center gap-2">
                  <h1 className="font-semibold text-[#06f] text-[24px]">
                    {extras.group_booking_one.category.one_night_stay.price}
                  </h1>
                  <em className="text-[#000000] font-semibold pt-2">
                    per night
                  </em>
                </span>
              </div>
            </div>
          </div>
        </div>

        <span className="w-[1px] h-[598px] bg-[#0066FF] hidden md:block"></span>

        {/* 3 main */}
        <div>
          <div className="md:mt-[-70px] max-w-[250px] mx-auto pt-4 flex flex-col">
            {/* <h1 className="text-[#06f] text-[24px] font-semibold">CABINS</h1> */}

            <div className=" pt-4 items-center text-center justify-center">
              <h2 className="text-[#000000CC] font-semibold text-[20px] py-4">
                Group Booking - 2
              </h2>
              <div className="text-center items-center flex flex-col">
                <div className="flex flex-row font-semibold pb-1">
                  <p>{extras.group_booking_two.type}</p>
                  <p>({extras.group_booking_two.quantity} People)</p>
                </div>
                <p>
                  Full Day [Breakfast, Lunch (2 courses) & Dinner (2 courses)]
                </p>
                <span className="flex flex-row items-center text-center gap-2">
                  <h1 className="font-semibold text-[#06f] text-[24px]">
                    {extras.single_booking.category.full_day.price}
                  </h1>
                  <em className="text-[#000000] font-semibold pt-2">
                    per night
                  </em>
                </span>
              </div>

              <div className="text-center items-center flex flex-col">
                <p>One Night Stay [Lunch (2 courses) & Dinner (2 courses)]</p>
                <span className="flex flex-row items-center text-center gap-2">
                  <h1 className="font-semibold text-[#06f] text-[24px]">
                    {extras.single_booking.category.one_night_stay.price}
                  </h1>
                  <em className="text-[#000000] font-semibold pt-2">
                    per night
                  </em>
                </span>
              </div>
            </div>

            <div>
              <h2 className="pt-4 pb-2 text-[#000000CC] font-semibold text-[20px]">
                Massage
              </h2>
              <div className="text-center items-center flex flex-col">
                <p>Couples Massage - 45mins per person</p>
                <span className="flex flex-row items-center text-center gap-2">
                  <h1 className="font-semibold text-[#06f] text-[24px]">
                    {extras.massage.price}
                  </h1>
                  <em className="text-[#000000] font-semibold pt-2">
                    per night
                  </em>
                </span>
              </div>
            </div>

            <div>
              <h2 className="pt-4 pb-2 text-[#000000CC] font-semibold text-[20px]">
                Outdoor Movie Experience
              </h2>
              <div className="text-center items-center flex flex-col">
                <p>per night</p>
                <span className="flex flex-row items-center text-center gap-2">
                  <h1 className="font-semibold text-[#06f] text-[24px]">
                    {extras.outdoor_movie.price}
                  </h1>
                  <em className="text-[#000000] font-semibold pt-2">
                    per night
                  </em>
                </span>
              </div>
            </div>

            <div>
              <h2 className="pt-4 pb-2 text-[#000000CC] font-semibold text-[20px]">
                Saxophone Player
              </h2>
              <div className="text-center items-center flex flex-col">
                <p>One Session</p>
                <span className="flex flex-row items-center text-center gap-2">
                  <h1 className="font-semibold text-[#06f] text-[24px]">
                    {extras.sax_player.price}
                  </h1>
                  <em className="text-[#000000] font-semibold pt-2">
                    per night
                  </em>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center pb-14 px-2 md:px-0">
        <p>
          All rates include a complimentary walking tour of Anomabo and
          complimentary continental breakfast
        </p>
      </div>
    </div>
  );
};

export default OurRateCard;
