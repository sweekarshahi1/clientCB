import React from 'react'
import axios from 'axios';
import { BASE_URL } from '../utils/helper';
import { useEffect } from 'react';
import { useState } from 'react';
import MerchCard from '../components/MerchCard';

const Merch = () => {

    const [merch, setmerch] = useState([]);
    const token = localStorage.getItem('token');

    const getAllMerches = async () => {
        try {
            const { data } = await axios.get(`${BASE_URL}/api/v1/get-all-merch`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            if (data.success) {
                setmerch(data.merch);
            }
            console.log(data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllMerches();
    }, []);


    return (
        <div className='flex flex-wrap justify-start gap-14'>
            {merch?.map((merch) =>
                <div key={merch?._id} className="ml-10 mt-5">
                    <MerchCard
                        id={merch?._id}
                        name={merch?.productName}
                        price={merch.price}
                        image={merch?.image}
                        description={merch?.description}
                    />
                </div>
            )}
        </div>
    )
}
export default Merch;