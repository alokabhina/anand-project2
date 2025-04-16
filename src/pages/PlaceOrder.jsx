import React, { useContext, useState } from 'react'
import Title from '../components/Title'
import CartTotal from '../components/CartTotal'
import { assets } from '../assets/assets'
import { ShopContext } from '../context/ShopContext'

const PlaceOrder = () => {
    const [method, setMethod] = useState('cod');
    const { navigate } = useContext(ShopContext);

    return (
        <div className='bg-gradient-to-b from-indigo-50 to-purple-50 min-h-screen pt-20 px-4 sm:px-8 lg:px-16'>
            <div className='max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12'>

                {/* Delivery Information */}
                <div className='flex-1 max-w-2xl'>
                    <div className='mb-8'>
                        <div className='flex items-center justify-center gap-3 mb-4'>
                            <div className='w-10 h-[2px] bg-amber-400'></div>
                            <Title text1={'DELIVERY'} text2={'INFORMATION'} />
                            <div className='w-10 h-[2px] bg-amber-400'></div>
                        </div>
                    </div>

                    <div className='space-y-6'>
                        <div className='flex gap-4'>
                            <input 
                                className='w-full px-4 py-3 border-2 border-indigo-200 rounded-lg focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all'
                                type="text" 
                                placeholder='First Name' 
                            />
                            <input 
                                className='w-full px-4 py-3 border-2 border-indigo-200 rounded-lg focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all'
                                type="text" 
                                placeholder='Last Name' 
                            />
                        </div>
                        
                        <input 
                            className='w-full px-4 py-3 border-2 border-indigo-200 rounded-lg focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all'
                            type="email" 
                            placeholder='Email Address' 
                        />
                        
                        <input 
                            className='w-full px-4 py-3 border-2 border-indigo-200 rounded-lg focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all'
                            type="text" 
                            placeholder='Street Address' 
                        />
                        
                        <div className='flex gap-4'>
                            <input 
                                className='w-full px-4 py-3 border-2 border-indigo-200 rounded-lg focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all'
                                type="text" 
                                placeholder='City' 
                            />
                            <input 
                                className='w-full px-4 py-3 border-2 border-indigo-200 rounded-lg focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all'
                                type="text" 
                                placeholder='State' 
                            />
                        </div>
                        
                        <div className='flex gap-4'>
                            <input 
                                className='w-full px-4 py-3 border-2 border-indigo-200 rounded-lg focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all'
                                type="number" 
                                placeholder='Zip Code' 
                            />
                            <input 
                                className='w-full px-4 py-3 border-2 border-indigo-200 rounded-lg focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all'
                                type="text" 
                                placeholder='Country' 
                            />
                        </div>
                        
                        <input 
                            className='w-full px-4 py-3 border-2 border-indigo-200 rounded-lg focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all'
                            type="tel" 
                            placeholder='Phone Number' 
                        />
                    </div>
                </div>

                {/* Payment Section */}
                <div className='lg:w-96'>
                    <div className='bg-white rounded-xl shadow-sm p-6 lg:sticky lg:top-20'>
                        <CartTotal />

                        <div className='mt-8'>
                            <div className='flex items-center justify-center gap-3 mb-6'>
                                <div className='w-10 h-[2px] bg-amber-400'></div>
                                <Title text1={'PAYMENT'} text2={'METHOD'} />
                                <div className='w-10 h-[2px] bg-amber-400'></div>
                            </div>

                            <div className='space-y-4'>
                                {[
                                    { id: 'stripe', logo: assets.stripe_logo, label: '' },
                                    { id: 'razorpay', logo: assets.razorpay_logo, label: '' },
                                    { id: 'cod', logo: null, label: 'CASH ON DELIVERY' }
                                ].map((payment) => (
                                    <div
                                        key={payment.id}
                                        onClick={() => setMethod(payment.id)}
                                        className={`flex items-center gap-4 p-4 border-2 rounded-lg cursor-pointer transition-all ${
                                            method === payment.id 
                                            ? 'border-amber-400 bg-amber-50' 
                                            : 'border-indigo-200 hover:border-amber-300'
                                        }`}
                                    >
                                        <div className={`w-5 h-5 rounded-full border-2 ${
                                            method === payment.id 
                                            ? 'border-amber-400 bg-amber-400' 
                                            : 'border-indigo-300'
                                        }`}></div>
                                        {payment.logo ? (
                                            <img className='h-5' src={payment.logo} alt={payment.id} />
                                        ) : (
                                            <span className='text-indigo-700 font-medium'>{payment.label}</span>
                                        )}
                                    </div>
                                ))}
                            </div>

                            <button 
                                onClick={() => navigate('/orders')}
                                className='w-full bg-amber-400 hover:bg-amber-300 text-indigo-900 font-semibold py-3 px-6 rounded-lg mt-8 transition-all hover:shadow-md'
                            >
                                PLACE ORDER
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default PlaceOrder