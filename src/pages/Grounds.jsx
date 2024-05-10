import React, { useEffect, useState } from 'react';
import GroundCard from '../components/GroundCard';
import axios from 'axios';
import { BASE_URL } from '../utils/helper';

const Grounds = () => {
    const [grounds, setGrounds] = useState([]);
    const [sortedData, setSortedData] = useState([]);
    const token = localStorage.getItem('token');

    const getAllGrounds = async () => {
        try {
            const { data } = await axios.get(`${BASE_URL}/api/v1/admin/fetch-grounds`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            console.log("data is", data);
            if (data.success) {
                setGrounds(data.grounds);
            }
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getAllGrounds();
    }, []);

    useEffect(() => {
        // Sort the grounds data based on the shift (Morning first, then Evening)
        const sortedGrounds = grounds.slice().sort((a, b) => {
            if (a.shift === "Morning" && b.shift === "Evening") return -1;
            if (a.shift === "Evening" && b.shift === "Morning") return 1;
            return 0;
        });

        // Update the state with the sorted data
        setSortedData(sortedGrounds);
    }, [grounds]);

    console.log(sortedData)

    return (
        <div className='flex flex-wrap justify-start gap-14'>
            {sortedData.map((ground) =>
                <div key={ground?._id} className="ml-10 mt-5">
                    <GroundCard
                        id={ground?._id}
                        name={ground?.ground_name}
                        location={ground.location}
                        price={ground.price}
                        image={ground?.images[0]}
                    />
                </div>
            )}
        </div>
    );
};

export default Grounds;
