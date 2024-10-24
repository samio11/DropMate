import React from 'react';
import { NavLink } from 'react-router-dom';

const MenuItem = ({ label, address, icon: Icon }) => {
    return (
        <div>
            <NavLink
                to={address}
                className={({ isActive }) =>
                    isActive
                        ? "flex items-center px-4 py-2 text-gray-700 bg-gray-100 rounded-lg dark:bg-gray-800 dark:text-gray-200 font-semibold"
                        : "flex items-center px-4 py-2 text-gray-600 transition-colors duration-300 transform rounded-lg dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 dark:hover:text-gray-200 hover:text-gray-700"
                }
            >
                <Icon className="w-5 h-5" />

                <span className="mx-4 font-medium">{label}</span>
            </NavLink>
        </div>
    );
};

export default MenuItem;