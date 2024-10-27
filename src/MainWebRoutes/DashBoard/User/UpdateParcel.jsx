import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { axiosSecure } from '../../../Custom_Hooks/useAxiosSecure';

const UpdateParcel = ({ U_data, isOpenUpdateModal, closeUpdateModal }) => {

    const [parcelWeight, setParcelWeight] = useState(U_data.parcelWeightKg); // Initialize with U_data value
    const [productPrice, setProductPrice] = useState(0);

    useEffect(() => {
        // Update price based on parcel weight
        // if (parseInt(parcelWeight) === 0) setProductPrice(0);
        if (parseInt(parcelWeight) === 1) setProductPrice(50);
        if (parseInt(parcelWeight) === 2) setProductPrice(100);
        if (parseInt(parcelWeight) > 2) setProductPrice(150);
    }, [parcelWeight,productPrice]);

    const handleWeightChange = (e) => {
        e.preventDefault();
        setParcelWeight(e.target.value)

    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = e.target;
        const updateParcelType = form.parcelType.value;
        const updateParcelWeight = parseInt(parcelWeight);
        const updateProductPrice = productPrice;
        const updateReceiverName = form.receiverName.value;
        const {
            _id,
            senderName,
            senderEmail,
            senderPhone,
            parcelType,
            parcelWeightKg,
            expectedDeliveryDate,
            totalParcelPrice,
            parcelReceivedAddress,
            booking_date,
            parcelLat,
            parcelLong,
            receiverName,
            receiverPhone,
            booking_status
        } = U_data
        const updatedFullData = {
            _id,
            parcelType: updateParcelType,
            parcelWeightKg: updateParcelWeight,
            totalParcelPrice: updateProductPrice,
            receiverName: updateReceiverName,
            senderName,
            senderEmail,
            senderPhone,
            expectedDeliveryDate,
            parcelReceivedAddress,
            booking_date,
            parcelLat,
            parcelLong,
            receiverPhone,
            booking_status
        }
        try{
            const {data} = await axiosSecure.put('/update_parcel',updatedFullData)
            if(data)
            {
                toast.success(`Parcel Updated Successfully`)
                closeUpdateModal()
            }
        }
        catch(error){
            toast.error(`Parcel Update Failed`)
            console.log(error)
        }
    };

    return (
        <div>
            <Dialog open={isOpenUpdateModal} as="div" className="relative z-10 focus:outline-none" onClose={closeUpdateModal}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                            transition
                            className="w-full max-w-lg rounded-2xl p-6 bg-gradient-to-t from-gray-200 via-gray-100 to-white shadow-xl transform transition-all"
                        >
                            <DialogTitle as="h3" className="text-base font-medium text-black">
                                Update Your Booking
                            </DialogTitle>
                            <form onSubmit={handleSubmit} className="mt-4 space-y-4">
                                {/* Parcel Type */}
                                <div>
                                    <label className="block text-sm text-black">Parcel Type</label>
                                    <input
                                        type="text"
                                        name="parcelType"
                                        defaultValue={U_data.parcelType}
                                        className="w-full rounded-lg border border-gray-600 text-black py-2 px-3 focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                {/* Parcel Weight */}
                                <div>
                                    <label className="text-sm text-black">Parcel Weight (Kg)</label>
                                    <input
                                        type="number"
                                        name="parcelWeight"
                                        defaultValue={U_data.parcelWeightKg}
                                        onChange={handleWeightChange}
                                        className="w-full px-4 py-2 mt-2 border rounded-lg bg-gray-100 text-gray-700"
                                        required
                                    />
                                </div>
                                {/* Receiver Name */}
                                <div>
                                    <label className="block text-sm text-black">Receiver Name</label>
                                    <input
                                        type="text"
                                        name="receiverName"
                                        defaultValue={U_data.receiverName}
                                        className="w-full rounded-lg border border-gray-600 text-black py-2 px-3 focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>
                                {/* Parcel Price */}
                                <div>
                                    <label className="block text-sm text-black">Total Price ($)</label>
                                    <input
                                        type="text"
                                        name="totalParcelPrice"
                                        value={productPrice}
                                        readOnly
                                        className="w-full rounded-lg border border-gray-600 text-black py-2 px-3 focus:ring-2 focus:ring-blue-500"
                                    />
                                </div>

                                {/* Buttons */}
                                <div className="flex justify-end gap-3 mt-6">
                                    <Button
                                        type="button"
                                        className="rounded-lg bg-gray-600 px-4 py-2 text-white hover:bg-gray-500"
                                        onClick={closeUpdateModal}
                                    >
                                        Close
                                    </Button>
                                    <Button
                                        type="submit"
                                        className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-500"
                                    >
                                        Update
                                    </Button>
                                </div>
                            </form>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default UpdateParcel;
