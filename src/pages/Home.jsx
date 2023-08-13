import React from 'react';
import homeImage from '../assets/images/home.png';
import Btn from '../components/common/Btn';

const Home = () => {
	return (
		<section id={'home'} className='md:py-20 sm:py-2 md:px-20 bg-primary-light dark:bg-primary-dark relative'>
			<div className='container mx-auto flex px-5 md:py-10 md:flex-row flex-col items-center'>
				<div className='order-2 md:flex-grow md:w-1/2 lg:pr-24 md:pr-1 flex flex-col lg:items-start md:text-left mb-16 md:mb-0 items-center text-center'>
					<p className='title-font lg:text-5xl md:text-4xl text-4xl mb-4 md:font-bold font-medium text-primary-dark dark:text-primary-light'>
						Let's Build Together And Grow Ahead
					</p>
					<p className='mb-8 font-medium lg:text-lg text-md leading-relaxed text-primary-dark dark:text-primary-light'>
						Our innovative IT solutions and services pave the way for
						transformative development. Together, let's leverage technology to
						drive progress, empower communities, and create a brighter future.
					</p>
					<Btn name={'Get in touch'} type={'button'} />
				</div>
				<div className='order-1 md:order-2 lg:max-w-lg lg:w-full md:w-full w-5/6'>
					<img src={homeImage} className="object-cover object-center rounded" alt="hero" />
				</div>
			</div>
		</section>
	)
};

export default Home;
