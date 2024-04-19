import React from 'react'
import axios from 'axios';
import { BASE_URL } from '../utils/helper';
import { useEffect } from 'react';
import { useState } from 'react';
import MerchCard from './components/MerchCard.jsx';

const Merch = () => {

    const [merch, setmerch] = useState([]);
    const token = localStorage.getItem('token');

    const getAllMerches = async () => {
        try {
            const { data } = await axios.get(`${BASE_URL}/api/v1/admin/fetch-Merch`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            if (data.success) {
                setGrounds(data.grounds);
            }
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllMerches();
    }, []);

    return (
        <div className='flex flex-wrap justify-start gap-14'>
            {grounds?.map((ground) =>
                <div key={ground?._id} className="ml-10 mt-5">
                    <MerchCard
                        id={ground?._id}
                        name={ground?.ground_name}
                        location={ground.location}
                        price={ground.price}
                        image={ground?.images[0]}
                    />
                </div>
            )}
        </div>
    )
}
export default Grounds;