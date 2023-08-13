import React from 'react';
import AboutImage from '../assets/images/about.png';
import PageTitle from '../components/common/PageTitle';

const About = () => {
	return (
		<section className="text-gray-600 body-font relative md:p-20 py-16 " id={'about'}>
			<PageTitle name={'About Us'} />
			<div className="container mx-auto flex px-5 md:flex-row flex-col items-center p:20 sm:py-10">
				<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
					<img
						src={AboutImage}
						alt="About image"
						className="object-cover object-center rounded"
					/>	
				</div>
				<div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
					<p className="mb-8 md:text-lg md:font-medium text-primary-dark dark:text-primary-light">
						We are a passionate group of friends driven by a shared vision to
						establish an exceptional IT solutions company. With unwavering focus
						and dedication, we strive to turn our dream into reality. Our goal
						is to undertake complex and impactful projects, leveraging our
						expertise to deliver comprehensive solutions. Together, we are
						committed to making a positive difference through our innovative
						approach and client-centered approach.
					</p>
					<div className='text-primary-dark dark:text-primary-light text-2xl font-medium'>
						<h5>4+ Years Experience</h5>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
