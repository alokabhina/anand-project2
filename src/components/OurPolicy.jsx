import React from 'react'
import { assets } from '../assets/assets'

const OurPolicy = () => {
  return (
    <div className="w-full px-6 sm:px-12 lg:px-24 py-20 bg-gray-50">
      <div className="text-center mb-12">
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">Our Policies</h2>
        <p className="mt-4 text-sm sm:text-base text-gray-500 max-w-3xl mx-auto">
          We are committed to providing you with the best shopping experience, backed by our easy return, exchange, and customer support policies.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6">
        {/* Easy Exchange Policy */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105">
          <img
            className="w-16 h-16 mb-4 object-contain"
            src={assets.exchange_icon} // Your previous image
            alt="Exchange Icon"
          />
          <p className="font-semibold text-xl text-gray-800">Easy Exchange Policy</p>
          <p className="text-sm sm:text-base text-gray-400">
            We offer a hassle-free exchange policy for your convenience.
          </p>
        </div>

        {/* 7 Days Return Policy */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105">
          <img
            className="w-16 h-16 mb-4 object-contain"
            src={assets.quality_icon} // Your previous image
            alt="Return Icon"
          />
          <p className="font-semibold text-xl text-gray-800">7 Days Return Policy</p>
          <p className="text-sm sm:text-base text-gray-400">
            Enjoy a 7-day free return policy on all your purchases.
          </p>
        </div>

        {/* Customer Support */}
        <div className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-lg transition transform hover:scale-105">
          <img
            className="w-16 h-16 mb-4 object-contain"
            src={assets.support_img} // Your previous image
            alt="Customer Support Icon"
          />
          <p className="font-semibold text-xl text-gray-800">Best Customer Support</p>
          <p className="text-sm sm:text-base text-gray-400">
            We provide 24/7 customer support to assist you at any time.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OurPolicy
