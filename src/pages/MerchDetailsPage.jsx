import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import MerchDetails from "../components/MerchDetail";
import { BASE_URL } from '../utils/helper';

const MerchDetailsPage = () => {
    const [merchData, setMerchData] = useState(null);
    const [data, setData] = useState(null);
    const { id } = useParams();
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`${BASE_URL}/api/v1/get-merch-id/${id}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`,
                    }
                });
                console.log(response.data); // Logging response data here
                setMerchData(response.data.merch);
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [id, token]);

    console.log("Data:", merchData);

    return (
        <MerchDetails data={merchData} />
    );
}

export default MerchDetailsPage;
