import React from 'react'
import { assets } from '../assets/assets'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='border-t-4 border-black'>
      <div className='flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-10 text-sm'>
         <div>
            <NavLink to='/'>
            <p className='font-mono text-black text-2xl cursor-pointer pb-4'>RentinStyle</p>
            </NavLink>
            <p className='w-full md:w-2/3 text-gray-600'>
            Rentinstyle is a marketplace for renting clothes. We provide a platform for users to rent clothes from other users in their area. We also provide a platform for users to sell their clothes.
            </p>
         </div>
         <div>
            <p className='text-xl font-medium mb-5'>COMPANY</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <NavLink to='/'><li>Home</li></NavLink>
                <NavLink to='/about'><li>About Us</li></NavLink>
                <NavLink to='/order'><li>Orders</li></NavLink>
                <NavLink to='/contact'><li>Contact Us</li></NavLink>
            </ul>
         </div>
         <div>
            <p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
            <li>91+ 9930995373</li>
            <li>contact@rentinstyle.com</li>
            </ul>
         </div>
      </div>
      <div>
        <hr />
        <p className='py-5 text-sm text-center'>Copyright 2024@ rentinstyle.vercel.app - All rights Reserved</p>
      </div>
    </div>
  )
}

export default Footer
