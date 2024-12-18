import React from 'react';
import Sidebar from './Sidebar';
import { Outlet } from 'react-router-dom';


const Dashboard = () => {
    return (
        <div className='flex justify-center items-center'>
            {/* Sidebar */}
            <div className='w-[25%] md:w-64'>
                <Sidebar></Sidebar>
            </div>
            {/* Main Content */}
            <div className='w-[calc(100vw-30%)] md: flex-1 h-screen'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;