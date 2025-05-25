import { FaArrowDown } from 'react-icons/fa'

const Hero = ({ onCategoryChange }) => {
  return (
    <section id="ana-sayfa" className="hero-section relative flex items-center justify-center overflow-hidden">
      {/* Hero Background with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{
          backgroundImage: "url('https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      </div>
      
      {/* Hero Content */}
      <div className="container relative z-10 text-center">
        <div className="max-w-xs sm:max-w-sm md:max-w-2xl lg:max-w-3xl mx-auto px-3 sm:px-4">
          <h1 className="hero-title text-white font-serif animate-fade-in">
            Sandavinci'de lezzet <br className="hidden sm:block" />sanatla buluşuyor
          </h1>
          <p className="hero-subtitle text-white opacity-90 animate-fade-in delay-200">
            Özel kahve çeşitleri, lezzetli atıştırmalıklar ve sıcak atmosferimizle sizi ağırlamaktan mutluluk duyarız.
          </p>
          <div className="hero-cta animate-fade-in delay-300">
            <button
              onClick={() => onCategoryChange('kahve')}
              className="px-4 py-1.5 sm:px-6 sm:py-2 md:px-8 md:py-3 bg-primary-600 text-white text-xs sm:text-sm md:text-base font-medium rounded-full hover:bg-primary-700 transition-colors"
              aria-label="Menüyü Keşfet"
            >
              Menüyü Keşfet
            </button>
          </div>
        </div>
        
       
      </div>
    </section>
  )
}

export default Hero 