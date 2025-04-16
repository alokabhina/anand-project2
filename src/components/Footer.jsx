import React from 'react'
import { assets } from '../assets/assets'
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const Footer = () => {
  return (
    <footer className="w-full bg-gradient-to-r from-indigo-900 to-purple-800 text-gray-200 pt-10 pb-6">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-6 text-sm">

        {/* Logo & Description */}
        <div className="space-y-4">
          <img
            src={assets.logo}
            alt="StyleNest Logo"
            className="h-12 w-auto max-h-12 object-contain"
          />
          <p className="leading-snug text-gray-300">
            Bringing you the finest products with a commitment to quality and style.
          </p>

          {/* Social Icons */}
          <div className="flex gap-3">
            <a href="#" className="p-2 bg-indigo-700 rounded-full hover:bg-amber-400 hover:text-indigo-900 transition-all">
              <FaFacebookF size={14} />
            </a>
            <a href="#" className="p-2 bg-indigo-700 rounded-full hover:bg-amber-400 hover:text-indigo-900 transition-all">
              <FaTwitter size={14} />
            </a>
            <a href="#" className="p-2 bg-indigo-700 rounded-full hover:bg-amber-400 hover:text-indigo-900 transition-all">
              <FaInstagram size={14} />
            </a>
            <a href="#" className="p-2 bg-indigo-700 rounded-full hover:bg-amber-400 hover:text-indigo-900 transition-all">
              <FaLinkedinIn size={14} />
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-base font-semibold mb-4 text-white border-b border-amber-400 pb-2 inline-block">
            Quick Links
          </h3>
          <ul className="space-y-2">
            {['Home', 'About Us', 'Collection', 'Contact'].map((item) => (
              <li key={item} className="hover:text-amber-300 cursor-pointer transition-colors flex items-center gap-2">
                <span className="text-amber-400">•</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Customer Care */}
        <div>
          <h3 className="text-base font-semibold mb-4 text-white border-b border-amber-400 pb-2 inline-block">
            Customer Care
          </h3>
          <ul className="space-y-2">
            {['Help Center', 'FAQs', 'Returns', 'Shipping Info'].map((item) => (
              <li key={item} className="hover:text-amber-300 cursor-pointer transition-colors flex items-center gap-2">
                <span className="text-amber-400">•</span> {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-base font-semibold mb-4 text-white border-b border-amber-400 pb-2 inline-block">
            Contact Us
          </h3>
          <ul className="space-y-2">
            <li className="hover:text-amber-300 transition-colors flex items-center gap-2">
              <span className="text-amber-400">📞</span> +91 6393748882
            </li>
            <li className="hover:text-amber-300 transition-colors flex items-center gap-2">
              <span className="text-amber-400">✉️</span> StyleNest.com
            </li>
            <li className="hover:text-amber-300 transition-colors flex items-center gap-2">
              <span className="text-amber-400">🏢</span> DigVijay Nath PG College
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-purple-700 mt-10 pt-4">
        <p className="text-center text-gray-300 text-xs">
          © {new Date().getFullYear()} StyleNest. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
