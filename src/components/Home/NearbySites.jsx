import site1 from "/public/asset/site-01.jpg";
import site2 from "/public/asset/site-02.jpg";
import site3 from "/public/asset/site-03.jpg";
import site4 from "/public/asset/site-04.jpg";

import Image from "next/image";
import Link from "next/link";

const cabinData = [
    {
        id: 1,
        img: site1,
        title: "Elmina Castle",
        link: "/",
        rating: "5.0",
    },
    {
        id: 2,
        img: site2,
        title: "Stingless Bee Centre",
        link: "/",
        rating: "4.0",
    },
    {
        id: 3,
        img: site3,
        title: "Kakum National Park",
        link: "/",
        rating: "4.5",
    },
    {
        id: 4,
        img: site4,
        title: "Fosu Lagoon",
        link: "/",
        rating: "4.5",
    },
];

const SiteCard = ({ ...props }) => {
    const { id, title, img, link, rating } = props;

    return (
        <li
            key={id}
            className="shadow-xl min-w-[330px] flex flex-col items-center justify-center p-2 mr-4 overflow-hidden rounded-8xs border border-solid border-black/20"
        >
            <div className="w-full aspect-[4/3] overflow-hidden">
                <Image
                    src={img}
                    width={300}
                    height={300}
                    alt="title"
                    className="w-full h-full object-cover object-center rounded-8xs"
                />
            </div>
            <div className="w-full flex items-center justify-between mt-5">
                <Link href={link}>
                    <h3 className="text-base font-medium">{title}</h3>
                </Link>
                <div className="flex items-center justify-center font-medium">
                    <span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={18}
                            height={18}
                            viewBox="0 0 18 18"
                            fill="none"
                            className="mr-1 w-5"
                        >
                            <path
                                fill="#FFB800"
                                d="M8.1 1.39a1.042 1.042 0 0 1 1.8 0l2.33 3.998 4.523.98a1.042 1.042 0 0 1 .555 1.712l-3.083 3.45.467 4.605a1.042 1.042 0 0 1-1.457 1.058L9 15.327l-4.235 1.866a1.04 1.04 0 0 1-1.457-1.058l.467-4.604L.692 8.08a1.042 1.042 0 0 1 .555-1.713l4.524-.98L8.1 1.39Z"
                            />
                        </svg>
                    </span>{" "}
                    {rating}
                </div>
            </div>
        </li>
    );
};

const NearbySites = () => {
    return (
        <section className="mt-24 md:mt-10 mx-12 md:mx-24 flex flex-col items-start overflow-hidden">
            <h2 className="text-xl font-semibold text-black/80 capitalize">
                tourist sites nearby
            </h2>
            <ul className="mt-6 w-full flex items-stretch justify-start overflow-x-scroll scroll-m-10 no-scrollbar">
                {cabinData.map((item) => {
                    return <SiteCard key={item.id} {...item} />;
                })}
            </ul>
        </section>
    );
};

export default NearbySites;
