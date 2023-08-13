import React from 'react'

const Btn = ({name}) => {
  return (
    <button 
    className='inline-flex text-primary-dark dark:text-primary-dark hover:text-primary-light dark:hover:text-primary-light bg-hover-light dark:bg-hover-light hover:bg-ternary-dark  hover:dark:bg-ternary-dark border-0 py-2 px-6 focus:outline-none rounded text-lg duration-500'>
      {name}
	</button>
  )
}

export default Btn
