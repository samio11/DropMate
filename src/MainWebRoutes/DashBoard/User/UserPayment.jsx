import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { axiosSecure } from '../../../Custom_Hooks/useAxiosSecure';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';


const UserPayment = ({ paymentData, isOpenPaymentModal, closePaymentModal }) => {
    const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT);
    // console.log(paymentData)
    return (
        <div>
            <Dialog open={isOpenPaymentModal} as="div" className="relative z-10 focus:outline-none" onClose={closePaymentModal}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto bg-black/50">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl bg-gray-900 p-6 backdrop-blur-lg shadow-xl duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >
                            <DialogTitle as="h3" className="text-lg font-semibold text-white">
                                Payment for Booking Parcel
                            </DialogTitle>

                            <div className="w-full my-3 text-center text-white">
                                <p className="font-semibold italic">Parcel type: <span className="text-gray-400 text-sm">{paymentData.parcelType}</span></p>
                                <p className="font-semibold italic">Receiver Name: <span className="text-gray-400 text-sm">{paymentData.receiverName}</span></p>
                                <p className="font-semibold italic">Booked KG: <span className="text-gray-400 text-sm">{paymentData.parcelWeightKg}</span></p>
                                <p className="font-semibold italic">Pay: <span className="text-gray-400 text-sm">{paymentData.totalParcelPrice} TK</span></p>
                            </div>

                            <Elements stripe={stripePromise}>
                                <CheckoutForm paymentData={paymentData} closeModal={closePaymentModal} />
                            </Elements>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default UserPayment;