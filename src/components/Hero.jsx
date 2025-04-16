import React from 'react'
import { assets } from '../assets/assets'

const Hero = () => {
    return (
        <div className='w-full pt-24 flex flex-col sm:flex-row bg-gradient-to-br from-indigo-50 to-purple-50'>
            
            {/* Hero Left Side - Text Content */}
            <div className='w-full sm:w-1/2 flex items-center justify-center p-8 sm:p-12 lg:p-16'>
                <div className='text-indigo-900 max-w-md'>
                    <div className='flex items-center gap-3 mb-4'>
                        <div className='w-10 h-[2px] bg-amber-400'></div>
                        <p className='font-medium text-sm uppercase tracking-widest text-indigo-700'>OUR BESTSELLERS</p>
                    </div>

                    <h1 className='prata-regular text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 text-indigo-900'>
                        Latest <span className='text-amber-500'>Arrivals</span>
                    </h1>

                    <div className='flex items-center gap-3 group cursor-pointer'>
                        <p className='font-semibold text-sm uppercase tracking-wider group-hover:text-amber-500 transition-colors'>
                            SHOP NOW
                        </p>
                        <div className='w-10 h-[1px] bg-indigo-900 group-hover:bg-amber-500 transition-colors'></div>
                    </div>
                </div>
            </div>

            {/* Hero Right Side - Image */}
            <div className='w-full sm:w-1/2 overflow-hidden'>
                <img 
                    className='w-full h-full min-h-[400px] object-cover object-center' 
                    src={assets.hero_img} 
                    alt="Latest fashion arrivals" 
                />
            </div>
        </div>
    )
}

export default Hero
