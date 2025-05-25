import { useState } from 'react'

const MenuItem = ({ item, inView, index }) => {
  const [imageLoaded, setImageLoaded] = useState(false)
  
  // Handle image load
  const handleImageLoad = () => {
    setImageLoaded(true)
  }
  
  // Calculate animation delay based on item index
  const getAnimationDelay = () => {
    const baseDelay = 300
    const itemDelay = 100 * (index % 4)
    return baseDelay + itemDelay
  }

  return (
    <div 
      className={`bg-white rounded-lg shadow-sm overflow-hidden menu-item ${inView ? 'animate-slide-up' : 'opacity-0'}`} 
      style={{ animationDelay: `${getAnimationDelay()}ms` }}
    >
      {/* Image container */}
      <div className="menu-item-image">
        {/* Placeholder image */}
        <div className={`absolute inset-0 bg-gray-200 ${imageLoaded ? 'hidden' : 'flex items-center justify-center'}`}>
          <div className="w-5 h-5 sm:w-6 sm:h-6 border-2 border-primary-600 border-t-transparent rounded-full animate-spin"></div>
        </div>
        
        {/* Actual image with lazy loading */}
        <img
          src={item.image}
          alt={item.name}
          loading="lazy"
          onLoad={handleImageLoad}
          className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
          width={100}
          height={100}
        />
        
        {/* Popular badge */}
        {item.popular && (
          <span className="absolute top-0 right-0 bg-primary-600 text-white text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 font-medium">
            Popüler
          </span>
        )}
      </div>
      
      {/* Content */}
      <div className="menu-item-content">
        <div className="menu-item-header">
          <h3 className="menu-item-title">{item.name}</h3>
          <span className="menu-item-price">₺{item.price}</span>
        </div>
        <p className="menu-item-description">{item.description}</p>
      </div>
    </div>
  )
}

export default MenuItem 