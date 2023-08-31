import testimonialImg1 from "/public/asset/testimonial1.jpeg";
import testimonialImg2 from "/public/asset/testimonial2.jpeg";
import testimonialImg3 from "/public/asset/testimonial3.jpg";
import Image from "next/image";
import Link from "next/link";
import TestimonialCarousel from "./TestimonialCarousel";

const testimonialData = [
    {
        id: 1,
        img: testimonialImg1,
        text: "I had an amazing time at this resort. The rooms were clean and comfortable, and the decor was beautiful.",
        name: "Yvonne Ki",
        post: "guest",
    },
    {
        id: 2,
        img: testimonialImg2,
        text: "Staying at this Airbnb was an absolute delight! The host's attention to detail was impeccable. Can't wait to come back!",
        name: "Yana Musk",
        post: "guest",
    },
    {
        id: 3,
        img: testimonialImg3,
        text: "The host was incredibly warm and accommodating. We couldn't have asked for a better getaway. Highly recommended!",
        name: "Tanya Kumi",
        post: "guest",
    },
];

const Testimonials = () => {
    return (
        <section className="my-20 mx-6 md:mx-24 flex flex-col items-start overflow-hidden max-h-[80vh]">
            <h2 className="text-xl font-semibold text-black/80 capitalize">
                Testimonials
            </h2>
            <div
                className="w-full h-screen relative shadow-xl mt-6 flex items-center justify-center md:p-1 rounded-md border border-solid border-black/20"
            >
                <TestimonialCarousel data={testimonialData} />

                <div
                    className="w-full h-full bg-blue-600 absolute bottom-0 right-0 left-0"
                    style={{ clipPath: "polygon(0 40%, 100% 50%, 100% 100%, 0% 100%)" }}
                ></div>
            </div>
        </section>
    );
};

export default Testimonials;
