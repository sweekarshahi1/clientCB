import React, { useEffect, useState} from 'react';
import { useNavigate } from 'react-router-dom';
import GroundCard from '../components/GroundCard';
import ImageSlider from '../components/ImageSlider';
import '../custom.css';
import axios from 'axios';
import { BASE_URL } from '../utils/helper';

const Landing = () => {

    const [grounds, setGrounds] = useState([]);

    const getAllGrounds = async () => {
        try {
            const { data } = await axios.get(`${BASE_URL}/api/v1/user/grounds`);
            console.log("data is", data);
            if (data.success) {
                setGrounds(data.grounds);
            }
            console.log(grounds);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        getAllGrounds();
    }, []);
    console.log(grounds);

    const [scrollPosition, setScrollPosition] = useState(0);

    const handleScroll = (direction) => {
        const container = document.getElementById('groundContainer');
        const cardWidth = 350; 
        const totalWidth = grounds.length * cardWidth;
        const maxScroll = totalWidth - container.offsetWidth;

        if (direction === 'left') {
            setScrollPosition(Math.max(scrollPosition - container.offsetWidth, 0));
        } else if (direction === 'right') {
            setScrollPosition(Math.min(scrollPosition + container.offsetWidth, maxScroll));
        }
    };

    return (

        <div className=" w-full flex-col md:flex-row ">
        <div className="hero flex flex-col md:flex content-row md:gap-">
            <div className="relative">
                <ImageSlider />
                <img
                    className="flex w-[2200px] h-[1000px] object-cover rounded-lg shadow"
                    src="./src/images/LBJ.jpg"
                    alt="Basketball players in action on a court"
                />
                {/* <div className="flex w-full absolute z-10 justify-between mt-40">
                    <button onClick={() => handleScroll('left')} className=" text-white m-1 rounded-full">
                        <img className='w-10' src="../src/images/la.svg" alt="left arrow" />
                    </button>
                    <button onClick={() => handleScroll('right')} className="text-white m-1 rounded-full">
                        <img className='w-10' src="../src/images/ra.svg" alt="right arrow" />
                    </button>
                </div> */}
                {/* Grounds Section */}
                {/* <div id="groundContainer" className="flex flex-col mx-4 sm:mx-16 my-8 overflow-x-auto relative">
                    {grounds?.map((ground) =>
                        <div key={ground?._id} className="mb-5">
                            <GroundCard
                                id={ground?._id}
                                name={ground?.ground_name}
                                location={ground.location}
                                price={ground.price}
                                image={ground?.images[0]}
                            />
                        </div>
                    )}
                </div> */}
            </div>

            <div className="w-full mt-8 md:mt-5 md:w-1/2 mx-auto flex items-center gap-8">
                <img
                    className="flex w-[700px] h-[300px] object-cover rounded-lg shadow"
                    src="./src/images/LBJ.jpg"
                    alt="Basketball players in action on a court"
                />
                <div className="hero-text flex flex-col justify-center items-center md:items-start py-4 md:py-0">
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Book Your Perfect Court</h2>
                    <p className="text-gray-600 text-[18px] mb-4">
                        Find the ideal court for your next game, practice session, or tournament. We offer a variety of locations, surfaces, and amenities to meet your needs.
                    </p>
                    <a
                        className="px-4 py-2 bg-blue-500 text-white font-bold rounded-md hover:bg-blue-700 transition-all ease-in-out duration-300"  onClick={() => handleNavigation('/grounds')}
                   > browseCourt
                    </a>
                </div>
            </div>
                <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center mt-6 ">Why Choose Hoop City?</h2>
                <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-4">
                    <article className="feature flex flex-col items-center p-4 rounded-lg shadow-md bg-white">
                        <img className="w-12 h-12 mx-auto mb-2" src="./src/images/versus 1.jpg" alt="Calendar icon" />
                        <h3 className="text-lg font-bold text-gray-800 mb-2">Convenient Booking</h3>
                        <p className="text-gray-600 text-base">Reserve your court online or through our mobile app in just minutes.</p>
                    </article>
                    <article className="feature flex flex-col items-center p-4 rounded-lg shadow-md bg-white">
                        <img className="w-12 h-12 mx-auto mb-2" src="./src/images/versus 2.jpg" alt="Basketball hoop icon" />
                        <h3 className="text-lg font-bold text-gray-800 mb-2">Top-Notch Courts</h3>
                        <p className="text-gray-600 text-base">Experience well-maintained courts with high-quality surfaces and equipment.</p>
                    </article>
                    <article className="text-4xl feature flex flex-col items-center p-4 rounded-lg shadow-md bg-white">
                        <img className="w-12 h-12 mx-auto mb-2" src="./src/images/versus 3.jpg" alt="Group of people cheering icon" />
                        <h3 className="text-lg font-bold text-gray-800 mb-2">Thriving Community</h3>
                        <p className="text-gray-600 text-base">Connect with fellow basketball enthusiasts in your area.</p>
                    </article>
                </div>
                </div>
                </div>
    );
};

export default Landing;
