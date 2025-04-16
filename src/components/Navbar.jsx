import React, { useContext, useState } from 'react'
import { assets } from '../assets/assets'
import { Link, NavLink } from 'react-router-dom'
import { ShopContext } from '../context/ShopContext'

const Navbar = () => {
    const [visible, setVisible] = useState(false)
    const { setShowSearch, navigate, getCartCount } = useContext(ShopContext);

    return (
        <nav className='w-full flex items-center justify-between px-4 sm:px-8 py-4 fixed top-0 left-0 right-0 z-50 bg-white shadow-sm'>
            {/* Logo */}
            <Link to='/'>
                <img
                    className='h-30 w-auto max-h-12 object-contain'
                    src={assets.logo}
                    alt="Logo"
                />
            </Link>

            {/* Navigation Links with Full-width Background */}
            <div className='hidden sm:block absolute left-0 right-0 bg-gradient-to-r from-indigo-900 to-purple-800 h-14 -z-10 top-0'></div>

            <ul className='hidden sm:flex gap-8 text-sm font-medium relative mx-auto'>
                {['/', '/collection', '/about', '/contact'].map((path, idx) => {
                    const labels = ['HOME', 'COLLECTION', 'ABOUT', 'CONTACT']
                    return (
                        <NavLink
                            key={path}
                            to={path}
                            className={({ isActive }) =>
                                `flex flex-col items-center gap-1 text-white hover:text-amber-300 transition-colors ${
                                    isActive ? 'text-amber-300' : ''
                                }`
                            }
                        >
                            <p>{labels[idx]}</p>
                            <hr className={`w-2/4 border-none h-[2px] ${visible ? 'bg-amber-300' : 'bg-transparent'} transition-all`} />
                        </NavLink>
                    )
                })}
            </ul>

            <div className='flex items-center gap-6'>
                <img
                    onClick={() => { setShowSearch(true); navigate('/collection') }}
                    className='w-5 cursor-pointer hover:opacity-80 transition-opacity'
                    src={assets.search_icon}
                    alt="Search"
                />
                <div className='group relative'>
                    <img
                        onClick={() => { navigate('/login') }}
                        className='w-5 cursor-pointer hover:opacity-80 transition-opacity'
                        src={assets.profile_icon}
                        alt="Profile"
                    />
                    <div className='group-hover:block hidden absolute right-0 pt-4'>
                        <div className='flex flex-col gap-2 w-40 py-3 px-4 bg-white text-purple-900 rounded-md shadow-xl'>
                            <p className='cursor-pointer hover:text-amber-500 transition-colors'>My Profile</p>
                            <p onClick={() => navigate('/orders')} className='cursor-pointer hover:text-amber-500 transition-colors'>Orders</p>
                            <p className='cursor-pointer hover:text-amber-500 transition-colors'>Logout</p>
                        </div>
                    </div>
                </div>
                <Link to='/cart' className='relative'>
                    <img className='w-5 min-w-5 hover:opacity-80 transition-opacity' src={assets.cart_icon} alt="Cart" />
                    <p className='absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-amber-400 text-purple-900 aspect-square rounded-full text-[9px] font-bold'>
                        {getCartCount()}
                    </p>
                </Link>
                <img
                    onClick={() => setVisible(true)}
                    className='w-5 cursor-pointer sm:hidden hover:opacity-80 transition-opacity'
                    src={assets.menu_icon}
                    alt="Menu"
                />
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 right-0 bottom-0 z-50 overflow-hidden w-full bg-gradient-to-b from-indigo-900 to-purple-800 transition-all duration-300 ${visible ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                <div className='flex flex-col h-full'>
                    <div
                        onClick={() => setVisible(false)}
                        className='flex items-center gap-4 p-5 text-white hover:bg-purple-700 transition-colors'
                    >
                        <img className='h-4 rotate-180' src={assets.dropdown_icon} alt="Close" />
                        <p>Close Menu</p>
                    </div>
                    <div className='flex flex-col mt-4'>
                        {['/', '/collection', '/about', '/contact'].map((path, idx) => {
                            const labels = ['HOME', 'COLLECTION', 'ABOUT', 'CONTACT']
                            return (
                                <NavLink
                                    key={path}
                                    onClick={() => setVisible(false)}
                                    to={path}
                                    className={({ isActive }) =>
                                        `py-4 pl-8 text-white border-b border-purple-700 hover:bg-purple-700 transition-colors ${
                                            isActive ? 'bg-purple-700 text-amber-300' : ''
                                        }`
                                    }
                                >
                                    {labels[idx]}
                                </NavLink>
                            )
                        })}
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
