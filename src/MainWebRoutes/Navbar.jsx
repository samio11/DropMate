
import { useContext } from "react";
import { IoMdNotifications } from "react-icons/io";
import { ContextProvider } from "../AllContext/ContextContainer";
import { NavLink, useNavigate } from "react-router-dom";
import { axiosSecure } from "../Custom_Hooks/useAxiosSecure";
import toast from "react-hot-toast";
import useRole from "../Custom_Hooks/useRole";
const Navbar = () => {
    const { user, logOutUser } = useContext(ContextProvider)
    const navigate = useNavigate();
    const [role] = useRole()
    const navLinks = <>
        <li>
            <NavLink
                to="/"
                className={({ isActive, isPending }) =>
                    isPending
                        ? "text-gray-500" // Style for pending state
                        : isActive
                            ? "text-white bg-blue-600 font-semibold px-4 py-2 rounded-lg shadow-lg" // Style for active state
                            : "text-gray-700 hover:text-blue-600 px-4 py-2 transition-colors duration-300" // Default style
                }
            >
                Home
            </NavLink>
        </li>
        <li>
            <NavLink
                to="/dashboard"
                className={({ isActive, isPending }) =>
                    isPending
                        ? "text-gray-500" // Style for pending state
                        : isActive
                            ? "text-white bg-blue-600 font-semibold px-4 py-2 rounded-lg shadow-lg" // Style for active state
                            : "text-gray-700 hover:text-blue-600 px-4 py-2 transition-colors duration-300" // Default style
                }
            >
                DashBoard
            </NavLink>
        </li>
    </>
    const handleLogout = async () => {
        await logOutUser();
        try {
            const { data } = await axiosSecure(`/remove_token`)
            if (data) {
                toast.success('Successfully Logout')
                navigate('/')
            }
        }
        catch (error) {
            toast.error('Error while Logout')
            console.log(error)
        }
    }
    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="flex-1">
                    <a className="btn btn-ghost text-blue-500 text-xl">DropMate</a>
                </div>
                <div className="flex-none">
                    <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
                            <div className="indicator">
                                <IoMdNotifications className='w-[30px] h-[30px]'></IoMdNotifications>
                                <span className="badge badge-sm indicator-item">8</span>
                            </div>
                        </div>
                        <div
                            tabIndex={0}
                            className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
                            <div className="card-body">
                                <span className="text-lg font-bold">8 Items</span>
                                <span className="text-info">Subtotal: $999</span>
                                <div className="card-actions">
                                    <button className="btn btn-primary btn-block">View cart</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown dropdown-end ml-2">
                        {user ? <div>
                            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                                <div className="w-10 rounded-full">
                                    <img
                                        alt={user?.displayName}
                                        src={user?.photoURL}
                                        referrerPolicy="no-referrer"
                                    />

                                </div>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow space-y-3">
                                <li>
                                    <a className="justify-between italic text-sm font-semibold">
                                        {user?.displayName}
                                        <span className="badge badge-outline text-xs text-blue-500 font-bold">{role || 'User'}</span>
                                    </a>
                                </li>
                                {navLinks}
                                <li>
                                    <button onClick={handleLogout} className="btn btn-outline btn-error">Logout</button>
                                </li>
                            </ul>
                        </div> : <div>
                            <button onClick={() => navigate('/login')} className="btn btn-outline btn-primary">Sign In</button>
                        </div>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;