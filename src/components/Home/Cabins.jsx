import Image from "next/image";
import Link from "next/link";
import cabinImg1 from "/public/asset/cabin-01.jpg";
import cabinImg2 from "/public/asset/cabin-02.jpg";
import cabinImg3 from "/public/asset/cabin-03.jpg";
import cabinImg4 from "/public/asset/cabin-04.jpg";

const cabinData = [
    {
        id: 1,
        img: cabinImg1,
        title: "The Sand Cabin",
        guests: 2,
        price: "$300",
        link: "/",
        location: "Kasoa",
        rating: "3.0",
    },
    {
        id: 2,
        img: cabinImg2,
        title: "The Sun Cabin",
        guests: 2,
        price: "$240",
        link: "/",
        location: "Elimina",
        rating: "3.5",
    },
    {
        id: 3,
        img: cabinImg3,
        title: "The Goldan Marina",
        guests: 2,
        price: "$350",
        link: "/",
        location: "East Legon",
        rating: "5.0",
    },
    {
        id: 4,
        img: cabinImg4,
        title: "The Glass Cabin",
        guests: 2,
        price: "$350",
        link: "/",
        location: "Tema",
        rating: "3.0",
    },
];

const CabinCard = ({ ...props }) => {
    const { id, img, title, guests, link, price, location, rating } = props;

    return (
        <li key={id} className="shadow-xl min-w-[380px] flex flex-col items-center justify-center p-2 mr-4 overflow-hidden rounded-md border border-solid border-black/20">
            <div className="w-full aspect-video overflow-hidden">
                <Image src={img} width={300} height={300} alt="title" className="w-full h-full object-cover object-center rounded-md" />
            </div>
            <div className="w-full grid grid-cols-5 pt-2 pb-2 pl-2 pr-2">
                <div className="col-span-3 w-full flex flex-col items-start justify-between">
                    <h3 className="text-xl font-semibold">{title}</h3>
                    <div className="mt-2"><span className="font-semibold">{guests}</span> Adults</div>
                    <div className="my-1"><span className="font-semibold">{price}</span> per night</div>
                    <div className="flex items-center justify-center"><span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width={24}
                            height={24}
                            viewBox="0 0 24 24"
                            fill="none"
                            className="w-4 mr-1"
                        >
                            <path
                                fill="#000"
                                fillRule="evenodd"
                                d="M20.438 9.374c.003 1.507-.577 2.974-1.656 4.183L12 21.093l-6.782-7.536c-.794-.894-1.322-1.932-1.541-3.03a5.914 5.914 0 0 1 .281-3.281c.404-1.06 1.104-2.025 2.043-2.816.938-.791 2.089-1.385 3.356-1.733a10.051 10.051 0 0 1 3.935-.271c1.32.17 2.571.599 3.653 1.25 1.081.652 1.962 1.509 2.569 2.5.607.99.924 2.086.924 3.198Zm2.812 0c0 2.094-.823 4.025-2.212 5.585l-7.281 8.087L12 25l-1.759-1.953-7.278-8.087c-1.06-1.192-1.766-2.576-2.06-4.039a7.885 7.885 0 0 1 .373-4.377c.537-1.414 1.47-2.701 2.721-3.756C5.247 1.732 6.781.939 8.471.474A13.4 13.4 0 0 1 13.72.11c1.759.226 3.428.797 4.87 1.666 1.443.87 2.618 2.01 3.428 3.331.81 1.321 1.233 2.783 1.233 4.266ZM12 12.5c.995 0 1.948-.329 2.652-.915.703-.586 1.098-1.38 1.098-2.21 0-.828-.395-1.623-1.098-2.21-.704-.585-1.657-.915-2.652-.915-.995 0-1.948.33-2.652.916-.703.586-1.098 1.38-1.098 2.21 0 .828.395 1.623 1.098 2.209.704.586 1.657.915 2.652.915Z"
                                clipRule="evenodd"
                            />
                        </svg>
                    </span> {location}</div>
                </div>
                <div className="col-span-2 flex flex-col items-end justify-between">
                    <div className="flex items-center justify-center font-medium">
                        <span><svg
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
                        </svg></span>  {rating}
                    </div>
                    <button className="rounded  bg-blue-600 text-white font-bold hover:bg-blue-300 hover:text-black transition duration-300 py-2 px-1.5">BOOK CABIN</button>
                </div>
            </div>
        </li>
    );
};

const Cabins = () => {
    return (
        <section className="mt-24 md:mt-10 mx-5 md:mx-24 flex flex-col items-start overflow-x-hidden">
            <div className="w-full flex items-center justify-between">
                <h2 className="text-xl font-semibold text-black/80 capitalize">Our Featured cabins</h2>
                <Link href="/" className="text-black font-medium hover:text-blue-400 transition duration-300">Show all</Link>
            </div>
            <ul className="mt-6 w-full flex items-stretch justify-start overflow-x-scroll scroll-m-10 no-scrollbar">
                {cabinData.map((item) => {
                    return <CabinCard key={item.id} {...item} />;
                })}
            </ul>
        </section>
    );
};

export default Cabins;