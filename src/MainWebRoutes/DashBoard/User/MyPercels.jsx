import React, { useContext, useEffect, useState } from 'react';
import HomeSection from '../../../Custom_Hooks/HomeSection';
import { ContextProvider } from '../../../AllContext/ContextContainer';
import { axiosNormal } from '../../../Custom_Hooks/useAxios';
import { useQuery } from '@tanstack/react-query';
import useAxiosSecure, { axiosSecure } from '../../../Custom_Hooks/useAxiosSecure';
import { GrUpdate } from "react-icons/gr";
import { MdDelete } from "react-icons/md";
import { MdOutlineRateReview } from "react-icons/md";
import { FaMoneyCheckDollar } from "react-icons/fa6";
import UpdateParcel from './UpdateParcel';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'
import axios from 'axios';

const MyPercels = () => {
    const { user } = useContext(ContextProvider)
    let [isOpenUpdateModal, setIsOpenUpdateModal] = useState(false)
    let [upDateData, setUpdateData] = useState({});
    const axiosSecure = useAxiosSecure();
    const { data: bookedData = [], isLoading, refetch } = useQuery({
        queryKey: ['booked'],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/booking/${user?.email}`)
            return data
        }
    })

    const closeUpdateModal = () => {
        setIsOpenUpdateModal(false)
    }
    const passUpdateData = e => {
        setUpdateData(e)
        setIsOpenUpdateModal(true)
    }

    const handleDelete = async (deleteId) => {
        console.log(deleteId)
        Swal.fire({
            title: "Are you sure?",
            text: "It will be deleted!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                try {
                    axios.delete(`${import.meta.env.VITE_SERVER}/delete_booking/${deleteId}`)


                    Swal.fire({
                        title: "Deleted!",
                        text: "Your booking has been deleted.",
                        icon: "success"
                    });
                    refetch();

                }
                catch (error) {
                    Swal.fire({
                        title: "Error",
                        text: "Something went wrong.Cant delete",
                        icon: "error"
                    });
                    console.log(error)
                }
            }
        });
    }



    console.log(bookedData)
    return (
        <div className='my-3'>
            <HomeSection headTxt={'My Parcels'} Desc={'Manage and track your booked parcels easily.'}></HomeSection>
            <div className='my-3'>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Parcel Type,</th>
                                <th>Requested Delivery Date</th>
                                <th>Approximate Delivery Date</th>
                                <th>Delivery Men ID</th>
                                <th>Booking Status</th>
                                <th>Update Booking</th>
                                <th>Delete Booking</th>
                                <th>Review Delivery Men</th>
                                <th>Payment</th>
                            </tr>
                        </thead>

                        {
                            bookedData.length > 0 ? bookedData.map((x, index) => {
                                return (
                                    <tbody key={x._id}>
                                        <tr >
                                            <th>{index + 1}</th>
                                            <td>{x.parcelType}</td>
                                            <td>{new Date(x.booking_date).toISOString().split("T")[0]}</td>
                                            <td>{new Date(x.expectedDeliveryDate).toISOString().split("T")[0]}</td>
                                            <td>{x?.assignDelivery || 'Not Assigned Yet'}</td>
                                            <td className={`badge
                                            ${x.booking_status === "pending" && 'badge-primary'}
                                            ${x.booking_status === "on the way" && 'badge-warning'}
                                            ${x.booking_status === "success" && 'badge-success'}
                                            badge-outline`}>{x.booking_status}</td>


                                            <td onClick={() => passUpdateData(x)} className='text-center'><button className='btn btn-outline btn-sm'><GrUpdate /></button></td>


                                            <td onClick={() => handleDelete(x._id)} className='text-center'><button className='btn btn-outline btn-sm'><MdDelete /></button></td>


                                            <td className='text-center'><button className='btn btn-outline btn-sm'><MdOutlineRateReview /></button></td>


                                            <td className='text-center'><button className='btn btn-outline btn-sm'><FaMoneyCheckDollar /></button></td>


                                            {/* All jsx Here */}
                                            <UpdateParcel U_data={upDateData} isOpenUpdateModal={isOpenUpdateModal} closeUpdateModal={closeUpdateModal}></UpdateParcel>
                                        </tr>
                                    </tbody>
                                )
                            }) : <div className='my-7 flex justify-center items-center'>
                                <div className='text-center w-full'>
                                    <h3 className='text-3xl italic font-semibold'>No Parcel Booked Yet</h3>
                                    <p className='text-xs italic font-semibold'>Please book a parcel to see your bookings.</p>
                                </div>
                            </div>
                        }


                    </table>
                </div>

            </div>
        </div>
    );
};

export default MyPercels;