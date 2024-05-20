import React from 'react';
import { useNavigate } from 'react-router-dom';

const MerchCard = ({ id, name, description, price, image }) => {
    const navigate = useNavigate();

    return (
      <div className="relative m-2 flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md" style={{ width: '280px', height: '400px' }}>
  <a className="relative mx-3 mt-3 flex h-60 overflow-hidden rounded-xl" href="#">
    <img className="w-full h-full object-cover" src={`${image}`} alt="product image" />
  </a>
  <div className="mt-4 px-3 pb-3">
    <a href={`/merch/${id}`}>
      <h5 className="text-xl tracking-tight text-slate-900">{name}</h5>
    </a>
    <div className="mt-2 mb-5 flex items-center justify-between">
      <p>
        <span className="text-3xl font-bold text-slate-900">Rs.{price}</span>
      </p>
    </div>
    <a href={`/merch/${id}`} className="flex items-center justify-center rounded-md bg-slate-900 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-blue-300">
      View Details
    </a>
  </div>
</div>
    
    )
}

export default MerchCard;


