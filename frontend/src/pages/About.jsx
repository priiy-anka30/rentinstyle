import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div>
      <div className='text-2xl text-center pt-8 border-t border-black'>
          <Title text1={'ABOUT'} text2={'US'}/>
      </div>
      <div className='my-10 flex flex-col md:flex-row gap-16'>
        <img className='w-full md:max-w-[450px] border-2 border-black' src={assets.about_img} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600'>
            <p>
             RentInStyle is a modern rental platform that offers a diverse range of high-quality clothing for all occasions. It allows users to rent stylish outfits, from traditional wear to trendy fashion, at affordable prices. The platform provides an easy and sustainable way for fashion enthusiasts to access premium clothing without the need to purchase. RentInStyle caters to both men and women, offering flexible rental options and a hassle-free experience. With a focus on convenience and fashion, it's the go-to solution for anyone looking to elevate their wardrobe on a budget.</p>
            <b className='text-gray-800'>Our Mission</b>
            <p>
            At RentInStyle, our mission is to make fashion accessible, affordable, and sustainable by offering a wide range of rental options. We aim to empower individuals to enjoy premium clothing without the environmental impact of fast fashion. Through convenience and variety, we strive to revolutionize how people experience fashion.</p>
        </div>
      </div>
      <div className='text-2xl py-4 border-t-2 border-black flex justify-center'>
          <Title text1={'WHY'} text2={'CHOOSE US'}/>
      </div>
      <div className='flex justify-start flex-col md:flex-row text-sm mb-10'>
        <div className='border border-black px-5 md:px-10 py-8 sm:py-16 flex flex-col gap-5'>
          <b className='text-base'>Quality Assurance:</b>
          <p className='text-gray-600 text-base'>At RentInStyle, we are committed to offering top-notch quality in every item, ensuring that our customers receive garments that are well-maintained and stylish.</p>
        </div>
        <div className='border border-black px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5'>
          <b className='text-base'>Convenience:</b>
          <p className='text-gray-600 text-base'>Our platform is designed for ease, allowing users to browse and rent outfits effortlessly, saving time while ensuring a perfect fit for any occasion.</p>
        </div>
        <div className='border border-black px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5'>
          <b className='text-base'>Exceptional Customer Service:</b>
          <p className='text-gray-600 text-base'>We focus on providing an exceptional experience, ensuring that from selection to return, our service is smooth, reliable, and tailored to meet the needs of our customers.?</p>
        </div>

      </div>
      <NewsletterBox/>
    </div>
  )
}

export default About