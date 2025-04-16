import React from 'react'
import Title from '../components/Title'
import { assets } from '../assets/assets'
import NewsletterBox from '../components/NewsletterBox'

const Contact = () => {
  return (
    <div className='bg-gradient-to-b from-indigo-50 to-purple-50 min-h-screen pt-20 px-4 sm:px-8 lg:px-16'>

      {/* Contact Header */}
      <div className='text-center mb-12'>
        <div className='flex items-center justify-center gap-3 mb-4'>
          <div className='w-10 h-[2px] bg-amber-400'></div>
          <Title text1={'CONTACT'} text2={'US'} />
          <div className='w-10 h-[2px] bg-amber-400'></div>
        </div>
      </div>

      {/* Contact Content */}
      <div className='max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-10 mb-20'>
        {/* Image Section */}
        <div className='w-full lg:w-1/2'>
          <img 
            className='w-full h-full object-cover rounded-xl shadow-lg hover:shadow-xl transition-shadow'
            src={assets.contact_img} 
            alt="Our store" 
          />
        </div>

        {/* Info Section */}
        <div className='w-full lg:w-1/2 space-y-8 text-indigo-900'>
          <div>
            <h3 className='text-2xl font-semibold mb-4 text-indigo-900'>Our Store</h3>
            <p className='text-indigo-700 leading-relaxed'>
              <br />
           DigVijay Nath P.G Collage
            </p>
          </div>

          <div>
            <h3 className='text-2xl font-semibold mb-4 text-indigo-900'>Contact Information</h3>
            <p className='text-indigo-700 leading-relaxed'>
               <br />
              Email: StyleNest@gmail.com
            </p>
          </div>

          <div>
            <h3 className='text-2xl font-semibold mb-4 text-indigo-900'>Careers at StyleNest</h3>
            <p className='text-indigo-700 mb-6 leading-relaxed'>
              Learn more about our teams and job openings.
            </p>
            <button className='bg-amber-400 hover:bg-amber-300 text-indigo-900 font-semibold px-8 py-3 rounded-lg hover:shadow-md transition-all'>
              Explore Careers
            </button>
          </div>
        </div>
      </div>

      <NewsletterBox />

    </div>
  )
}

export default Contact