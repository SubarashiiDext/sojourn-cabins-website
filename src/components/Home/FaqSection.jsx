import Accordion from "./Accordion";

const FaqSection = () => {
    return (
        <section className="w-full h-max px-24 flex flex-col items-start overflow-hidden">
            <h2 className="text-xl font-semibold text-black/80 capitalize">
                frequently asked questions
            </h2>
            <div className="w-full flex  justify-between mt-6">
                <div className="w-1/2 space-y-4 mr-2">
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
                    <Accordion title="What time are check in and check out?">
                        <p className="font-medium text-dark/80">
                            Please see up to date pricing for our cabin and all add-on
                            services via our website: https://www.sojourngh.com/rates
                        </p>
                    </Accordion>
                    <Accordion title="Does Sojourn Cabins have a restaurant?">
                        <p className="font-medium text-dark/80">
                            Please see up to date pricing for our cabin and all add-on
                            services via our website: https://www.sojourngh.com/rates
                        </p>
                    </Accordion>
                </div>
                <div className="w-1/2 space-y-4 ml-2">
                    <Accordion title="Where is the cabin located?">
                        <p className="font-medium text-dark/80">
                            Please see up to date pricing for our cabin and all add-on
                            services via our website: https://www.sojourngh.com/rates
                        </p>
                    </Accordion>
                    <Accordion title="Are customers able to visit the cabin without a booking?">
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
            </div>
        </section>
    );
};

export default FaqSection;