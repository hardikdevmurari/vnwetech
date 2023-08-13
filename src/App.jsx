// // ** React Import
// import { Suspense, lazy } from 'react';

// //** React router import */
// import { Outlet, Route, Routes } from 'react-router-dom';

// //** Third Party import */
// import { AnimatePresence } from 'framer-motion';

// //** Custom components imports */
// import Home from './pages/Home';
// import About from './pages/About';
// import Error from './pages/Error';
// import Contact from './pages/Contact';
// import Services from './pages/Services';
// import Technology from './pages/Technology';
// import AppHeader from './components/shared/AppHeader';
// import AppFooter from './components/shared/AppFooter';

// const App = () => {
// 	return (
// 		<div className="bg-primary-light dark:bg-primary-dark">
// 			<AppHeader />
// 			<Outlet />
// 			<Routes>
// 				<Route path="/" element={<Home />} />
// 				<Route path="about" element={<About />} />
// 				<Route path="contact" element={<Contact />} />
// 				<Route path="services" element={<Services />} />
// 				<Route path="technology" element={<Technology />} />
// 				<Route path="*" element={<Error />} />
// 			</Routes>
// 			<AppFooter />
// 		</div>
// 	);
// };

// export default App;



// ** React Import
import { Suspense, lazy } from 'react';

//** React router import */
import { Outlet, Route, Routes } from 'react-router-dom';

//** Third Party import */
import { AnimatePresence } from 'framer-motion';

//** Custom components imports */
import Home from './pages/Home';
import About from './pages/About';
import Error from './pages/Error';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Technology from './pages/Technology';
import AppHeader from './components/shared/AppHeader';
import AppFooter from './components/shared/AppFooter';

const App = () => {
	return (
		<div className="bg-primary-light dark:bg-primary-dark">
			<AppHeader />
			<Home />
			<About />
			<Services />
			<Technology />
			<Contact />
			<AppFooter />
		</div>
	);
};

export default App;
