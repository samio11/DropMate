import React from 'react';

const HomeFaq = () => {
    return (
        <div>
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="grid gap-10 lg:grid-cols-2 items-center">

                    {/* Accordion Side */}
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
                        <p className="mt-4 text-gray-600">Get answers to some of the most common questions about our service.</p>

                        <div className="mt-8 space-y-4">
                            {/* Accordion 1 */}
                            <div className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-2" defaultChecked />
                                <div className="collapse-title text-xl font-medium">
                                    How do I track my parcel?
                                </div>
                                <div className="collapse-content">
                                    <p>To track your parcel, enter your tracking number in the tracking section on our website.</p>
                                </div>
                            </div>

                            {/* Accordion 2 */}
                            <div className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">
                                    What are the delivery options?
                                </div>
                                <div className="collapse-content">
                                    <p>We offer same-day, next-day, and scheduled deliveries depending on your location and preferences.</p>
                                </div>
                            </div>

                            {/* Accordion 3 */}
                            <div className="collapse collapse-arrow bg-base-200">
                                <input type="radio" name="my-accordion-2" />
                                <div className="collapse-title text-xl font-medium">
                                    Can I change my delivery address?
                                </div>
                                <div className="collapse-content">
                                    <p>Yes, you can change your delivery address by contacting our support team or through your account settings.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className="flex justify-center">
                        <img
                            src="https://leap-now.com/wp-content/uploads/2019/04/FAQ-01.gif"
                            alt="FAQ Illustration"
                            className="w-full h-auto rounded-lg shadow-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeFaq;