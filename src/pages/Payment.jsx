import React from 'react';

const Payment = () => {
    const handlePayment = () => {
        
    };

    return (
        <div>
            <h1>Payment Page</h1>
            <p>Enter payment details and click the button below to proceed with payment:</p>
            <button onClick={handlePayment} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                Pay via khalti
            </button>
        </div>
    );
};

export default Payment;
