import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import MenuSection from './components/MenuSection'

function App() {
  const [activeCategory, setActiveCategory] = useState('kahve')
  const [isScrolled, setIsScrolled] = useState(false)
  
  // Handle scroll for navbar transparency
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  // Simulate page load animation
  useEffect(() => {
    document.body.classList.add('loaded')
  }, [])
  
  // Menu categories
  const categories = [
    { id: 'kahve', name: '☕ Sıcak Kahveler' },
    { id: 'sogukKahve', name: '🥤 Soğuk Kahveler' },
    { id: 'hotDrinks', name: 'Sıcak İçecekler' },
    { id: 'sogukIcecek', name: '🥤 Soğuk İçecekler' },
    { id: 'bitki', name: '🍵 Çaylar' },
    { id: 'smoothie', name: '🍹 Smoothie & Milkshake' },
    { id: 'tatli', name: '🥐 Tatlılar' },
    { id: 'sandvic', name: '🥪 Sandviçler' },
    { id: 'alternatifler', name: ' Alternatifler' }
  ]
  
  // Handler for changing category
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId)
    
    // Smooth scroll to menu section
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="bg-white min-h-screen">
      {/* Skip to content link for accessibility */}
      <a href="#menu" className="skip-link">Menüye geç</a>
      
      {/* Header */}
      <Header 
        categories={categories} 
        activeCategory={activeCategory} 
        onCategoryChange={handleCategoryChange}
        isScrolled={isScrolled}
      />
      
      <main>
        {/* Hero Section */}
        <Hero onCategoryChange={handleCategoryChange} />
        
        {/* Menu Section */}
        <MenuSection 
          id="menu" 
          activeCategory={activeCategory} 
          categories={categories} 
          onCategoryChange={handleCategoryChange} 
        />
      </main>
    </div>
  )
}

export default App 