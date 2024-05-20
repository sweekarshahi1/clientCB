import React from 'react';

const Footer = () => {
    return (
        <div className='fixed-bottom-30 left-0 w-full'>
            <div className='flex flex-col lg:flex-row bg-orange-900 lg:h-23'>
                <div className='lg:w-1/2 ml-5 lg:ml-12 mt-5 lg:mt-10'>
                    <p className='text-white text-2xl font-bold mb-3'>CourtBooking</p>
                    <p className='text-white mb-5 w-96 lg:w-1/2 text-justify'>Let's Play!</p>
                </div>
                <div className='lg:w-1/4 mx-5 lg:ml-48 mt-5 lg:mt-10'>
                    <p className='text-white text-lg font-bold mb-3'>Contact</p>
                    <p className='text-white'>Email: <span className='text-blue-200 hover:text-blue-400 cursor-pointer'>sweekarshahi2@gmail.com</span></p>
                </div>
                <div className='lg:w-1/4 mx-5 lg:mr-10 mt-5 lg:mt-10'>
                </div>
            </div>
        </div>
    );
};

export default Footer;