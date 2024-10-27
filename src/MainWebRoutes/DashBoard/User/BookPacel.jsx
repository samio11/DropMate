import React, { useContext, useEffect, useState } from 'react';
import HomeSection from '../../../Custom_Hooks/HomeSection';
import { ContextProvider } from '../../../AllContext/ContextContainer';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { axiosNormal } from '../../../Custom_Hooks/useAxios';
import toast from 'react-hot-toast';


const BookPacel = () => {
    const { user } = useContext(ContextProvider)
    const [parcelValue, setParcelValue] = useState('')
    const [parcelWeight, setParcelWeight] = useState(0);
    const [address, setAddress] = useState('');
    const [coordinates, setCoordinates] = useState({ lat: '23.8103', lon: '90.4125' }); // Default coordinates for Dhaka
    const [mapPosition, setMapPosition] = useState([23.8103, 90.4125]); // Default position for Dhaka
    const [startDate, setStartDate] = useState(new Date());
    const [productPrice, setProductPrice] = useState(0);
    

    useEffect(() => {
        if (parseInt(parcelWeight) === 1) setProductPrice(50)
        if (parseInt(parcelWeight) === 2) setProductPrice(100)
        if (parseInt(parcelWeight) > 2) setProductPrice(150)
    }, [parcelWeight])

    // Create a custom marker icon
    const icon = new L.Icon({
        iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
        iconSize: [25, 41],
        iconAnchor: [12, 41],
        popupAnchor: [1, -34],
        shadowSize: [41, 41],
    });

    // Get user's current location (optional)
    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (position) => {
                    const { latitude, longitude } = position.coords;
                    setMapPosition([latitude, longitude]);
                    setCoordinates({ lat: latitude, lon: longitude });
                },
                (error) => {
                    console.error("Geolocation not supported or permission denied", error);
                }
            );
        }
    }, []);

    // Handle typing in the address input field
    const handleAddressChange = async (e) => {
        setAddress(e.target.value);

        if (e.target.value.length > 3) {
            const res = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${e.target.value}`);
            const data = await res.json();

            if (data.length > 0) {
                const lat = parseFloat(data[0].lat);
                const lon = parseFloat(data[0].lon);

                setCoordinates({ lat, lon });
                setMapPosition([lat, lon]);
            }
        }
    };

    // Custom hook to handle map click events for updating coordinates and address
    const LocationMarker = () => {
        const map = useMapEvents({
            click(e) {
                const { lat, lng } = e.latlng;
                setCoordinates({ lat, lon: lng });
                setMapPosition([lat, lng]);

                // Reverse geocode to get address from coordinates
                fetch(`https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`)
                    .then((res) => res.json())
                    .then((data) => {
                        if (data && data.display_name) {
                            setAddress(data.display_name); // Set the address input to the clicked location's address
                        }
                    });
            }
        });

        return coordinates.lat && coordinates.lon ? <Marker position={[coordinates.lat, coordinates.lon]} icon={icon} /> : null;
    };

    const handleWeightChange = (e) => {
        setParcelWeight(e.target.value);
    };

    // Main Data
    const handleBookData = async (e) => {
        e.preventDefault();
        const form = e.target;
        const senderName = form.name.value;
        const senderEmail = form.email.value;
        const senderPhone = form.phoneNumber.value;
        const parcelType = parcelValue;
        const parcelWeightKg = parcelWeight;
        const expectedDeliveryDate = startDate;
        const totalParcelPrice = form.price.value;
        const parcelReceivedAddress = form.address.value;
        const parcelLat = parseFloat(form.latitude.value);
        const parcelLong = parseFloat(form.longitude.value);
        const receiverName = form.R_name.value;
        const receiverPhone = form.R_phoneNumber.value;
        const totalData = {
            senderName,
            senderEmail,
            senderPhone,
            parcelType,
            parcelWeightKg,
            expectedDeliveryDate,
            totalParcelPrice,
            parcelReceivedAddress,
            booking_date : new Date(),
            parcelLat,
            parcelLong,
            receiverName,
            receiverPhone,
            booking_status: 'pending'
        }
        console.log(totalData)
        const { data } = await axiosNormal.post('/booking', totalData);
        if (data) {
            toast.success('Parcel successfully Saved')
            form.reset();
        }
    }
    return (
        <div>
            <div className='my-3'>
                <HomeSection headTxt={'Book Your Parcel'} Desc={'Enter the parcel details to book your delivery quickly and easily.'}></HomeSection>
                <form onSubmit={handleBookData} className='w-full flex justify-center items-center gap-4 my-3'>
                    {/* left part */}
                    <div className='flex-1 ml-3'>

                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300">Name</label>
                            <input
                                type="text"
                                value={user?.displayName}
                                name='name'
                                readOnly
                                className="w-full px-4 py-2 mt-2 border rounded-lg dark:bg-gray-700 dark:text-gray-200"
                            />
                        </div>


                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300">Email</label>
                            <input
                                type="email"
                                value={user.email}
                                name='email'
                                readOnly
                                className="w-full px-4 py-2 mt-2 border rounded-lg dark:bg-gray-700 dark:text-gray-200"
                            />
                        </div>



                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300">Phone Number</label>
                            <input
                                type="text"
                                name="phoneNumber"
                                placeholder='+880...'
                                className="w-full px-4 py-2 mt-2 border rounded-lg dark:bg-gray-700 dark:text-gray-200"
                                required
                            />
                        </div>

                        {/* Percel  */}
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300">Parcel Type</label>
                            <select
                                name="parcelType"
                                value={parcelValue} // controlled value
                                onChange={(e) => setParcelValue(e.target.value)} // update state
                                className="w-full px-4 py-2 mt-2 border rounded-lg dark:bg-gray-700 dark:text-gray-200"
                                required
                            >
                                <option value="" disabled>Select Parcel Type</option>
                                <option value="Documents">Documents</option>
                                <option value="Electronics">Electronics</option>
                                <option value="Clothing">Clothing</option>
                                <option value="Perishables">Perishables</option>
                                <option value="Fragile Items">Fragile Items</option>
                                <option value="Books">Books</option>
                                <option value="Furniture">Furniture</option>
                                <option value="Food Items">Food Items</option>
                                <option value="Household Goods">Household Goods</option>
                                <option value="Medicine">Medicine</option>
                                <option value="Others">Others</option>
                            </select>
                        </div>


                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300">Parcel Weight (kg)</label>
                            <input
                                type="number"
                                name="parcelWeight"
                                value={parcelWeight}
                                onChange={handleWeightChange}
                                min="0"
                                className="w-full px-4 py-2 mt-2 border rounded-lg dark:bg-gray-700 dark:text-gray-200"
                                required
                            />
                        </div>

                        <div className='mb-4 space-y-3'>
                            <p>Requested Delivery Date</p>
                            <DatePicker
                                showIcon
                                selected={startDate}
                                onChange={(date) => setStartDate(date)}
                            />
                        </div>

                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300">Total Price</label>
                            <input
                                type="text"
                                value={productPrice}
                                name='price'
                                readOnly
                                className="w-full px-4 py-2 mt-2 border rounded-lg dark:bg-gray-700 dark:text-gray-200"
                            />
                        </div>

                        <div className='flex w-full justify-center items-center my-4'>
                            <button className='btn btn-outline btn-wide'>Book Parcel</button>
                        </div>


                    </div>
                    {/* Right Part  */}
                    <div className='border-l-4 border-indigo-500 flex-1 pl-3'>
                        {/* For Map */}
                        <div>

                            <div>
                                {/* Address Input Field */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 dark:text-gray-300">Parcel Delivery Address</label>
                                    <input
                                        type="text"
                                        name="address"
                                        value={address}
                                        onChange={handleAddressChange}
                                        className="w-full px-4 py-2 mt-2 border rounded-lg dark:bg-gray-700 dark:text-gray-200"
                                        placeholder="Enter delivery address"
                                    />
                                </div>

                                {/* Latitude and Longitude Fields (Read-Only) */}
                                <div className="mb-4">
                                    <label className="block text-gray-700 dark:text-gray-300">Latitude</label>
                                    <input
                                        type="text"
                                        name="latitude"
                                        value={coordinates.lat}
                                        readOnly
                                        className="w-full px-4 py-2 mt-2 border rounded-lg dark:bg-gray-700 dark:text-gray-200"
                                    />
                                </div>

                                <div className="mb-4">
                                    <label className="block text-gray-700 dark:text-gray-300">Longitude</label>
                                    <input
                                        type="text"
                                        name="longitude"
                                        value={coordinates.lon}
                                        readOnly
                                        className="w-full px-4 py-2 mt-2 border rounded-lg dark:bg-gray-700 dark:text-gray-200"
                                    />
                                </div>

                                {/* Leaflet Map */}
                                <div className="mb-4 h-64">
                                    <MapContainer center={mapPosition} zoom={13} className="h-full w-full">
                                        <TileLayer
                                            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                                            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                                        />
                                        <LocationMarker />
                                    </MapContainer>
                                </div>
                            </div>

                        </div>

                        {/* Receiver Name */}
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300">Receiver’s Name</label>
                            <input
                                type="text"
                                placeholder='Receiver Name'
                                name='R_name'

                                className="w-full px-4 py-2 mt-2 border rounded-lg dark:bg-gray-700 dark:text-gray-200"
                            />
                        </div>

                        {/* Receiver Phone */}
                        <div className="mb-4">
                            <label className="block text-gray-700 dark:text-gray-300">Receiver Phone Number</label>
                            <input
                                type="text"
                                name="R_phoneNumber"
                                placeholder='+880...'
                                className="w-full px-4 py-2 mt-2 border rounded-lg dark:bg-gray-700 dark:text-gray-200"
                                required
                            />
                        </div>






                    </div>
                </form>
            </div>
        </div>
    );
};

export default BookPacel;