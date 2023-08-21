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
        text: "I had an amazing time at this resort. The rooms were clean and comfortable, and the decor was beautiful. The food was delicious and there were plenty of options to choose from. The surroundings were stunning and I enjoyed spending time outdoors, taking in the beautiful scenery. I would highly recommend this resort to anyone looking for a peaceful and relaxing getaway.",
        name: "Yvonne Fozard",
        post: "guest",
    },
    {
        id: 2,
        img: testimonialImg2,
        text: "Staying at this Airbnb was an absolute delight! The host's attention to detail was impeccable, from the cozy decor to the thoughtful welcome basket. The location was perfect, offering breathtaking views and easy access to local attractions. It felt like a home away from home. Can't wait to come back!",
        name: "Yana Musk",
        post: "guest",
    },
    {
        id: 3,
        img: testimonialImg3,
        text: "The host was incredibly warm and accommodating, making us feel like old friends. The property was not only pristine but also filled with unique touches that added to our enjoyment. We couldn't have asked for a better getaway. Highly recommended!",
        name: "Tanya Kumi",
        post: "guest",
    },
];

const Testimonials = () => {
    return (
        <section className="my-20 mx-24 flex flex-col items-start overflow-hidden max-h-[80vh]">
            <h2 className="text-xl font-semibold text-black/80 capitalize">
                Testimonials
            </h2>
            <div
                className="w-full h-screen relative shadow-xl mt-6 flex items-center justify-center  p-1 rounded-md border border-solid border-black/20"
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
