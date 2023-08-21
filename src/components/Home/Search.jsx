"use client";
import { useForm } from "react-hook-form";

const Search = () => {
    const { register, handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <aside className="overflow-x-hidden -mt-6 px-8 py-2 bg-white absolute shadow-xl rounded-md">
            <div className="overflow-x-scroll">
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="flex items-center justify-center"
                >
                    <div className="flex flex-col items-start mr-8">
                        <label className="font-semibold text-lg pb-1">Location</label>
                        <select
                            className="text-gray-300 font-medium border-none pl-0 pb-0 pt-0 outline-none focus:ring-0"
                            {...register("location")}
                        >
                            <option value="Akosombo">Accra</option>
                            <option value="Ghana">Kasoa</option>
                        </select>
                    </div>

                    <div className="flex flex-col items-start mx-8">
                        <label className="font-semibold text-lg pb-1">Check In</label>
                        <input
                            className="text-gray-300 font-medium border-none px-0 pb-0 pt-0 outline-none focus:ring-0"
                            type="date"
                            {...register("checkIn")}
                        />
                    </div>

                    <div className="flex flex-col items-start mx-8">
                        <label className="font-semibold text-lg pb-1">Check Out</label>
                        <input
                            className="text-gray-300 font-medium border-none px-0 pb-0 pt-0 outline-none focus:ring-0"
                            type="date"
                            {...register("checkOut")}
                        />
                    </div>

                    <div className="flex flex-col items-start mx-8">
                        <label className="font-semibold text-lg pb-1">Number Of People</label>
                        <select
                            className="text-gray-300 font-medium border-none pl-0 pb-0 pt-0 outline-none focus:ring-0"
                            {...register("numberOfPeople")}
                        >
                            <option value="2">2</option>
                            <option value="4">4</option>
                            <option value="6">6</option>
                            <option value="8">8</option>
                        </select>
                    </div>

                    <button
                        type="submit"
                        className="w-14 bg-blue-600 text-white hover:bg-blue-300 hover:text-black transition duration-300 font-bold p-4 rounded-md"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            className="w-full h-auto"
                        >
                            <path
                                stroke="#fff"
                                strokeLinecap="round"
                                strokeWidth={2}
                                d="m23 23-5.194-5.204m2.878-6.954a9.842 9.842 0 1 1-19.683 0 9.842 9.842 0 0 1 19.683 0Z"
                            />
                        </svg>
                    </button>
                </form>
            </div>
        </aside>
    );
};

export default Search;