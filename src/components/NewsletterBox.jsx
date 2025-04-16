import React from 'react'

const NewsletterBox = () => {
  return (
    <div className='bg-white text-center py-16 px-8 rounded-lg shadow-md'>
      <h2 className='text-4xl font-bold text-gray-800'>
        Get 20% Off Your First Order
      </h2>
      <p className='text-gray-600 mt-4 max-w-2xl mx-auto text-sm sm:text-base'>
        Stay updated with our latest products and offers by subscribing to our newsletter. Receive exclusive discounts directly to your inbox!
      </p>

      <form className='w-full sm:w-full flex flex-col sm:flex-row items-center justify-center gap-4 mx-auto mt-8 bg-white rounded-lg shadow-lg p-4 border-2 border-gray-200 max-w-2xl'>
        <input
          className='w-full p-3 rounded-lg sm:rounded-l-lg border-2 border-gray-300 bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500'
          type="email"
          placeholder='Enter your email'
          required
        />
        <button
          className='bg-indigo-600 text-white py-3 px-6 rounded-lg sm:rounded-r-lg font-medium transition-all hover:bg-indigo-500 focus:ring-2 focus:ring-indigo-400'
          type='submit'
        >
          Subscribe
        </button>
      </form>
    </div>
  )
}

export default NewsletterBox
