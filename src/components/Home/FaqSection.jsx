"use client"
import { useState, useEffect } from "react";
import Accordion from "./Accordion";
import axios from "axios";

const FaqSection = () => {
    const [FAQs, setFAQs] = useState([]);

    useEffect(() => {
        axios.get('http://ec2-54-91-145-179.compute-1.amazonaws.com/sojourn-cabins/api/v1/web-sections/faqs/homepage')
            .then((response) => {
                setFAQs(response.data)
            })
            .catch((error) => { error })
        },[]
    )

    return (
        <section className="w-full h-max mb-3 md:mb-4 px-6 md:px-24 flex flex-col items-start overflow-hidden">
            <h2 className="text-xl font-semibold text-black/80 capitalize">
                frequently asked questions
            </h2>

            <div className="w-full flex flex-col md:flex-row justify-between mt-6">
                <div className="w-full grid sm:grid-cols-2 gap-4 ">

                    {FAQs.map((FAQ) => (
                        <Accordion key={FAQ._id} title={FAQ.question}>
                            <p className="font-medium text-dark/80">
                                {FAQ.response}
                            </p>
                        </Accordion>
                    ))}
                </div>
            </div>
            {/* <div className="w-full flex flex-col md:flex-row justify-between mt-6">
                <div className="w-full md:w-1/2 space-y-4 md:mr-2 pb-4 md:pb-0">
                    <Accordion title="What's included in our getaway?">
                        <p className="font-medium text-dark/80">
                            Please see up to date pricing for our cabin and all add-on
                            services via our website: https://www.sojourngh.com/rates
                        </p>
                    </Accordion>
                    <Accordion title="What are our current prices?">
                        <p className="font-medium text-dark/80">
                            Please see up to date pricing for our cabin and all add-on
                            services via our website: https://www.sojourngh.com/rates
                        </p>
                    </Accordion>
                    <Accordion title="Do you have 24/7 security?">
                        <p className="font-medium text-dark/80">
                            Please see up to date pricing for our cabin and all add-on
                            services via our website: https://www.sojourngh.com/rates
                        </p>
                    </Accordion>
                    <Accordion title="Do you offer restaurants?">
                        <p className="font-medium text-dark/80">
                            Please see up to date pricing for our cabin and all add-on
                            services via our website: https://www.sojourngh.com/rates
                        </p>
                    </Accordion>
                </div>
                <div className="w-full md:w-1/2 space-y-4 md:ml-2">
                    <Accordion title="Where is the cabin located?">
                        <p className="font-medium text-dark/80">
                            Please see up to date pricing for our cabin and all add-on
                            services via our website: https://www.sojourngh.com/rates
                        </p>
                    </Accordion>
                    <Accordion title="Do I need to sign up to book?">
                        <p className="font-medium text-dark/80">
                            Please see up to date pricing for our cabin and all add-on
                            services via our website: https://www.sojourngh.com/rates
                        </p>
                    </Accordion>
                    <Accordion title="How many cabins are there?">
                        <p className="font-medium text-dark/80">
                            Please see up to date pricing for our cabin and all add-on
                            services via our website: https://www.sojourngh.com/rates
                        </p>
                    </Accordion>
                    <Accordion title="Are pets allowed?">
                        <p className="font-medium text-dark/80">
                            Please see up to date pricing for our cabin and all add-on
                            services via our website: https://www.sojourngh.com/rates
                        </p>
                    </Accordion>
                </div>
            </div> */}
        </section>
    );
};

export default FaqSection;