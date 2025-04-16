import React, { useContext, useEffect, useState } from 'react'
import Title from '../components/Title'
import ProductItem from '../components/ProductItem'
import { ShopContext } from '../context/ShopContext'
import { assets } from '../assets/assets'

const Collection = () => {
  const { products, search, showSearch } = useContext(ShopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [subCategory, setSubCategory] = useState([]);
  const [showFilter, setShowFilter] = useState(false);
  const [sortType, setSortType] = useState('relavent')

  const toggleCategory = (e) => {
    if (category.includes(e.target.value)) {
      setCategory(prev => prev.filter(a => a !== e.target.value))
    } else {
      setCategory(prev => [...prev, e.target.value])
    }
  }

  const toggleSubCategory = (e) => {
    if (subCategory.includes(e.target.value)) {
      setSubCategory(prev => prev.filter(a => a !== e.target.value))
    } else {
      setSubCategory(prev => [...prev, e.target.value])
    }
  }

  const applyFilter = () => {
    let productsCopy = products.slice()

    if (showSearch && search) {
      productsCopy = productsCopy.filter(item => item.name.toLowerCase().includes(search.toLowerCase()))
    }

    if (category.length > 0) {
      productsCopy = productsCopy.filter(item => category.includes(item.category));
    }

    if (subCategory.length > 0) {
      productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory));
    }

    setFilterProducts(productsCopy)
  }

  const sortProduct = async () => {
    let fpCopy = filterProducts.slice();

    switch (sortType) {
      case 'low-high':
        setFilterProducts(fpCopy.sort((a, b) => (a.price - b.price)));
        break;
      case 'high-low':
        setFilterProducts(fpCopy.sort((a, b) => (b.price - a.price)));
        break;
      default:
        applyFilter();
        break;
    }
  }

  useEffect(() => {
    applyFilter()
  }, [category, subCategory, search, showSearch])

  useEffect(() => {
    sortProduct();
  }, [sortType])

  return (
    <div className='bg-gradient-to-b from-indigo-50 to-purple-50 min-h-screen pt-20 px-4 sm:px-8 lg:px-16'>
      <div className='flex flex-col sm:flex-row gap-6 sm:gap-10 max-w-screen-xl mx-auto'>

        {/* Filter Options */}
        <div className='sm:min-w-64'>
          <div 
            onClick={() => setShowFilter(!showFilter)} 
            className='flex items-center justify-between sm:justify-start gap-3 cursor-pointer p-3 bg-white rounded-lg shadow-sm sm:shadow-none sm:bg-transparent'
          >
            <p className='text-lg font-medium text-indigo-900 flex items-center gap-2'>
              <img className='w-4 h-4' src={assets.filter_icon} alt="Filter" />
              FILTERS
            </p>
            <img 
              className={`w-3 h-3 transition-transform ${showFilter ? 'rotate-90' : ''} sm:hidden`} 
              src={assets.dropdown_icon} 
              alt="" 
            />
          </div>

          {/* Category Filter */}
          <div className={`bg-white rounded-lg p-5 mt-3 shadow-sm ${showFilter ? 'block' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-semibold text-indigo-800'>CATEGORIES</p>
            <div className='space-y-3 text-sm text-indigo-900'>
              {['Men', 'Women', 'Kids'].map((cat) => (
                <label key={cat} className='flex items-center gap-3 cursor-pointer hover:text-amber-500 transition-colors'>
                  <input 
                    className='w-4 h-4 accent-amber-500'
                    value={cat} 
                    onChange={toggleCategory} 
                    type="checkbox" 
                    checked={category.includes(cat)}
                  /> 
                  {cat}
                </label>
              ))}
            </div>
          </div>

          {/* Sub Category Filter */}
          <div className={`bg-white rounded-lg p-5 my-4 shadow-sm ${showFilter ? 'block' : 'hidden'} sm:block`}>
            <p className='mb-3 text-sm font-semibold text-indigo-800'>TYPE</p>
            <div className='space-y-3 text-sm text-indigo-900'>
              {['Topwear', 'Bottomwear', 'Winterwear'].map((subCat) => (
                <label key={subCat} className='flex items-center gap-3 cursor-pointer hover:text-amber-500 transition-colors'>
                  <input 
                    className='w-4 h-4 accent-amber-500'
                    value={subCat} 
                    onChange={toggleSubCategory} 
                    type="checkbox" 
                    checked={subCategory.includes(subCat)}
                  /> 
                  {subCat}
                </label>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className='flex-1'>
          <div className='flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8'>
            <div className='mb-4 sm:mb-0'>
              <div className='flex items-center justify-center gap-3 mb-2'>
                <div className='w-10 h-[2px] bg-amber-400'></div>
                <Title text1={"ALL"} text2={"COLLECTIONS"} />
                <div className='w-10 h-[2px] bg-amber-400'></div>
              </div>
            </div>

            {/* Product Sort */}
            <div className='relative'>
              <select 
                onChange={(e) => setSortType(e.target.value)} 
                className='appearance-none bg-white border-2 border-indigo-200 text-indigo-900 py-2 pl-4 pr-8 rounded-lg focus:border-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-100 text-sm sm:text-base'
              >
                <option value="relavent">Sort by: Relevant</option>
                <option value="low-high">Sort by: Price (Low to High)</option>
                <option value="high-low">Sort by: Price (High to Low)</option>
              </select>
              <div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-indigo-700'>
                <img className='w-3 h-3' src={assets.dropdown_icon} alt="" />
              </div>
            </div>
          </div>

          {/* Map Products */}
          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6'>
            {filterProducts.map((item, index) => (
              <ProductItem 
                key={index} 
                id={item._id} 
                image={item.image} 
                name={item.name} 
                price={item.price} 
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Collection