"use client";
import { useForm } from "react-hook-form";
const BookingForm = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

  return (
    <section className="mx-32 my-28 flex items-center justify-center border border-black/20 rounded-b-8xs">
        <div className="w-full flex flex-col items-center justify-center border-t-[20px] border-mediumslateblue-100 py-8">
        <h2 className="uppercase text-mediumslateblue-100 font-semibold text-xl">the booking form</h2>

        <form
        onSubmit={handleSubmit(onSubmit)}
        className="px-20 w-full flex flex-col items-center justify-center mt-8"
      >
        <div className="w-full grid grid-cols-2 grid-rows-2 gap-4"> 
        <div className="flex items-center col-span-1 row-span-1 bg-gray-200 px-4 py-2 rounded-8xs">
        <div className="w-10 mr-4">
           <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="none"
      viewBox="0 0 35 35"
      className="w-full h-auto"
    >
      <path
        stroke="#A8A8A8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.63"
        strokeWidth="2"
        d="M26.25 5.833H8.75a5.833 5.833 0 00-5.833 5.834V26.25a5.833 5.833 0 005.833 5.833h17.5a5.833 5.833 0 005.833-5.833V11.667a5.833 5.833 0 00-5.833-5.834zM11.667 2.917V8.75m11.666-5.833V8.75M2.917 14.583h29.166"
      ></path>
    </svg>
           </div>
          <div className="flex flex-col items-start">
          <label className="font-medium text-gray-300">Check In</label>
          <input
            className="text-black bg-transparent font-semibold border-none px-0 pb-0 pt-0 outline-none focus:ring-0"
            type="date"
            {...register("checkIn")}
          />
          </div>
        </div>

        <div className="flex items-center col-span-1 row-span-1 bg-gray-200 px-4 py-2 rounded-8xs">
        <div className="w-10 mr-4">
           <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="none"
      viewBox="0 0 35 35"
      className="w-full h-auto"
    >
      <path
        stroke="#A8A8A8"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeOpacity="0.63"
        strokeWidth="2"
        d="M26.25 5.833H8.75a5.833 5.833 0 00-5.833 5.834V26.25a5.833 5.833 0 005.833 5.833h17.5a5.833 5.833 0 005.833-5.833V11.667a5.833 5.833 0 00-5.833-5.834zM11.667 2.917V8.75m11.666-5.833V8.75M2.917 14.583h29.166"
      ></path>
    </svg>
           </div>
          <div className="flex flex-col items-start">
          <label className="font-medium text-gray-300">Check Out</label>
          <input
            className="text-black bg-transparent font-semibold border-none px-0 pb-0 pt-0 outline-none focus:ring-0"
            type="date"
            {...register("checkIn")}
          />
          </div>
        </div>

        <div className="flex items-center col-span-1 row-span-1 bg-gray-200 px-4 py-2 rounded-8xs">

        <div className="w-10 mr-4">
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="35"
      fill="none"
      viewBox="0 0 35 35"
      className="w-full h-auto"
    >
      <g>
        <path
          fill="#A8A8A8"
          fillOpacity="0.63"
          d="M31.571 28.984c-2.082-3.6-5.29-6.18-9.036-7.404a9.844 9.844 0 10-10.07 0c-3.745 1.222-6.954 3.803-9.036 7.404a1.094 1.094 0 101.894 1.094c2.575-4.451 7.128-7.11 12.177-7.11 5.05 0 9.602 2.659 12.178 7.11a1.095 1.095 0 002.042-.686 1.094 1.094 0 00-.149-.408zM9.844 13.125a7.656 7.656 0 117.656 7.656 7.664 7.664 0 01-7.656-7.656z"
        ></path>
      </g>
    </svg>
           </div>
          <div className="flex flex-col items-start">

          <label className="font-medium text-gray-300 pb-1">Guests</label>
       

<select
            className="text-black font-semibold bg-transparent border-none pl-0 pb-0 pt-0 outline-none focus:ring-0"
            {...register("numberOfPeople")}
          >
            <option value="2" >2 people</option>
            <option value="4">4 people</option>
            <option value="6">6 people</option>
            <option value="8">8 people</option>
          </select>
          
          
          </div>
        </div>

        <div className="flex items-center col-span-1 row-span-1 bg-gray-200 px-4 py-2 rounded-8xs">

        <div className="w-10 mr-4">
        <svg
      xmlns="http://www.w3.org/2000/svg"
      width="35"
      height="33"
      fill="none"
      viewBox="0 0 35 33"
      className="w-full h-auto"
    >
      <g>
        <path
          fill="#A8A8A8"
          fillOpacity="0.63"
          d="M2.917 30.25c0-2.917 1.229-5.715 3.417-7.778 2.188-2.063 5.155-3.222 8.25-3.222 3.094 0 6.061 1.159 8.249 3.222 2.188 2.063 3.417 4.86 3.417 7.778h-2.917c0-2.188-.921-4.287-2.562-5.834C19.13 22.87 16.904 22 14.583 22c-2.32 0-4.546.87-6.187 2.416-1.64 1.547-2.563 3.646-2.563 5.834H2.917zm11.666-12.375c-4.834 0-8.75-3.692-8.75-8.25s3.916-8.25 8.75-8.25c4.835 0 8.75 3.692 8.75 8.25s-3.915 8.25-8.75 8.25zm0-2.75c3.223 0 5.834-2.461 5.834-5.5s-2.61-5.5-5.834-5.5c-3.223 0-5.833 2.461-5.833 5.5s2.61 5.5 5.833 5.5zm12.081 5.092c2.05.87 3.789 2.28 5.009 4.06a10.55 10.55 0 011.869 5.973h-2.917c0-1.59-.486-3.145-1.401-4.48a8.63 8.63 0 00-3.757-3.045l1.197-2.508zM25.661 4.693a7.94 7.94 0 013.61 2.786 7.26 7.26 0 011.354 4.208c0 1.888-.747 3.706-2.096 5.1-1.35 1.394-3.203 2.262-5.196 2.433v-2.768a5.227 5.227 0 002.86-1.337 4.724 4.724 0 001.459-2.678 4.573 4.573 0 00-.515-2.971 4.979 4.979 0 00-2.285-2.101l.809-2.672z"
        ></path>
      </g>
    </svg>
           </div>
          <div className="flex flex-col items-start">
          <label className="font-medium text-gray-300 pb-1">booking type</label>
          <select
            className="text-black capitalize font-semibold border-none pl-0 pb-0 pt-0 outline-none focus:ring-0 bg-transparent"
            {...register("bookingType")}
          >
            <option value="single cabin booking" >single cabin booking</option>
            <option value="multi cabin booking">multi cabin booking</option>
          </select> </div>
        </div>
        </div>

        <div className="my-8 text-xl  font-medium">
            <span className="font-semibold mr-4 capitalize">total cost: </span> <span >Night(s) x 2 = <strong>$1100.00</strong></span>
        </div>

        <button
          type="submit"
          className="w-full bg-mediumslateblue-100 text-white font-semibold p-4 rounded text-xl capitalize"
        >
          book your escape
        </button>
      </form>

        </div>

        
    </section>
  )
}

export default BookingForm