import Image from "next/image";
import Link from "next/link";
import amenitiesImg1 from "/public/asset/amenties-01.jpg";
import amenitiesImg2 from "/public/asset/amenties-02.jpg";
import amenitiesImg3 from "/public/asset/amenties-03.jpg";
import amenitiesImg4 from "/public/asset/amenties-04.jpg";
import amenitiesImg5 from "/public/asset/amenties-05.jpg";
import amenitiesImg6 from "/public/asset/amenties-06.jpg";

const cabinData = [
    {
        id: 1,
        img: amenitiesImg1,
        title: "Food",
        link: "/",

    },
    {
        id: 2,
        img: amenitiesImg2,
        title: "Massage",
        link: "/",

    },
    {
        id: 3,
        img: amenitiesImg3,
        title: "WIFI",
        link: "/",
    },
    {
        id: 4,
        img: amenitiesImg4,
        title: "Outdoor grill",
        link: "/",
    },
    {
        id: 5,
        img: amenitiesImg5,
        title: "splash pool",
        link: "/",
    },
    {
        id: 6,
        img: amenitiesImg6,
        title: "air condition",
        link: "/",
    },
];

const AmenitiesCard = ({ ...props }) => {
    const { id, img, title, link } = props;

    return (
        <li
            key={id}
            className="shadow-lg min-w-[380px] flex flex-col items-center justify-center mr-4 overflow-x-hidden"
        >
            <div className="w-full overflow-hidden p-1 rounded-md border border-solid border-black/20">
                <Image
                    src={img}
                    width={300}
                    height={300}
                    alt="title"
                    className="w-full h-full object-cover object-center rounded-md"
                />
            </div>
            <Link href={link}><h3 className="mt-2 text-xl font-medium hover:text-blue-500 transition duration-300">{title}</h3></Link>
        </li>
    );
};

const Amenities = () => {
    return (
        <section className="mt-14 mx-5 md:mx-24 flex flex-col items-start overflow-x-hidden">
            <div className="w-full flex items-center justify-between pr-32">
                <h2 className="text-xl font-semibold text-black/80 capitalize">
                    Our Amenities
                </h2>
            </div>
            <ul className="mt-6 w-full flex items-stretch justify-start overflow-x-auto md:overflow-x-scroll scroll-m-10">
                {cabinData.map((item) => {
                    return <AmenitiesCard key={item.id} {...item} />;
                })}
            </ul>
        </section>
    );
};

export default Amenities;