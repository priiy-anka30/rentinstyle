import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 border-t'>
        <Title text1={'CONTACT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28'>
        <img className='w-full md:max-w-[480px] border-2 border-black' src={assets.contact_img} alt="" />
        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-3xl text-black'>Our Store</p>
          <p className='text-gray-600 text-xl'>Dr. K. M. Vasudevan Pillai Campus<br />Sector 16, New Panvel East</p>
          <p className='text-gray-600 text-xl'>Tel:(91+) 7304856880 <br />Email:admin@rentinstyle.com</p>
          <p className='font-semibold text-xltext-gray-600'>Careers At RentInStyle</p>
          <p className='text-gray-500'>Learn more about our teams and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
        </div>   
      </div>
      <NewsletterBox/>
    </div>
  )
}

export default Contact