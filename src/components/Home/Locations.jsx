import Image from "next/image";
import Link from "next/link";
import locationImg1 from "/public/asset/locationImg1.jpg";
import locationImg2 from "/public/asset/locationImg2.jpg";
import locationImg3 from "/public/asset/locationImg3.jpg";


const locationData = [
  {
    id: 1,
    title: "Adventure tours like no other!",
    description:
      "Our cabins are located in the heart of the Rocky Mountains, surrounded by stunning scenery and endless opportunities for outdoor adventure.",
    img: locationImg1,
    link: "/",
  },
  {
    id: 2,
    title: "Exquisitely designed beach front cabins for you!",
    description:
      "Our exquisitely designed beach-front mirror cabins offer a unique chance to rent a cabin and spend a beautiful vacation.",
    img: locationImg2,
    link: "/",
  },
  {
    id: 3,
    title: "Adventure tours like no other!",
    description:
      "Escape to the mountains and relax in a cozy cabin.Our cabins are located in the heart of the Rocky Mountains, surrounded by stunning scenery and endless opportunities for outdoor adventure.",
    img: locationImg3,
    link: "/",
  },
];

const LocationCard = ({ ...props }) => {
  const { id, title, description, img, link } = props;

  return (
    <li key={id} className="shadow-xl min-w-[550px] flex items-center justify-center p-2 mr-4 overflow-hidden rounded-md border border-solid border-black/20">
      <div className="w-1/2 aspect-square overflow-hidden">
        <Image src={img} alt="title" width={300} height={300} className="w-full h-full object-cover object-center rounded-md" />
      </div>
      <div className="w-1/2 flex flex-col mx-5">
        <Link href={link}><h3 className="text-xl font-semibold">{title}</h3></Link>
        <p className="text-base font-medium text-black/60 pt-3">{description}</p>
      </div>
    </li>
  );
};

const Locations = () => {
  return (
    <section className="mt-24 md:mt-16 mx-5 md:mx-24 flex flex-col items-start overflow-x-hidden">
      <h2 className="text-xl font-semibold text-black/80 capitalize">Our Locations</h2>
      <ul className="mt-6 w-full flex items-stretch justify-start overflow-x-auto md:overflow-x-scroll scroll-m-10">
        {locationData.map((item) => {
          return <LocationCard key={item.id} {...item} />;
        })}
      </ul>
    </section>
  );
};

export default Locations;