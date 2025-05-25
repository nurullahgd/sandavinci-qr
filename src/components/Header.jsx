import { useState, useEffect } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const Header = ({ categories, activeCategory, onCategoryChange, isScrolled }) => {
  // Handle category change
  const handleNavClick = (categoryId) => {
    onCategoryChange(categoryId)
  }

  return (
    <header 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-1 sm:py-2' : 'bg-transparent py-2 sm:py-3 md:py-4'
      }`}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <span className={`header-logo-text ${isScrolled ? 'text-primary-600' : 'text-white'}`}>
            Sandavinci
          </span>
          <span className={`ml-1 header-logo-subtext ${isScrolled ? 'text-secondary-600' : 'text-white opacity-90'}`}>
            Cafe
          </span>
        </a>
        
        {/* Navigation (all screen sizes) */}
        <nav>
          <ul className="flex space-x-3 md:space-x-6">
            <li>
              <a 
                href="https://sandavinci.net" 
                className={`text-xs md:text-sm font-medium transition-colors hover:text-primary-600 ${
                  isScrolled ? 'text-secondary-700' : 'text-white'
                }`}
              >
                Ana Sayfa
              </a>
            </li>
            <li>
              <a 
                href="#menu" 
                className={`text-xs md:text-sm font-medium transition-colors hover:text-primary-600 ${
                  isScrolled ? 'text-secondary-700' : 'text-white'
                }`}
                onClick={() => handleNavClick('kahve')}
              >
                Menü
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header 