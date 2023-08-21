"use client";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from "next/image";

function SampleNextArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={
                "flex cursor-pointer items-center justify-center bg-primary p-1 aspect-square text-light  absolute top-1/2 -translate-y-1/2 -right-10 w-20 hw-20 bg-blue-500 rounded-full fill-white"
            }
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 -960 960 960"
                className="fill-light w-8 xl:w-12 h-auto"
            >
                <path d="M375-240l-43-43 198-198-198-198 43-43 241 241-241 241z"></path>
            </svg>
            {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width={10}
          height={6}
          viewBox="0 0 10 6"
          className="fill-light w-4 xl:w-6 h-auto -rotate-90"
        >
          <path d="M5.146 5.458a.865.865 0 0 1-.583-.229L.728 1.396A.79.79 0 0 1 .5.813.79.79 0 0 1 .73.229.79.79 0 0 1 1.312 0a.79.79 0 0 1 .583.23l3.25 3.25L8.396.23A.79.79 0 0 1 8.979 0a.79.79 0 0 1 .584.23.79.79 0 0 1 .229.583.79.79 0 0 1-.23.583L5.73 5.229a.736.736 0 0 1-.27.178.902.902 0 0 1-.313.051Z" />
        </svg> */}
        </div>
    );
}

function SamplePrevArrow(props) {
    const { onClick } = props;
    return (
        <div
            className={
                "flex cursor-pointer items-center justify-center bg-primary p-1 aspect-square z-50 text-light absolute top-1/2 -translate-y-1/2 -left-10 w-20 hw-20 bg-blue-500 rounded-full fill-white"
            }
            onClick={onClick}
        >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="48"
                height="48"
                viewBox="0 -960 960 960"
                className="fill-light w-8 xl:w-12 h-auto rotate-180"
            >
                <path d="M375-240l-43-43 198-198-198-198 43-43 241 241-241 241z"></path>
            </svg>
            {/* <svg
          xmlns="http://www.w3.org/2000/svg"
          width={10}
          height={6}
          viewBox="0 0 10 6"
          className="fill-light w-4 xl:w-6 h-auto rotate-90"
        >
          <path d="M5.146 5.458a.865.865 0 0 1-.583-.229L.728 1.396A.79.79 0 0 1 .5.813.79.79 0 0 1 .73.229.79.79 0 0 1 1.312 0a.79.79 0 0 1 .583.23l3.25 3.25L8.396.23A.79.79 0 0 1 8.979 0a.79.79 0 0 1 .584.23.79.79 0 0 1 .229.583.79.79 0 0 1-.23.583L5.73 5.229a.736.736 0 0 1-.27.178.902.902 0 0 1-.313.051Z" />
        </svg> */}
        </div>
    );
}

export default function TestimonialCarousel({ data }) {
    const settings = {
        dots: true,
        lazyLoad: true,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        // fade: true,
        slidesToShow: 1,

        // autoplay: true,
        speed: 500,
        cssEase: "linear",
        pauseOnHover: true,
        swipeToSlide: true,
        dotsClass: "slick-dots slick-thumb",
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        adaptiveHeight: true,
    };
    return (
        <div className="w-[80%] h-auto z-10 bg-white p-2 rounded-md shadow-xl">
            <Slider {...settings}>
                {data.map((item) => {
                    return (
                        <div
                            key={item.id}
                            className="w-full !grid grid-cols-10 items-center"
                        >
                            <div className="col-span-4 aspect-square">
                                <Image
                                    src={item.img}
                                    alt={item.name}
                                    width={500}
                                    height={500}
                                    className="w-full h-full object-cover object-center rounded-md"
                                />
                            </div>
                            <div className="col-span-6 flex flex-col items-start justify-center p-12">
                                <p className="text-xl text-black/80">{item.text}</p>
                                <div className="mt-4 text-xl text-blue-500">
                                    <span className="font-semibold">- {item.name}</span>,{" "}
                                    <i>{item.post}</i>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </Slider>
        </div>
    );
}