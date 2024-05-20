import React, { useEffect, useState} from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
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
    const groundNavigate = Navigate('/grounds')

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
                        <div className="hero flex flex-col md:flex content-row md:gap-5">
                            <div className="relative">
                            </div>
                            <ImageSlider />
                            <div className="w-full h-full flex justify-center items-center">
                                <div className="w-full max-w-6xl mx-auto flex flex-col items-center gap-8">
                                    <h1 className="text-7xl font-extrabold text-gray-900 mb-4">Book Your Perfect Court</h1>
                                        <p className="text-gray-700 mb-4 text-4xl">
                                            Find the ideal court for your next game, practice session, or tournament. We offer a variety of locations, surfaces, and amenities to meet your needs.Find the ideal court for your next game, practice session, or tournament. We offer a variety of locations, surfaces, and amenities to meet your needs.
                                        </p>
                                        <Link to = "/grounds">
                                            <div className='px-10 py-3 bg-blue-700 text-white font-bold rounded-md hover:bg-blue-700 transition-all ease-in-out duration-300'>
                                                Browse Ground
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                                <div  className='border border-y-2 py-8 shadow-sm'>
                                <div className="flex gap-5 w-[90%] mx-auto">
                                    <img
                                        className="w-[500px] h-[500px] object-cover rounded-lg shadow "
                                            src="./src/images/LBJ2.jpg"
                                        alt="Basketball players in action on a court"
                                    />
                                    <img
                                        className="w-[500px] h-[500px] object-cover rounded-lg shadow"
                                        src="./src/images/LBJ.jpg"
                                        alt="Basketball players in action on a court"
                                    />
                                    <img
                                        className="w-[500px] h-[500px] object-cover rounded-lg shadow"
                                    src="./src/images/LBJ3.jpg"
                                        alt="Basketball players in action on a court"
                                    />
                                    <img
                                        className="w-[500px] h-[500px] object-cover rounded-lg shadow"
                                        src="./src/images/LBJ$.jpg"
                                        alt="Basketball players in action on a court"
                                    />
                                </div>
                                </div>
                            <h2 className="text-6xl font-bold text-gray-800 mb-4 text-center mt-6 ">Why Choose Hoop City?</h2>
                            <div className="features-grid grid grid-cols-1 md:grid-cols-3 gap-8">
                                <article className="feature flex flex-col items-center p-10 rounded-lg shadow-md bg-white">
                                    <img className="w-28 h-28 mx-auto mb-6" src="./src/images/versus 1.jpg" alt="Calendar icon" />
                                    <h3 className="text-3xl font-bold text-gray-800 mb-6">Convenient Booking</h3>
                                    <p className="text-gray-600 text-xl mx-auto">Reserve your court online or through our mobile app in just minutes.</p>
                                </article>
                                <article className="feature flex flex-col items-center p-10 rounded-lg shadow-md bg-white">
                                    <img className="w-28 h-28 mx-auto mb-6" src="./src/images/versus 2.jpg" alt="Basketball hoop icon" />
                                    <h3 className="text-3xl font-bold text-gray-800 mb-6">Top-Notch Courts</h3>
                                    <p className="text-gray-600 text-xl mx-auto">Experience well-maintained courts with high-quality surfaces and equipment.</p>
                                </article>
                                <article className="feature flex flex-col items-center p-10 rounded-lg shadow-md bg-white">
                                    <img className="w-28 h-28 mx-auto mb-6" src="./src/images/versus 3.jpg" alt="Group of people cheering icon" />
                                    <h3 className="text-3xl font-bold text-gray-800 mb-6">Thriving Community</h3>
                                    <p className="text-gray-600 text-xl mx-auto">Connect with fellow basketball enthusiasts in your area.</p>
                                </article>
                            </div>
                        
                            
                            <details open class="m-10 max-w-md w-screen overflow-hidden rounded-lg border border-gray-200 open:shadow-lg text-gray-700">
                                <summary class="flex cursor-pointer select-none items-center justify-between bg-gray-100 px-5 py-3 lg:hidden">
                                <span class="text-sm font-medium"> Toggle Filters </span>

                                <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                                </summary>

                                <form action="" class="flex border-t border-gray-200 lg:border-t-0">
                                <fieldset class="w-full">
                                    <legend class="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">Type</legend>

                                    <div class="space-y-2 px-5 py-6">
                                    <div class="flex items-center">
                                        <input id="New" type="checkbox" name="type[New]" class="h-5 w-5 rounded border-gray-300" checked />

                                        <label for="New" class="ml-3 text-sm font-medium"> New </label>
                                    </div>

                                    <div class="flex items-center">
                                        <input id="Used" type="checkbox" name="type[Used]" class="h-5 w-5 rounded border-gray-300" />

                                        <label for="Used" class="ml-3 text-sm font-medium"> Used </label>
                                    </div>

                                    <div class="flex items-center">
                                        <input id="Branded" type="checkbox" name="type[Branded]" class="h-5 w-5 rounded border-gray-300" />

                                        <label for="Branded" class="ml-3 text-sm font-medium"> Branded </label>
                                    </div>

                                    <div class="pt-2">
                                        <button type="button" class="text-xs text-gray-500 underline">Reset Type</button>
                                    </div>
                                    </div>
                                </fieldset>

                                <fieldset class="w-full">
                                    <legend class="block w-full bg-gray-50 px-5 py-3 text-xs font-medium">Price</legend>

                                    <div class="space-y-2 px-5 py-6">
                                    <div class="flex items-center">
                                        <input id="300+" type="radio" name="Price" value="300+" class="h-5 w-5 rounded border-gray-300" />

                                        <label for="300+" class="ml-3 text-sm font-medium"> 300+ </label>
                                    </div>

                                    <div class="flex items-center">
                                        <input id="600+" type="radio" name="Price" value="600+" class="h-5 w-5 rounded border-gray-300" />

                                        <label for="600+" class="ml-3 text-sm font-medium"> 600+ </label>
                                    </div>

                                    <div class="flex items-center">
                                        <input id="1500+" type="radio" name="Price" value="1500+" class="h-5 w-5 rounded border-gray-300" checked />

                                        <label for="1500+" class="ml-3 text-sm font-medium"> 1500+ </label>
                                    </div>

                                    <div class="pt-2">
                                        <button type="button" class="text-xs text-gray-500 underline">Reset Price</button>
                                    </div>
                                    </div>
                                </fieldset>
                                </form>
                                <div class="">
                                <div class="flex justify-between border-t border-gray-200 px-5 py-3">
                                    <button name="reset" type="button" class="rounded text-xs font-medium text-gray-600 underline">Reset All</button>

                                    <button name="commit" type="button" class="rounded bg-blue-600 px-5 py-3 text-xs font-medium text-white active:scale-95">Apply Filters</button>
                                </div>
                                </div>
                            </details>
                        </div>
    );
};

export default Landing;
