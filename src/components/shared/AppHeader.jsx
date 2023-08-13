// //** React imports */
// import { useState, useEffect } from 'react';

// //** Third party imports */
// import { motion } from 'framer-motion';

// //** React-icons imports */
// import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';

// //** react-router imports */
// import { Link } from 'react-router-dom';
// import logo from '../../assets/svg/logo.svg';
// import useThemeSwitcher from '../../hooks/useThemeSwitcher';

// //** Custom hooks imports */

// const AppHeader = () => {
// 	//** State */
// 	const [showMenu, setShowMenu] = useState(false);
// 	const [showModal, setShowModal] = useState(false);

// 	//** Hooks state */
// 	const [activeTheme, setTheme] = useThemeSwitcher();

// 	//** Navbar Menu */
// 	const navMenu = [
// 		{ id: 1, name: 'Home', path: '/', label: 'home' },
// 		{ id: 2, name: 'About', path: '/about', label: 'about' },
// 		{ id: 3, name: 'Services', path: '/service', label: 'service' },
// 		{ id: 4, name: 'Technology', path: '/technology', label: 'technology' },
// 		{ id: 5, name: 'Contact', path: '/contact', label: 'contact' },
// 	]

// 	return (
// 		<>
// 		<nav className='p-5 bg-hover-light dark:bg-primary-dark shadow md:flex md:items-center md:justify-between fixed w-full px-10'>
// <div className='flex items-center justify-between'>
// 	<span className='flex items-center '>
// 		<svg className='text-primary-light' width="50" height="50" viewBox="0 10 184 206" fill="" xmlns="http://www.w3.org/2000/svg">
// 			<g filter="url(#filter0_d_40_12)">
// 				<path d="M55.6264 107.619C64.729 123.162 68.6807 127.433 75.5671 129.167C81.0767 130.554 84.9501 129.888 90.743 126.556C95.7963 123.65 97.4194 121.254 114.126 92.0407C120.922 80.1563 127.154 69.6407 127.975 68.6739C131.115 64.9734 138.201 67.8417 138.201 72.8136C147.639 67.4693 151.637 61.4324 154.277 53.7482C146.905 46.3774 142.237 44.3402 132.674 44.3191C125.62 44.304 123.972 44.6678 119.248 47.2849C113.276 50.5925 109.131 54.9904 104.389 63.0528C102.652 66.0055 96.6355 76.2367 91.0214 85.7864C85.4063 95.3372 80.4305 102.915 79.9641 102.627C79.0817 102.082 61.8576 73.4055 55.4084 61.7452L51.7159 55.0688C40.0578 60.0135 37.724 64.8395 36.332 74.8017C41.4828 83.5063 47.6526 94.0007 55.6264 107.619Z" fill="#2E3B5E" />
// 				<path d="M106.041 7.25878C98.339 8.67788 86.5018 12.1884 78.9591 15.2889C66.935 20.2327 30.6244 38.5523 27.929 41.0347C25.0687 43.6688 23.2898 49.0628 24.1159 52.5965C24.4707 54.1151 27.1883 59.4276 30.1561 64.4025C32.0664 67.6059 34.1039 71.0364 36.332 74.8017C37.724 64.8395 40.0578 60.0135 51.7159 55.0688L58.4104 50.8407C69.747 43.6809 84.9802 36.101 94.9852 32.6407C102.997 29.8698 106.347 29.2718 115.808 28.9241C129.988 28.4025 137.655 30.4749 148.581 37.7834C157.403 43.6839 160.85 47.3734 165.791 56.2085C167.788 59.7804 170.082 63.2507 170.888 63.9191C173.417 66.0186 174.246 61.3925 172.747 53.5301C168.636 31.9543 157.788 16.4055 142.377 10.0015C136.331 7.48893 134.387 6.2015 122.121 6.00853C114.659 5.89195 107.422 7.00451 106.041 7.25878Z" fill="#F9B03A" />
// 				<path d="M138.201 72.8136C138.201 74.0889 133.87 81.711 119.406 105.888C116.999 109.911 113.676 115.707 112.019 118.768C110.363 121.83 106.481 128.488 103.39 133.564C100.301 138.641 95.2867 147.091 92.2485 152.342C83.942 166.699 80.2807 169.836 76.7058 165.659C74.931 163.584 56.6576 132.829 51.1782 122.694C46.3229 113.712 38.6204 102.228 35.539 99.3754C30.3159 94.5382 20.8204 92.6819 13.8084 95.1261C13.6567 95.179 13.5084 95.2301 13.3638 95.2799C11.9497 95.7672 10.8838 96.1345 10.36 96.8818C8.75612 99.1703 12.2368 105.022 26.3761 128.795L27.8285 131.237C35.8817 144.779 43.6536 158.121 45.0978 160.885C51.2104 172.576 58.4465 182.561 63.6315 186.457C69.539 190.896 74.6445 192.113 83.8576 191.277C95.2747 190.242 101.407 184.988 111.119 167.92C121.758 149.222 138.074 121.386 147.053 106.614C151.756 98.8749 156.919 89.7442 158.527 86.3221C164.486 73.6407 163.032 62.505 154.277 53.7482C151.637 61.4324 147.639 67.4693 138.201 72.8136Z" fill="#FCC349" />
// 			</g>
// 			<defs>
// 				<filter id="filter0_d_40_12" x="0" y="0" width="183.493" height="205.523" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// 					<feFlood flood-opacity="0" result="BackgroundImageFix" />
// 					<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
// 					<feOffset dy="4" />
// 					<feGaussianBlur stdDeviation="5" />
// 					<feComposite in2="hardAlpha" operator="out" />
// 					<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
// 					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_40_12" />
// 					<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_40_12" result="shape" />
// 				</filter>
// 			</defs>
// 		</svg>
// 		<span className='text-2xl font-bold text-primary-dark dark:text-primary-light'>VnWeTech</span>
// 	</span>
// 	<div className='flex' >
// 		<button
// 			onClick={() => setTheme(activeTheme)}
// 			aria-label="Theme Switcher"
// 			className="mr-5 md:hidden block bg-primary-light dark:bg-ternary-dark p-1.5 shadow-sm rounded-md cursor-pointer">
// 			{activeTheme === 'dark'
// 				? <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
// 				: <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />}
// 		</button>
// 		<button
// 			onClick={() => setShowMenu(!showMenu)}
// 			aria-label="menu"
// 			className='text-2xl mx-2 text-primary-light md:hidden block'
// 		>
// 			{showMenu ? <FiX /> : <FiMenu />}
// 		</button>
// 	</div>
// </div>

// 			<div className={`${showMenu ? 'opacity-100 top-[80px] transition-opacity ease-in duration-500' : 'top-[-400px] transition-opacity duration-500'} md:opacity-100 top-[-400px] opacity-0 md:flex md:items-center md:z-auto md:static absolute bg-hover-light dark:bg-primary-dark w-full md:w-auto md:py-0 py-4 left-0 md:pl-0 pl-7 `}>
// 				{navMenu?.map((menu, index) => {
// 					return (
// 						<Link
// 							to={menu?.path}
// 							className="px-4 uppercase py-2 block text-md font-semibold text-primary-dark dark:text-primary-light hover:text-primary-light dark:hover:text-hover-light transition duration-300"
// 							aria-label={menu?.label}
// 						>
// 							{menu?.name}
// 						</Link>
// 					)
// 				})}
// 				<button
// 					onClick={() => setTheme(activeTheme)}
// 					aria-label="Theme Switcher"
// 					className="mr-5 md:block hidden bg-primary-light dark:bg-ternary-dark p-1.5 shadow-sm rounded-md cursor-pointer">
// 					{activeTheme === 'dark'
// 						? <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
// 						: <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />}
// 				</button>
// 			</div>
// 		</nav>
// 		</>
// 	)
// };

// export default AppHeader;



// //** React imports */
// import { useState, useEffect } from 'react';

// //** Third party imports */
// import { motion } from 'framer-motion';

// //** React-icons imports */
// import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';

// //** react-router imports */
// import { Link } from 'react-router-dom';
// import logo from '../../assets/svg/logo.svg';

// //** Custom hooks imports */
// import useThemeSwitcher from '../../hooks/useThemeSwitcher';

// const AppHeader1 = () => {
// //** State */
// const [showMenu, setShowMenu] = useState(false);

// //** Hooks state */
// const [activeTheme, setTheme] = useThemeSwitcher();

// 	//** Navbar Menu */
// 	const navMenu = [
// 		{ id: 1, name: 'Home', path: '/', label: 'home' },
// 		{ id: 2, name: 'About', path: '/about', label: 'about' },
// 		{ id: 3, name: 'Services', path: '/service', label: 'service' },
// 		{ id: 4, name: 'Technology', path: '/technology', label: 'technology' },
// 		{ id: 5, name: 'Contact', path: '/contact', label: 'contact' },
// 	]

// 	return (
// 		<>
// 		<nav className='p-5 bg-hover-light dark:bg-primary-dark shadow md:flex md:items-center md:justify-between fixed w-full px-10'>
// <div className='flex items-center justify-between'>
// 	<span className='flex items-center '>
// 		<svg className='text-primary-light' width="50" height="50" viewBox="0 10 184 206" fill="" xmlns="http://www.w3.org/2000/svg">
// 			<g filter="url(#filter0_d_40_12)">
// 				<path d="M55.6264 107.619C64.729 123.162 68.6807 127.433 75.5671 129.167C81.0767 130.554 84.9501 129.888 90.743 126.556C95.7963 123.65 97.4194 121.254 114.126 92.0407C120.922 80.1563 127.154 69.6407 127.975 68.6739C131.115 64.9734 138.201 67.8417 138.201 72.8136C147.639 67.4693 151.637 61.4324 154.277 53.7482C146.905 46.3774 142.237 44.3402 132.674 44.3191C125.62 44.304 123.972 44.6678 119.248 47.2849C113.276 50.5925 109.131 54.9904 104.389 63.0528C102.652 66.0055 96.6355 76.2367 91.0214 85.7864C85.4063 95.3372 80.4305 102.915 79.9641 102.627C79.0817 102.082 61.8576 73.4055 55.4084 61.7452L51.7159 55.0688C40.0578 60.0135 37.724 64.8395 36.332 74.8017C41.4828 83.5063 47.6526 94.0007 55.6264 107.619Z" fill="#2E3B5E" />
// 				<path d="M106.041 7.25878C98.339 8.67788 86.5018 12.1884 78.9591 15.2889C66.935 20.2327 30.6244 38.5523 27.929 41.0347C25.0687 43.6688 23.2898 49.0628 24.1159 52.5965C24.4707 54.1151 27.1883 59.4276 30.1561 64.4025C32.0664 67.6059 34.1039 71.0364 36.332 74.8017C37.724 64.8395 40.0578 60.0135 51.7159 55.0688L58.4104 50.8407C69.747 43.6809 84.9802 36.101 94.9852 32.6407C102.997 29.8698 106.347 29.2718 115.808 28.9241C129.988 28.4025 137.655 30.4749 148.581 37.7834C157.403 43.6839 160.85 47.3734 165.791 56.2085C167.788 59.7804 170.082 63.2507 170.888 63.9191C173.417 66.0186 174.246 61.3925 172.747 53.5301C168.636 31.9543 157.788 16.4055 142.377 10.0015C136.331 7.48893 134.387 6.2015 122.121 6.00853C114.659 5.89195 107.422 7.00451 106.041 7.25878Z" fill="#F9B03A" />
// 				<path d="M138.201 72.8136C138.201 74.0889 133.87 81.711 119.406 105.888C116.999 109.911 113.676 115.707 112.019 118.768C110.363 121.83 106.481 128.488 103.39 133.564C100.301 138.641 95.2867 147.091 92.2485 152.342C83.942 166.699 80.2807 169.836 76.7058 165.659C74.931 163.584 56.6576 132.829 51.1782 122.694C46.3229 113.712 38.6204 102.228 35.539 99.3754C30.3159 94.5382 20.8204 92.6819 13.8084 95.1261C13.6567 95.179 13.5084 95.2301 13.3638 95.2799C11.9497 95.7672 10.8838 96.1345 10.36 96.8818C8.75612 99.1703 12.2368 105.022 26.3761 128.795L27.8285 131.237C35.8817 144.779 43.6536 158.121 45.0978 160.885C51.2104 172.576 58.4465 182.561 63.6315 186.457C69.539 190.896 74.6445 192.113 83.8576 191.277C95.2747 190.242 101.407 184.988 111.119 167.92C121.758 149.222 138.074 121.386 147.053 106.614C151.756 98.8749 156.919 89.7442 158.527 86.3221C164.486 73.6407 163.032 62.505 154.277 53.7482C151.637 61.4324 147.639 67.4693 138.201 72.8136Z" fill="#FCC349" />
// 			</g>
// 			<defs>
// 				<filter id="filter0_d_40_12" x="0" y="0" width="183.493" height="205.523" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
// 					<feFlood flood-opacity="0" result="BackgroundImageFix" />
// 					<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
// 					<feOffset dy="4" />
// 					<feGaussianBlur stdDeviation="5" />
// 					<feComposite in2="hardAlpha" operator="out" />
// 					<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
// 					<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_40_12" />
// 					<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_40_12" result="shape" />
// 				</filter>
// 			</defs>
// 		</svg>
// 		<span className='text-2xl font-bold text-primary-dark dark:text-primary-light'>VnWeTech</span>
// 	</span>
// 	<div className='flex' >
// 		<button
// 			onClick={() => setTheme(activeTheme)}
// 			aria-label="Theme Switcher"
// 			className="mr-5 md:hidden block bg-primary-light dark:bg-ternary-dark p-1.5 shadow-sm rounded-md cursor-pointer">
// 			{activeTheme === 'dark'
// 				? <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
// 				: <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />}
// 		</button>
// 		<button
// 			onClick={() => setShowMenu(!showMenu)}
// 			aria-label="menu"
// 			className='text-2xl mx-2 text-primary-light md:hidden block'
// 		>
// 			{showMenu ? <FiX /> : <FiMenu />}
// 		</button>
// 	</div>
// </div>

// 			<div className={`${showMenu ? 'opacity-100 top-[80px] transition-opacity ease-in duration-500' : 'top-[-400px] transition-opacity duration-500'} md:opacity-100 top-[-400px] opacity-0 md:flex md:items-center md:z-auto md:static absolute bg-hover-light dark:bg-primary-dark w-full md:w-auto md:py-0 py-4 left-0 md:pl-0 pl-7 `}>
// 				{navMenu?.map((menu, index) => {
// 					return (
// 						<Link
// 							to={menu?.path}
// 							className="px-4 uppercase py-2 block text-md font-semibold text-primary-dark dark:text-primary-light hover:text-primary-light dark:hover:text-hover-light transition duration-300"
// 							aria-label={menu?.label}
// 						>
// 							{menu?.name}
// 						</Link>
// 					)
// 				})}
// 				<button
// 					onClick={() => setTheme(activeTheme)}
// 					aria-label="Theme Switcher"
// 					className="mr-5 md:block hidden bg-primary-light dark:bg-ternary-dark p-1.5 shadow-sm rounded-md cursor-pointer">
// 					{activeTheme === 'dark'
// 						? <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
// 						: <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />}
// 				</button>
// 			</div>
// 		</nav>
// 		</>
// 	)
// };

// export default AppHeader1;



//** React imports */
import { useState, useEffect } from 'react';

//** Third party imports */
import { motion } from 'framer-motion';

//** React-icons imports */
import { FiMenu, FiMoon, FiSun, FiX } from 'react-icons/fi';

//** react-router imports */
import logo from '../../assets/svg/logo.svg';

//** Custom hooks imports */
import useThemeSwitcher from '../../hooks/useThemeSwitcher';
import { Link } from 'react-scroll';

const AppHeader = () => {
	//** State */
	const [sticky, setSticky] = useState(false);
	const [open, setOpen] = useState(false);
	const [showMenu, setShowMenu] = useState(false);

	//** Hooks state */
	const [activeTheme, setTheme] = useThemeSwitcher();

	//** Navbar Menu */
	const menuLinks = [
		{ id: 1, name: 'Home', path: '/', label: 'home' },
		{ id: 2, name: 'About', path: '/about', label: 'about' },
		{ id: 3, name: 'Services', path: '/service', label: 'service' },
		{ id: 4, name: 'Technology', path: '/technology', label: 'technology' },
		{ id: 5, name: 'Contact', path: '/contact', label: 'contact' },
	]

	// useEffect(() => {
	// 	window.addEventListener("scroll", () => {
	// 		const nav = document.querySelector("nav");
	// 		window.scrollY > 0 ? setSticky(true) : setSticky(false);
	// 	});
	// }, []);

	return (
		<>
			<nav className={'fixed w-full md:block flex justify-between top-0 z-[999] md:px-16 px-6 bg-hover-light dark:bg-primary-dark'}>
				<div className="flex items-center justify-between md:px-2 px-1">
					<div className='flex items-center justify-between'>
						<span className='flex items-center '>
							<svg className='text-primary-light' width="50" height="50" viewBox="0 10 184 206" fill="" xmlns="http://www.w3.org/2000/svg">
								<g filter="url(#filter0_d_40_12)">
									<path d="M55.6264 107.619C64.729 123.162 68.6807 127.433 75.5671 129.167C81.0767 130.554 84.9501 129.888 90.743 126.556C95.7963 123.65 97.4194 121.254 114.126 92.0407C120.922 80.1563 127.154 69.6407 127.975 68.6739C131.115 64.9734 138.201 67.8417 138.201 72.8136C147.639 67.4693 151.637 61.4324 154.277 53.7482C146.905 46.3774 142.237 44.3402 132.674 44.3191C125.62 44.304 123.972 44.6678 119.248 47.2849C113.276 50.5925 109.131 54.9904 104.389 63.0528C102.652 66.0055 96.6355 76.2367 91.0214 85.7864C85.4063 95.3372 80.4305 102.915 79.9641 102.627C79.0817 102.082 61.8576 73.4055 55.4084 61.7452L51.7159 55.0688C40.0578 60.0135 37.724 64.8395 36.332 74.8017C41.4828 83.5063 47.6526 94.0007 55.6264 107.619Z" fill="#2E3B5E" />
									<path d="M106.041 7.25878C98.339 8.67788 86.5018 12.1884 78.9591 15.2889C66.935 20.2327 30.6244 38.5523 27.929 41.0347C25.0687 43.6688 23.2898 49.0628 24.1159 52.5965C24.4707 54.1151 27.1883 59.4276 30.1561 64.4025C32.0664 67.6059 34.1039 71.0364 36.332 74.8017C37.724 64.8395 40.0578 60.0135 51.7159 55.0688L58.4104 50.8407C69.747 43.6809 84.9802 36.101 94.9852 32.6407C102.997 29.8698 106.347 29.2718 115.808 28.9241C129.988 28.4025 137.655 30.4749 148.581 37.7834C157.403 43.6839 160.85 47.3734 165.791 56.2085C167.788 59.7804 170.082 63.2507 170.888 63.9191C173.417 66.0186 174.246 61.3925 172.747 53.5301C168.636 31.9543 157.788 16.4055 142.377 10.0015C136.331 7.48893 134.387 6.2015 122.121 6.00853C114.659 5.89195 107.422 7.00451 106.041 7.25878Z" fill="#F9B03A" />
									<path d="M138.201 72.8136C138.201 74.0889 133.87 81.711 119.406 105.888C116.999 109.911 113.676 115.707 112.019 118.768C110.363 121.83 106.481 128.488 103.39 133.564C100.301 138.641 95.2867 147.091 92.2485 152.342C83.942 166.699 80.2807 169.836 76.7058 165.659C74.931 163.584 56.6576 132.829 51.1782 122.694C46.3229 113.712 38.6204 102.228 35.539 99.3754C30.3159 94.5382 20.8204 92.6819 13.8084 95.1261C13.6567 95.179 13.5084 95.2301 13.3638 95.2799C11.9497 95.7672 10.8838 96.1345 10.36 96.8818C8.75612 99.1703 12.2368 105.022 26.3761 128.795L27.8285 131.237C35.8817 144.779 43.6536 158.121 45.0978 160.885C51.2104 172.576 58.4465 182.561 63.6315 186.457C69.539 190.896 74.6445 192.113 83.8576 191.277C95.2747 190.242 101.407 184.988 111.119 167.92C121.758 149.222 138.074 121.386 147.053 106.614C151.756 98.8749 156.919 89.7442 158.527 86.3221C164.486 73.6407 163.032 62.505 154.277 53.7482C151.637 61.4324 147.639 67.4693 138.201 72.8136Z" fill="#FCC349" />
								</g>
								<defs>
									<filter id="filter0_d_40_12" x="0" y="0" width="183.493" height="205.523" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
										<feFlood flood-opacity="0" result="BackgroundImageFix" />
										<feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
										<feOffset dy="4" />
										<feGaussianBlur stdDeviation="5" />
										<feComposite in2="hardAlpha" operator="out" />
										<feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
										<feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_40_12" />
										<feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_40_12" result="shape" />
									</filter>
								</defs>
							</svg>
							<span className='text-2xl font-bold text-primary-dark dark:text-primary-light'>VnWeTech</span>
						</span>
					</div>
					<div className={`text-gray-900 md:block hidden px-7 py-2 font-medium  rounded-bl-full`}>
						<div className="flex items-center gap-1 py-2 text-lg">
							{/* {menuLinks?.map((menu, i) => (
								<Link
									to={menu?.path}
									className="px-6 text-primary-dark dark:text-primary-light hover:text-cyan-600"
								>
									{menu?.name}
								</Link>
							))} */}
							<Link
								className="cursor-pointer px-6  text-primary-dark dark:text-primary-light hover:text-cyan-600"
								activeClass='active'
								to='home'
								spy={true}
								smooth={true}
							>
								Home
							</Link>

							<Link
								className="cursor-pointer px-6  text-primary-dark dark:text-primary-light hover:text-cyan-600"
								to='about'
								spy={true}
								smooth={true}
							>
								About
							</Link>

							<Link
								className="cursor-pointer px-6  text-primary-dark dark:text-primary-light hover:text-cyan-600"
								to='service'
								spy={true}
								smooth={true}
							>
								Services
							</Link>
							<Link
								className="cursor-pointer px-6  text-primary-dark dark:text-primary-light hover:text-cyan-600"
								to='technology'
								spy={true}
								smooth={true}
							>
								Technology
							</Link>
							<Link
								className="cursor-pointer px-6  text-primary-dark dark:text-primary-light hover:text-cyan-600"
								to='contact'
								spy={true}
								smooth={true}
							>
								Contact
							</Link>
							<button
								onClick={() => setTheme(activeTheme)}
								aria-label="Theme Switcher"
								className="mr-5 md:block hidden bg-primary-light dark:bg-ternary-dark p-1.5 shadow-sm rounded-md cursor-pointer">
								{activeTheme === 'dark'
									? <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
									: <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />}
							</button>
						</div>
					</div>
				</div>
				<div
					className={`md:hidden absolute w-2/3 h-screen px-7 py-2 font-medium bg-white top-0 duration-300 ${open ? "right-0" : "right-[-100%]"
						}`}
				>
					<div className="flex flex-col justify-center h-full gap-10 py-2 text-lg">
						{/* {menuLinks?.map((menu, i) => (
							<Link
								to={menu?.path}
								className=" px-6 hover:text-cyan-600"
								onClick={() => setOpen(false)}
							>
								{menu?.name}
							</Link>
						))} */}
						<Link
							className="cursor-pointer px-6 hover:text-cyan-600"
							activeClass='active'
							to='home'
							spy={true}
							smooth={true}
						>
							Home
						</Link>

						<Link
							className="cursor-pointer px-6 hover:text-cyan-600"
							to='about'
							spy={true}
							smooth={true}
						>
							About
						</Link>

						<Link
							className="cursor-pointer px-6 hover:text-cyan-600"
							to='service'
							spy={true}
							smooth={true}
						>
							Services
						</Link>
						<Link
							className="cursor-pointer px-6 hover:text-cyan-600"
							to='technology'
							spy={true}
							smooth={true}
						>
							Technology
						</Link>
						<Link
							className="cursor-pointer px-6 hover:text-cyan-600"
							to='contact'
							spy={true}
							smooth={true}
						>
							Contact
						</Link>
					</div>
				</div>
				<div className='flex items-center' >
					<button
						onClick={() => setTheme(activeTheme)}
						aria-label="Theme Switcher"
						className="md:hidden block bg-primary-light dark:bg-ternary-dark p-1.5 shadow-sm rounded-md cursor-pointer">
						{activeTheme === 'dark'
							? <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
							: <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />}
					</button>
					<button
						onClick={() => setOpen(!open)}
						className={`z-[999]  ${open ? "text-primary-dark " : "text-primary-dark dark:text-primary-light"
							} text-3xl md:hidden mx-6`}
					>

						{open ? <FiX /> : <FiMenu />}
					</button>
				</div>
			</nav>
		</>
	)
};

export default AppHeader;
