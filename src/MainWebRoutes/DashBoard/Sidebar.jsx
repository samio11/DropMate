import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { ContextProvider } from '../../AllContext/ContextContainer';
import useRole from '../../Custom_Hooks/useRole';
import { FaBox } from "react-icons/fa";
import { FaHistory } from "react-icons/fa";
import { IoMdPeople } from "react-icons/io";
import MenuItem from './MenuItem';
import { FaList } from "react-icons/fa6";
import { VscPreview } from "react-icons/vsc";
import { FaBoxOpen } from "react-icons/fa";
import { MdDeliveryDining } from "react-icons/md";
import { FaUser } from "react-icons/fa";
import { FaArtstation } from "react-icons/fa6";

const Sidebar = () => {
    const { user } = useContext(ContextProvider)
    const [role] = useRole();
    
    return (
        <div>
            <aside className="flex flex-col w-full h-screen px-4 py-8 overflow-y-auto bg-white border-r rtl:border-r-0 rtl:border-l dark:bg-gray-900 dark:border-gray-700">
                {/* Logo */}
                <NavLink to="/" className="mx-auto">
                    <img
                        className="w-auto h-10 sm:h-7"
                        src='https://static.vecteezy.com/system/resources/previews/023/691/163/non_2x/trendy-design-icon-of-parcel-management-vector.jpg'
                        alt="Logo"
                    />
                </NavLink>

                {/* Profile */}
                <div className="flex flex-col items-center mt-6 -mx-2">
                    <img
                        className="object-cover w-24 h-24 mx-2 rounded-full"
                        src={user?.photoURL}
                        alt="avatar"
                    />
                    <h4 className="mx-2 mt-2 font-medium text-gray-800 dark:text-gray-200">
                        {user?.displayName}
                    </h4>
                    <p className={`mx-2 mt-1 text-sm font-medium
                         ${role === 'User' && 'badge badge-outline'}
                         ${role === 'Admin' && 'badge badge-secondary badge-outline'}
                         ${role === 'DeliveryMan' && 'badge badge-accent badge-outline'}
                          `}>
                        {role}
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col justify-between flex-1 mt-6">
                    <nav>
                        {role === 'User' &&
                            <>
                                <MenuItem label={'Book a Parcel'} address={'book-parcel'} icon={FaBox}></MenuItem>
                                <MenuItem label={'My Parcels'} address={'my-parcels'} icon={FaHistory}></MenuItem>
                                <MenuItem label={'My Profile'} address={'my-profile'} icon={IoMdPeople}></MenuItem>
                            </>
                        }
                        {
                            role === 'DeliveryMan' &&
                            <>
                                <MenuItem label={'My Delivery List'} address={'delivery-list'} icon={FaList}></MenuItem>
                                <MenuItem label={'My Reviews menu'} address={'review'} icon={VscPreview}></MenuItem>
                            </>
                        }
                        {
                            role === 'Admin' &&
                            <>
                                <MenuItem label={'Statistics'} address={'stat'} icon={FaArtstation}></MenuItem>
                                <MenuItem label={'All Parcel'} address={'parcels'} icon={FaBoxOpen}></MenuItem>
                                <MenuItem label={'All Delivery Man'} address={'delivery-man'} icon={MdDeliveryDining}></MenuItem>
                                <MenuItem label={'All User'} address={'user'} icon={FaUser}></MenuItem>
                            </>
                        }
                    </nav>
                </div>
            </aside>
        </div>
    );
};

export default Sidebar;