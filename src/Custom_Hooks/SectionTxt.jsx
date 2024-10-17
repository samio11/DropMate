import React from 'react';
import { Link } from 'react-router-dom';

const SectionTxt = ({headTxt,Desc}) => {
    return (
        <div className='space-y-3 text-center'>
            <h2 className='text-sm md:text-3xl italic font-semibold text-[#6C63FF]'>{headTxt}</h2>
            {/* <hr className='w-[70%] mx-auto border-2 border-blue-800' /> */}
            <p className='text-xs md:text-sm text-gray-500 font-semibold'>{Desc}</p>
            <Link className='btn btn-outline btn-primary' to={'/customer-parcel-book'}>Book a Parcel</Link>
        </div>
    );
};

export default SectionTxt;