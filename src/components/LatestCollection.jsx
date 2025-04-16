import React, { useContext, useEffect, useState } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
import ProductItem from './ProductItem'

const LatestCollection = () => {
  const [latestProducts, setLatestProducts] = useState([])
  const { products } = useContext(ShopContext)

  useEffect(() => {
    if (products.length > 0) {
      setLatestProducts(products.slice(0, 10))
    }
  }, [products])

  return (
    <section className="w-full px-2 sm:px-6 md:px-10 xl:px-16 2xl:px-24 my-20">
      {/* Title Section */}
      <div className="text-center mb-12">
        <Title text1="LATEST" text2="COLLECTIONS" />
        <p className="max-w-4xl mx-auto mt-2 text-sm sm:text-base text-gray-600">
          Discover our newest arrivals crafted with modern flair and timeless quality.
        </p>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-5 sm:gap-6 lg:gap-8">
        {latestProducts.map((item, index) => (
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

export default LatestCollection
