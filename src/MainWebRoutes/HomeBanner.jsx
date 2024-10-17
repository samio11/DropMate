import React from 'react';
import SectionTxt from '../Custom_Hooks/SectionTxt';

const HomeBanner = () => {
    return (
        <div className='w-full h-auto md:h-[80vh] flex flex-col md:flex-row justify-center items-center gap-5'>
            {/* Left */}
            <div className='flex-1 flex justify-center items-center'>
                <div>
                    <SectionTxt headTxt={'Fast, Reliable, and Secure Parcel Delivery'} Desc={'Deliver your parcels with confidence anywhere in the city. Our platform offers real-time tracking, quick service, and guaranteed safety for all your deliveries. Book your parcel today and experience seamless delivery with just a few clicks!'}></SectionTxt>
                </div>
            </div>
            {/* Right */}
            <div className='flex-1'>
                <img className='w-full h-auto' src="./Delivary.png" alt="" />
            </div>
        </div>
    );
};

export default HomeBanner;