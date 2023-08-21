import Link from "next/link";

const BookingProcess = () => {
    return (
        <section className="mt-20 flex flex-col items-start overflow-x-scroll">
            <h2 className="ml-12 sm:ml-24 text-xl font-semibold text-black/80 capitalize">
                booking process
            </h2>

            <div className="mt-6 flex bg-blue-200 w-full px-2 sm:px-24 py-2 sm:py-16 shadow-lg">
                <ul className="gap-5 w-full flex flex-col sm:flex-row items-stretch justify-start bg-white px-8 py-8 sm:py-16 border-t-[20px] border-blue-600">
                    <li className="pr-6 sm:border-r border-solid border-blue-500">
                        <span className="uppercase text-xl text-blue-500 font-semibold">step 1</span>
                        <h3 className="font-semibold text-lg py-2">Choose date and menu</h3>
                        <p className="text-black/60 font-medium">
                            See availability and choose your dates on our booking page and
                            decide how you want to eat. See the food options{" "}
                            <Link href="/" className="text-blue-500 hover:text-blue-300 transition duration-300 underline">available here.</Link>
                        </p>
                    </li>
                    <li className="sm:px-6 sm:border-r border-solid border-blue-500">
                        <span className="uppercase text-xl text-blue-500 font-semibold">step 2</span>
                        <h3 className="font-semibold text-lg py-1">Book your dates</h3>
                        <p className="text-black/60 font-medium">
                            Book your dates and choose your extras (if any) during your
                            booking process and we will send you a booking confirmation email.
                        </p>
                    </li>
                    <li className="sm:px-6 sm:border-r border-solid border-blue-500">
                        <span className="uppercase text-xl text-blue-500 font-semibold">step 3</span>
                        <h3 className="font-semibold text-lg py-1">Make payment</h3>
                        <p className="text-black/60 font-medium">
                            To complete your booking, you will need to make payment as part of
                            your booking process before the booking confirmation email is
                            sent.
                        </p>
                    </li>
                    <li className="sm:pl-6">
                        <span className="uppercase text-xl text-blue-500 font-semibold">step 4</span>
                        <h3 className="font-semibold text-lg py-1">Welcome Email</h3>
                        <p className="text-black/60 font-medium">
                            After you make payment, we will send you a welcome email closer to
                            your check-in date with the following details:
                        </p>
                        <div>
                            <ul className="list-disc pl-4 space-x-1">
                                <li className="list-item">
                                    Forms to select your menu if you chose to have a chef. Select
                                    your food choices by the stipulated deadline.
                                </li>
                                <li className="list-item">Guest book with very detailed information.</li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </div>
        </section>
    );
};

export default BookingProcess;