import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext)

  return (
    <Link
      to={`/product/${id}`}
      onClick={() => window.scrollTo(0, 0)}
      className="group block bg-white rounded-2xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden"
    >
      {/* Image section */}
      <div className="aspect-[4/5] overflow-hidden">
        <img
          src={image[0]}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* Product details */}
      <div className="p-4">
        <p className="text-sm text-gray-800 font-medium truncate">{name}</p>
        <p className="text-sm text-indigo-800 font-semibold mt-1">₹{price}</p>
      </div>
    </Link>
  )
}

export default ProductItem
