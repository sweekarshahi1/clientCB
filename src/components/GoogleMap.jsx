import React, { useEffect, useState } from 'react';
import GoogleMapReact from 'google-map-react';
import axios from 'axios';
import { BASE_URL } from '../utils/helper';

const GoogleMap = ({ lat, long, name }) => {
    const defaultCenter = {
        center: {
            lat: 27.7159,
            lng: 85.3278
        },
        zoom: 15
    };

    const [apiKey, setApiKey] = useState([]);

   
    const getApiKey = async () => {
        try {
            const { data } = await axios.get(`${BASE_URL}/api/v1/user/api-key`);
            if (data?.success) {
                setApiKey(data?.key);
            }
           
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getApiKey();
    }, []);

    return (
        <div style={{ height: '250px', width: '100%' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: apiKey }}
                defaultCenter={defaultCenter.center}
                defaultZoom={defaultCenter.zoom}
            >
                <div
                    lat={lat}
                    lng={long}
                    text={name}
                />
            </GoogleMapReact>
        </div>
    );
}

export default GoogleMap;
