import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'

const BestSeller = () => {
  const [bestSeller, setBestSeller] = useState([])
  const { products } = useContext(ShopContext)

  useEffect(() => {
    const bestProduct = products.filter(item => item.bestseller)
    setBestSeller(bestProduct.slice(0, 5))
  }, [products])

  return (
    <section className="w-full px-2 sm:px-6 md:px-10 xl:px-16 2xl:px-24 my-20">
      {/* Title & Description */}
      <div className="text-center mb-12">
        <Title text1="BEST" text2="SELLERS" />
        <p className="max-w-4xl mx-auto mt-3 text-sm sm:text-base text-gray-600">
          Explore our most popular picks, loved by customers and trusted for quality.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-8">
        {bestSeller.map((item, index) => (
          <ProductItem
            key={index}
            id={item._id}
            image={item.image}
            name={item.name}
            price={item.price}
          />
        ))}
      </div>
    </section>
  )
}

export default BestSeller
