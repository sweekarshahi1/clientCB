import React, { useEffect, useState } from 'react';
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const GoogleMap = ({ lat, long }) => {
    // Convert lat and long from string to integer
    // const parsedLat = parseFloat(lat);
    // const parsedLong = parseFloat(long);
    console.log(lat,long)
    return (
        <MapContainer
            center={[28.7213,85.3575]}
            zoom={20}
            style={{ height: "400px", width: "100%" }}
        >
            <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            />
            <Marker position={[lat,long]} />
        </MapContainer>
    );
};

export default GoogleMap;