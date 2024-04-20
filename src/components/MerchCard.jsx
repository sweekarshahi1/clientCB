import React from 'react';
import { useNavigate } from 'react-router-dom';

const MerchCard = ({ id, name, description, price, image }) => {
    const navigate = useNavigate();

    console.log(image)

    return (
        <div className="bg-gray-700 w-80 p-4 shadow-md rounded-sm">
            <img src={`${image}`} alt={name} className="w-full h-40 object-cover mb-4" />
            <h3 className="text-xl text-white font-bold mb-2">{name}</h3>
            <p className="text-white mb-2 font-semibold">{description}</p>
            <p className="text-white mb-2 font-bold">₹ <span className='font-normal'>{price}</span></p>
            <button
                onClick={() => {
                    navigate(`/merch/${id}`);
                }}
                className="bg-gray-900 text-white px-4 py-2 rounded-lg">
                View
            </button>
        </div>
    );
};

export default MerchCard;


