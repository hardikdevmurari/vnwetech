import React from 'react'

const PageTitle = ({ name }) => {
    return (
        <div className='flex items-center justify-center f'>
            <div className='md:w-28 w-14 h-1.5 mr-3 bg-primary-dark dark:bg-primary-light ' />
            <h4 className='font-bold uppercase text-primary-dark dark:text-primary-light md:text-4xl text-xl'>{name}</h4>
            <div className='md:w-28 w-14 h-1.5 ml-3 bg-primary-dark dark:bg-primary-light ' />
        </div>
    )
}

export default PageTitle
