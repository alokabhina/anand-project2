import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from '../components/Title';

const Orders = () => {
    const { products, currency } = useContext(ShopContext);

    return (
        <div className='bg-gradient-to-b from-indigo-50 to-purple-50 min-h-screen pt-20 px-4 sm:px-8 lg:px-16'>
            <div className='max-w-screen-xl mx-auto'>
                {/* Header */}
                <div className='text-center mb-12'>
                    <div className='flex items-center justify-center gap-3 mb-4'>
                        <div className='w-10 h-[2px] bg-amber-400'></div>
                        <Title text1={'MY'} text2={'ORDERS'} />
                        <div className='w-10 h-[2px] bg-amber-400'></div>
                    </div>
                </div>

                {/* Orders List */}
                <div className='space-y-6'>
                    {products.slice(1, 4).map((item, index) => (
                        <div key={index} className='bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-all'>
                            <div className='flex flex-col md:flex-row gap-6'>
                                {/* Product Info */}
                                <div className='flex items-start gap-6'>
                                    <img 
                                        className='w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-lg border border-indigo-50' 
                                        src={item.image[0]} 
                                        alt={item.name} 
                                    />
                                    <div className='space-y-2'>
                                        <p className='text-lg font-medium text-indigo-900'>{item.name}</p>
                                        <div className='flex flex-wrap items-center gap-3 text-indigo-700'>
                                            <p className='text-amber-500 font-semibold'>{currency}{item.price}</p>
                                            <p className='text-sm'>Quantity: 1</p>
                                            <p className='px-2 py-1 bg-amber-100 text-amber-700 rounded-full text-xs'>
                                                Size: L
                                            </p>
                                        </div>
                                        <p className='text-sm text-indigo-600'>
                                            Ordered: <span className='text-indigo-400'>May 25, 2024</span>
                                        </p>
                                    </div>
                                </div>

                                {/* Order Status */}
                                <div className='md:ml-auto flex flex-col md:flex-row md:items-center justify-between gap-4'>
                                    <div className='flex items-center gap-2'>
                                        <div className='w-2 h-2 rounded-full bg-green-500'></div>
                                        <p className='text-sm font-medium text-indigo-700'>Ready to ship</p>
                                    </div>
                                    <button className='bg-amber-400 hover:bg-amber-300 text-indigo-900 font-medium px-6 py-2 rounded-lg transition-all hover:shadow-sm'>
                                        Track Order
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Empty State (uncomment if needed) */}
                {/* {products.length === 0 && (
                    <div className='text-center py-12'>
                        <p className='text-indigo-700'>You haven't placed any orders yet</p>
                        <button className='mt-4 bg-amber-400 hover:bg-amber-300 text-indigo-900 font-medium px-6 py-2 rounded-lg transition-all'>
                            Start Shopping
                        </button>
                    </div>
                )} */}
            </div>
        </div>
    )
}

export default Orders