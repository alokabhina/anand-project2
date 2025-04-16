import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext';
import { assets } from '../assets/assets';
import RelatedProducts from '../components/RelatedProducts';
import Title from '../components/Title';

const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);
  const [productData, setProductData] = useState(false);
  const [size, setSize] = useState("");
  const [image, setImage] = useState("");
  const [activeTab, setActiveTab] = useState("description");

  const fetchProductData = async () => {
    products.map((item) => {
      if (item._id === productId) {
        setProductData(item);
        setImage(item.image[0]);
        return null;
      }
    })
  }

  useEffect(() => {
    fetchProductData()
  }, [productId])

  return productData ? (
    <div className='bg-gradient-to-b from-indigo-50 to-purple-50 min-h-screen pt-20 px-4 sm:px-8 lg:px-16'>
      <div className='max-w-screen-xl mx-auto'>
        {/* Product Main Section */}
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-12'>
          {/* Product Images */}
          <div className='flex-1 flex flex-col-reverse gap-4 lg:flex-row'>
            <div className='flex lg:flex-col overflow-x-auto lg:overflow-y-auto gap-2 lg:gap-4 lg:w-24'>
              {productData.image.map((item, index) => (
                <img 
                  key={index} 
                  onClick={() => setImage(item)} 
                  className={`w-20 h-20 lg:w-full lg:h-24 object-cover rounded-lg border-2 cursor-pointer transition-all ${
                    image === item ? 'border-amber-400' : 'border-indigo-100'
                  }`}
                  src={item} 
                  alt={`Product view ${index + 1}`} 
                />
              ))}
            </div>
            <div className='w-full lg:flex-1'>
              <img 
                className='w-full h-auto max-h-[600px] object-contain rounded-xl bg-white p-8 shadow-sm' 
                src={image} 
                alt={productData.name} 
              />
            </div>
          </div>

          {/* Product Info */}
          <div className='flex-1'>
            <h1 className='text-3xl lg:text-4xl font-medium text-indigo-900 mb-2'>{productData.name}</h1>
            
            <div className='flex items-center gap-1 mb-4'>
              {[...Array(4)].map((_, i) => (
                <img key={i} className='w-4' src={assets.star_icon} alt="Star" />
              ))}
              <img className='w-4' src={assets.star_dull_icon} alt="Star" />
              <span className='text-indigo-700 ml-2'>(122 reviews)</span>
            </div>

            <p className='text-3xl font-semibold text-amber-500 mb-6'>{currency}{productData.price}</p>
            
            <p className='text-indigo-700 mb-8'>{productData.description}</p>
            
            <div className='mb-8'>
              <p className='text-indigo-900 font-medium mb-3'>Select Size</p>
              <div className='flex flex-wrap gap-2'>
                {productData.sizes.map((item, index) => (
                  <button 
                    key={index} 
                    onClick={() => setSize(item)} 
                    className={`px-5 py-2 rounded-lg border-2 transition-all ${
                      item === size 
                        ? 'border-amber-400 bg-amber-100 text-indigo-900' 
                        : 'border-indigo-200 hover:border-amber-300'
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <button 
              onClick={() => addToCart(productData._id, size)}
              disabled={!size}
              className={`w-full lg:w-auto px-8 py-3 rounded-lg font-medium transition-all ${
                size 
                  ? 'bg-amber-400 hover:bg-amber-300 text-indigo-900 hover:shadow-md' 
                  : 'bg-gray-300 text-gray-500 cursor-not-allowed'
              }`}
            >
              ADD TO CART
            </button>

            <div className='mt-8 pt-6 border-t border-indigo-100'>
              <div className='flex flex-col gap-2 text-sm text-indigo-700'>
                <p className='flex items-center gap-2'>
                  <img className='w-4 h-4' src={assets.check_icon} alt="" />
                  100% Original product
                </p>
                <p className='flex items-center gap-2'>
                  <img className='w-4 h-4' src={assets.check_icon} alt="" />
                  Cash on delivery available
                </p>
                <p className='flex items-center gap-2'>
                  <img className='w-4 h-4' src={assets.check_icon} alt="" />
                  Easy 7-day returns
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Product Tabs */}
        <div className='mt-16'>
          <div className='flex border-b border-indigo-100'>
            <button
              onClick={() => setActiveTab("description")}
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === "description" 
                  ? 'text-amber-500 border-b-2 border-amber-400' 
                  : 'text-indigo-700'
              }`}
            >
              Description
            </button>
            <button
              onClick={() => setActiveTab("reviews")}
              className={`px-6 py-3 font-medium text-sm ${
                activeTab === "reviews" 
                  ? 'text-amber-500 border-b-2 border-amber-400' 
                  : 'text-indigo-700'
              }`}
            >
              Reviews (122)
            </button>
          </div>

          <div className='p-6 bg-white rounded-b-lg shadow-sm'>
            {activeTab === "description" ? (
              <div className="text-indigo-700 space-y-4">
  <p>
    An e-commerce website is a digital storefront that allows businesses and individuals to sell products or services online. It acts as a virtual marketplace, enabling seamless transactions, product showcasing, and customer interaction — all without the need for a physical store.
  </p>

  <p>
    The rise of e-commerce has been fueled by its unmatched convenience, 24/7 accessibility, and ability to connect with a global audience. Each product is presented on its own detailed page, complete with images, descriptions, and specifications to guide customers in making confident, informed purchases.
  </p>
</div>

            ) : (
              <div className='text-indigo-700'>
                {/* Reviews content would go here */}
                <p>Product reviews section coming soon!</p>
              </div>
            )}
          </div>
        </div>

        {/* Related Products */}
        <div className='mt-20'>
          <div className='flex items-center justify-center gap-3 mb-8'>
            <div className='w-10 h-[2px] bg-amber-400'></div>
            <Title text1={'RELATED'} text2={'PRODUCTS'} />
            <div className='w-10 h-[2px] bg-amber-400'></div>
          </div>
          <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
        </div>
      </div>
    </div>
  ) : (
    <div className='bg-gradient-to-b from-indigo-50 to-purple-50 min-h-screen pt-20 flex items-center justify-center'>
      <p className='text-indigo-700'>Loading product details...</p>
    </div>
  )
}

export default Product