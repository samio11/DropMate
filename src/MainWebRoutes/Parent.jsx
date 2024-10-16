import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Outlet } from 'react-router-dom';

const Parent = () => {
    return (
        <div>
            {/* navbar */}
            <div>
                <Navbar></Navbar>
            </div>
            {/* Children */}
            <div className='min-h-[calc(100vh-120px)]'>
                <Outlet></Outlet>
            </div>
            {/* Footer */}
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default Parent;