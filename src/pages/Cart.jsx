import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets';
import CartTotal from '../components/CartTotal';

const Cart = () => {
  const { products, currency, navigate, cartItems, updateQuantity } = useContext(ShopContext);
  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    const tempData = []
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        if (cartItems[items][item] > 0) {
          tempData.push({
            _id: items,
            size: item,
            quantity: cartItems[items][item]
          })
        }
      }
    }
    setCartData(tempData)
  }, [cartItems])

  return (
    <div className='bg-gradient-to-b from-indigo-50 to-purple-50 min-h-screen pt-20 px-4 sm:px-8 lg:px-16'>

      {/* Cart Title */}
      <div className='text-center mb-12'>
        <div className='flex items-center justify-center gap-3 mb-4'>
          <div className='w-10 h-[2px] bg-amber-400'></div>
          <Title text1={'YOUR'} text2={'CART'} />
          <div className='w-10 h-[2px] bg-amber-400'></div>
        </div>
      </div>

      {/* Cart Items */}
      <div className="space-y-6 max-w-4xl mx-auto">
        {cartData.map((item, index) => {
          const productData = products.find((product) => product._id === item._id);

          return (
            <div
              key={index}
              className='bg-white border border-indigo-100 rounded-xl p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6 shadow-sm hover:border-amber-200 transition-all'
            >
              {/* Product Info */}
              <div className='flex items-start gap-6'>
                <img
                  className='w-20 h-20 sm:w-24 sm:h-24 rounded-lg object-cover border border-indigo-50'
                  src={productData.image[0]}
                  alt={productData.name}
                />
                <div className='space-y-2'>
                  <p className='text-lg font-medium text-indigo-900'>
                    {productData.name}
                  </p>
                  <div className='flex items-center gap-4'>
                    <p className="text-amber-500 font-semibold">{currency}{productData.price}</p>
                    <p className='px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-sm'>
                      Size: {item.size}
                    </p>
                  </div>
                </div>
              </div>

              {/* Quantity & Delete */}
              <div className='flex items-center gap-4 sm:gap-6'>
                <input
                  onChange={(e) =>
                    e.target.value === '' || e.target.value === '0'
                      ? null
                      : updateQuantity(item._id, item.size, Number(e.target.value))
                  }
                  className='border-2 border-indigo-200 rounded-lg px-4 py-2 w-20 text-center focus:outline-none focus:border-amber-400 focus:ring-2 focus:ring-amber-100 transition-all'
                  type="number"
                  min={1}
                  defaultValue={item.quantity}
                />
                <img
                  onClick={() => updateQuantity(item._id, item.size, 0)}
                  className='w-6 cursor-pointer hover:opacity-75 transition-opacity'
                  src={assets.bin_icon}
                  alt="Remove item"
                  title="Remove"
                />
              </div>
            </div>
          )
        })}
      </div>

      {/* Cart Summary & Checkout */}
      <div className='flex justify-center mt-16 pb-20'>
        <div className='w-full max-w-4xl'>
          <CartTotal />
          <div className='w-full text-center sm:text-right'>
            <button
              onClick={() => navigate('/place-order')}
              className='bg-amber-400 hover:bg-amber-300 text-indigo-900 font-semibold px-8 py-4 rounded-xl hover:shadow-lg transition-all'
            >
              PROCEED TO CHECKOUT
            </button>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Cart