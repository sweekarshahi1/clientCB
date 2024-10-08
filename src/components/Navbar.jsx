import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../redux/store';
import toast from 'react-hot-toast';

const Navbar = () => {

	//global state
	let isLogin = useSelector((state) => state.isLogin);
	isLogin = isLogin || localStorage.getItem('userId');

	let user = localStorage.getItem("username");

	const [isOpen, setIsOpen] = useState(false);

	const navigate = useNavigate();
	const dispatch = useDispatch();

	const handleLogin = () => {
		navigate('/login');
	}

	//handle logout
	const handleLogout = () => {
		try {
			dispatch(authActions.logout());
			localStorage.clear();
			toast("You've been logged out", {
				icon: '⚠️',
			});
			navigate('/login');
		} catch (error) {
			console.log(error);
		}
	}

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<nav className=" fixed-top-0 bg-black-600 p-4 bg-opacity-10">
			<div className="container mx-auto ">
				<div className="flex justify-between items-center">
					<div className="text-black font-bold text-3xl cursor-pointer" onClick={() => { navigate('/') }}>CourtBooking.com</div>
					<div className="block lg:hidden">
					</div>
					<div className="lg:flex items-center justify-between text-lg gap-4">
						{isLogin && <>
							<p className="text-black font-medium cursor-pointer hidden lg:block text-2xl" onClick={() => { navigate('/') }}>Home</p>
							<p className="text-black font-medium cursor-pointer hidden lg:block text-2xl" onClick={() => { navigate('/grounds') }}>Court</p>
							<p className="text-black font-medium cursor-pointer hidden lg:block text-2xl" onClick={() => { navigate('/Merch') }}>Merch</p>
						</>}

					</div>
					<div className='flex items-center'>
						{!isLogin &&
							<button className="bg-white text-black font-bold px-4 py-2 rounded-md" onClick={handleLogin}>Login</button>
						}
						{isLogin &&
							<div className="mx-auto flex items-center justify-center bg-none rounded-md">
								<div className="group relative cursor-pointer">
									<div className="flex items-center justify-between space-x-5 bg-none px-2 rounded-sm">
										<a className="menu-hover py-2 font-medium text-black lg:mx-4 text-2xl"  onClick="">
											Hi, {user}!
										</a>
										<span>
											<svg xmlns="" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
												stroke="black" className="h-6 w-6">
												<path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
											</svg>
										</span>
									</div>

									<div
										className="invisible absolute z-50 flex w-full flex-col rounded-sm bg-gray-300 py-1 px-4 text-gray-800 shadow-xl group-hover:visible text-2xl">
										<a className="my-2 block border-b border-black py-1 font-semibold text-gray-600 hover:text-gray-950 md:mx-2" onClick={() => { navigate('/bookings') }}>
											Bookings
										</a>									
										<a className="my-2 block border-b border-black py-1 font-semibold text-gray-600 hover:text-gray-950 md:mx-2" onClick={() => { navigate('/profile') }}>
											Profile
										</a>
										<a className="my-2 block border-b border-black py-1 font-semibold text-gray-600 hover:text-gray-950 md:mx-2" onClick={handleLogout}>
											Logout
										</a>
									</div>
								</div>
							</div>
						}
					</div>
				</div>
			</div>
		</nav>

	);
};

export default Navbar;
