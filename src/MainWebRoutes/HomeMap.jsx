import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';


const HomeMap = () => {
    const userIcon = new L.Icon({
        iconUrl: 'https://cdn-icons-png.flaticon.com/512/149/149060.png',
        iconSize: [40, 40],
        iconAnchor: [20, 40],
        popupAnchor: [0, -40],
    });

    const [position, setPosition] = useState(null);
    useEffect(() => {
        // Get user's current location using Geolocation API
        navigator.geolocation.getCurrentPosition(
            (pos) => {
                setPosition([pos.coords.latitude, pos.coords.longitude]); // set latitude and longitude
            },
            (error) => {
                console.error('Error getting location', error);
            }
        );
    }, []);
    return (
        <div className="w-full h-96 rounded-lg overflow-hidden shadow-lg">
            {position ? (
                <MapContainer center={position} zoom={13} scrollWheelZoom={false} className="h-full w-full">
                    {/* Add OpenStreetMap Tile Layer */}
                    <TileLayer
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    />
                    {/* Add marker for user's location */}
                    <Marker position={position} icon={userIcon}>
                        <Popup>
                            You are here! <br /> Latitude: {position[0]} <br /> Longitude: {position[1]}
                        </Popup>
                    </Marker>
                </MapContainer>
            ) : (
                <p>Fetching your location...</p>
            )}
        </div>
    );
};

export default HomeMap;