import React from 'react'
import PageTitle from '../components/common/PageTitle'
import Btn from '../components/common/Btn'

const Contact = () => {
  return (

    <section id={'contact'} className='py-20 lg:px-20'>
      <PageTitle name={'Contact Us'} />
      <div className='grid md:grid-cols-2 gap-x-20 gap-y-10 p-10'>
        <form action="#" className=" border border-secondary-dark dark:border-secondary-light rounded-md p-10">
          <div className='space-y-4'>
            <div>
              <label
                for="name"
                className="block mb-2 text-sm font-medium text-primary-dark dark:text-primary-light">Your name</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                required
                className="
              text-sm rounded-sm block w-full p-2.5
              shadow-sm dark:shadow-sm-light
              bg-primary-light dark:bg-primary-dark 
              border border-secondary-dark  dark:border-secondary-light 
              text-primary-dark dark:text-primary-light 
              dark:focus:border-secondary-light dark:placeholder-gray-400 
              dark:focus:ring-secondary-light "
              />
            </div>

            <div>
              <label
                for="email"
                className="block mb-2 text-sm font-medium text-primary-dark dark:text-primary-light">Your email</label>
              <input
                type="email"
                id="email"
                required
                placeholder="Enter your email"
                className="
              text-sm rounded-sm block w-full p-2.5
              shadow-sm dark:shadow-sm-light
              bg-primary-light dark:bg-primary-dark 
              border border-secondary-dark  dark:border-secondary-light 
              text-primary-dark dark:text-primary-light 
              dark:focus:border-secondary-light dark:placeholder-gray-400 
              dark:focus:ring-secondary-light "
              />
            </div>

            <div>
              <label
                for="phone"
                className="block mb-2 text-sm font-medium text-primary-dark dark:text-primary-light">Your Phone</label>
              <input
                type="tel"
                id="phone"
                required
                placeholder="Enter your phone"
                className="
              text-sm rounded-sm block w-full p-2.5
              shadow-sm dark:shadow-sm-light
              bg-primary-light dark:bg-primary-dark 
              border border-secondary-dark  dark:border-secondary-light 
              text-primary-dark dark:text-primary-light 
              dark:focus:border-secondary-light dark:placeholder-gray-400 
              dark:focus:ring-secondary-light "
              />
            </div>

            <div>
              <label
                for="subject"
                className="block mb-2 text-sm font-medium text-primary-dark dark:text-primary-light">Subjects</label>
              <input
                type="text"
                id="subject"
                required
                placeholder="Enter subject details"
                className="
              text-sm rounded-sm block w-full p-2.5
              shadow-sm dark:shadow-sm-light
              bg-primary-light dark:bg-primary-dark 
              border border-secondary-dark  dark:border-secondary-light 
              text-primary-dark dark:text-primary-light 
              dark:focus:border-secondary-light dark:placeholder-gray-400 
              dark:focus:ring-secondary-light "
              />
            </div>

            <div className="sm:col-span-2">
              <label
                for="message"
                className="block mb-2 text-sm font-medium text-primary-dark dark:text-primary-light">Your message</label>
              <textarea
                id="message"
                rows="6"
                placeholder="comments..."
                className="
                  text-sm rounded-sm block w-full p-2.5
                  shadow-sm dark:shadow-sm-light
                  bg-primary-light dark:bg-primary-dark 
                  border border-secondary-dark  dark:border-secondary-light 
                  text-primary-dark dark:text-primary-light 
                  dark:focus:border-secondary-light dark:placeholder-gray-400 
                  dark:focus:ring-secondary-light "
              ></textarea>
            </div>

            <div className='flex justify-end'>
              <Btn name={'Send message'} type={'submit'} />
            </div>

          </div>
        </form>
        <div>
          <p className='text-primary-dark dark:text-primary-light md:text-lg' >Our innovative IT solutions and services pave the way for transformative development. Together, let's leverage technology to drive progress, empower communities, and create a brighter future.</p>
          <p className='text-primary-dark dark:text-primary-light md:text-2xl py-10' >Contact Details </p>
        </div>
      </div>
    </section>
  )
}

export default Contact

