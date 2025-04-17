import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const About = () => {
  return (
    <div className="px-4 sm:px-8 lg:px-16 xl:px-24">

      {/* Title Section */}
      <div className='text-2xl text-center pt-12 border-t border-gray-300'>
        <Title text1={'ABOUT'} text2={'US'} />
      </div>

      {/* About Section */}
      <div className='my-12 flex flex-col md:flex-row gap-12 md:gap-16 items-center'>
        <img 
          className='w-full md:max-w-[450px] rounded-xl shadow-lg object-cover' 
          src={assets.about_img} 
          alt="About StyleNest ecommerce" 
        />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-gray-600 text-sm sm:text-base'>
        <p>
  At <strong>StyleNest</strong>, we set out with a bold vision — to transform the online shopping experience into something smarter, more stylish, and deeply personal. What started as a simple idea quickly grew into a passion-driven platform designed to help people discover fashion that fits not just their body, but their lifestyle.
</p>

<p>
  From the start, we’ve been committed to curating a unique and high-quality selection that reflects today’s trends and tomorrow’s classics. Whether you're dressing for comfort, confidence, or celebration, our collections — from chic dresses and everyday essentials to seasonal must-haves — are handpicked with you in mind.
</p>

<b className="text-gray-800 text-base">Our Mission</b>

          <p>Our mission at StyleNester is to empower customers with choice, convenience, and confidence. We're dedicated to providing a seamless shopping experience that exceeds expectations, from browsing and ordering to delivery and beyond.</p>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className='text-xl py-6'>
        <Title text1={'WHY'} text2={'CHOOSE US'} />
      </div>

      {/* Features Section */}
      <div className='flex flex-col md:flex-row text-sm mb-20 gap-6'>
        <div className='border border-gray-200 px-8 py-10 sm:py-14 rounded-lg shadow-md flex-1 bg-white flex flex-col gap-4 hover:shadow-xl transition-shadow duration-300'>
          <b className="text-indigo-700 text-base">Quality Assurance</b>
          <p className='text-gray-600'>We meticulously select and vet each product to ensure it meets our stringent quality standards.</p>
        </div>
        <div className='border border-gray-200 px-8 py-10 sm:py-14 rounded-lg shadow-md flex-1 bg-white flex flex-col gap-4 hover:shadow-xl transition-shadow duration-300'>
          <b className="text-indigo-700 text-base">Convenience</b>
          <p className='text-gray-600'>With our user-friendly interface and hassle-free ordering process, shopping has never been easier.</p>
        </div>
        <div className='border border-gray-200 px-8 py-10 sm:py-14 rounded-lg shadow-md flex-1 bg-white flex flex-col gap-4 hover:shadow-xl transition-shadow duration-300'>
          <b className="text-indigo-700 text-base">Exceptional Customer Service</b>
          <p className='text-gray-600'>Our team of dedicated professionals is here to assist you the way, ensuring your satisfaction is our top priority.</p>
        </div>
      </div>

      {/* Newsletter Box */}
      <NewsletterBox />
    </div>
  )
}

export default About
