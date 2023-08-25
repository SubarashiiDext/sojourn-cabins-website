import Image from "next/image";
import Link from "next/link";

const ChefBooking = () => {
    return (
        <section className="mt-24 md:mt-10 mx-6 md:mx-24 flex flex-col items-start overflow-hidden max-h-full md:max-h-[80vh]">
            <h2 className="text-xl font-semibold text-black/80 capitalize">
                Book your own Chef
            </h2>
            <div className="w-full shadow-xl mt-6 flex flex-col md:flex-row items-center justify-center  p-1 rounded-md border border-solid border-black/20">
                <div className="w-full md:w-1/2 overflow-hidden aspect-square">
                    <Image
                        src="/asset/privateChef.jpg"
                        width={575}
                        height={523}
                        alt="title"
                        className="w-full h-full object-cover object-center rounded-md"
                    />
                </div>
                <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-6">
                    <div className="flex flex-col items-start justify-center">
                        <h3 className="text-3xl font-semibold capitalize">
                            The Private Chef Option
                        </h3>
                        <p className="text-lg font-medium text-black/60 my-9">
                            You could have your own chef at very affordable rates! All you have
                            to do is sit back, relax and enjoy the world class cuisine. See the
                            suggested menu here. You get to select from this menu prior to your
                            arrival so you don&apos;t need to worry about anything when you arrive.
                            For additional food options, see here.
                        </p>
                        <Link href="/" className="bg-blue-300 flex items-center rounded-md">
                            <span className="px-2 py-4 flex items-center font-medium hover:text-blue-600 transition duration-300">
                                Learn more
                            </span>{" "}
                            <span className="bg-blue-500 hover:bg-blue-400 hover:text-black transition duration-300 px-6 py-4 rounded-md">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width={20}
                                    height={20}
                                    viewBox="0 0 20 20"
                                    fill="none"
                                    className="w-full"
                                >
                                    <path
                                        fill="#fff"
                                        d="M9.125 19.125c-.23-.23-.35-.52-.36-.875-.01-.354.099-.646.329-.875l6.125-6.125H1.25a1.21 1.21 0 0 1-.891-.36c-.24-.24-.36-.537-.359-.89 0-.354.12-.651.36-.891s.537-.36.89-.359h13.969L9.094 2.625c-.23-.23-.339-.52-.329-.875.01-.354.13-.646.36-.875.23-.23.52-.344.875-.344.354 0 .646.115.875.344l8.25 8.25a.851.851 0 0 1 .266.391 1.49 1.49 0 0 1 0 .953c-.051.146-.14.281-.266.406l-8.25 8.25c-.23.23-.52.344-.875.344-.354 0-.646-.115-.875-.344Z"
                                    />
                                </svg>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ChefBooking;