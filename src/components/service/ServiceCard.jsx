import React from 'react'

const ServiceCard = ({ icon, name }) => {
    return (
      <div className='border border-secondary-dark dark:border-secondary-light rounded-md flex items-center p-4'>
        <img className='w-12 h-12' src={icon} />
        <p className='text-primary-dark dark:text-primary-light font-medium text-xl pl-3'>{name}</p>
      </div>
    )
  }
  
  export default ServiceCard
  