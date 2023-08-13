import React from 'react'
import PageTitle from '../components/common/PageTitle'
import ServicesImage from '../assets/images/service.png'
import webIcon from '../assets/icon/web.png'
import mobileIcon from '../assets/icon/mobile.png'
import pallateIcon from '../assets/icon/pallate.png'
import ServiceCard from '../components/service/ServiceCard'

const Services = () => {
  return (
    <section id={'service'} className='md:py-20 px-8 md:px-20 bg-primary-light dark:bg-primary-dark relative'>
      <PageTitle name={'Services'} />
      <div className='md:grid-cols-2 grid py-10'>
        <div className='grid gap-6'>
          <ServiceCard icon={pallateIcon} name={'Web Development'} />
          <ServiceCard icon={mobileIcon} name={'UI / UX Design'} />
          <ServiceCard icon={webIcon} name={'Mobile Development'} />
        </div>
        <div className=''>
          <img src={ServicesImage} className="object-cover object-center rounded" alt="hero" />
        </div>
      </div>
    </section>
  )
}

export default Services