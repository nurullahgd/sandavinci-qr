import { FaInstagram, FaFacebookF, FaTwitter, FaHeart } from 'react-icons/fa'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8">
      <div className="container">
        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 pb-8">
          {/* Brand */}
          <div className="col-span-1">
            <div className="flex items-center mb-4">
              <span className="text-primary-400 font-serif text-2xl font-bold">Sandavinci</span>
              <span className="ml-1 text-gray-400 font-serif text-lg">Cafe</span>
            </div>
            <p className="text-gray-400 text-sm mb-4">
              Sandavinci Cafe olarak, müşterilerimize unutulmaz bir deneyim sunmayı amaçlıyoruz.
            </p>
            {/* Social Media */}
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Instagram hesabımızı takip edin"
              >
                <FaInstagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Facebook hesabımızı takip edin"
              >
                <FaFacebookF size={20} />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
                aria-label="Twitter hesabımızı takip edin"
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-medium mb-4">Hızlı Erişim</h3>
            <ul className="space-y-2">
              <li>
                <a href="https://sandavinci.net" className="text-gray-400 hover:text-primary-400 transition-colors">Ana Sayfa</a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-primary-400 transition-colors">Menü</a>
              </li>
            </ul>
          </div>
          
          {/* Menu Categories */}
          <div className="col-span-1">
            <h3 className="text-white text-lg font-medium mb-4">Menü Kategorileri</h3>
            <ul className="space-y-2">
              <li>
                <a href="#menu" className="text-gray-400 hover:text-primary-400 transition-colors">Kahveler</a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-primary-400 transition-colors">Sıcak İçecekler</a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-primary-400 transition-colors">Soğuk İçecekler</a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-primary-400 transition-colors">Tatlılar</a>
              </li>
              <li>
                <a href="#menu" className="text-gray-400 hover:text-primary-400 transition-colors">Yiyecekler</a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Divider */}
        <div className="border-t border-gray-800 my-6"></div>
        
        {/* Copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            &copy; {currentYear} Sandavinci Cafe. Tüm hakları saklıdır.
          </p>
          
          <p className="text-gray-500 text-sm mt-2 sm:mt-0">
            <span className="flex items-center justify-center sm:justify-end">
              <span className="mr-1">Tutkuyla yapıldı</span>
              <FaHeart className="text-primary-400 inline-block mx-1" size={12} />
            </span>
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer 