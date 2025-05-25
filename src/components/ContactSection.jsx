import { useState } from 'react'
import { useInView } from 'react-intersection-observer'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'

const ContactSection = ({ id }) => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: ''
  })
  const [formSubmitted, setFormSubmitted] = useState(false)
  
  // Animation when section comes into view
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }))
  }
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault()
    // Simulate form submission
    setTimeout(() => {
      setFormSubmitted(true)
      setFormState({
        name: '',
        email: '',
        message: ''
      })
    }, 500)
  }

  return (
    <section id={id} className="py-20 bg-gray-50" ref={ref}>
      <div className="container">
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-primary-700 mb-4">İletişim</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Sorularınız, geri bildirimleriniz veya rezervasyon talepleriniz için bizimle iletişime geçebilirsiniz.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={inView ? 'animate-fade-in delay-200' : 'opacity-0'}>
            <div className="bg-white rounded-lg shadow-menu p-6 md:p-8">
              <h3 className="text-xl font-medium text-gray-900 mb-6">İletişim Bilgileri</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FaMapMarkerAlt className="h-6 w-6 text-primary-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-medium text-gray-900">Adres</h4>
                    <p className="mt-1 text-gray-600">Bağdat Caddesi No:123, Kadıköy, İstanbul</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FaPhone className="h-6 w-6 text-primary-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-medium text-gray-900">Telefon</h4>
                    <p className="mt-1 text-gray-600">+90 (212) 123 45 67</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FaEnvelope className="h-6 w-6 text-primary-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-medium text-gray-900">E-posta</h4>
                    <p className="mt-1 text-gray-600">info@sandavincicafe.com</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <FaClock className="h-6 w-6 text-primary-500" />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-base font-medium text-gray-900">Çalışma Saatleri</h4>
                    <p className="mt-1 text-gray-600">Her gün 08:00 - 22:00</p>
                  </div>
                </div>
              </div>
              
              {/* Google Map (placeholder) */}
              <div className="mt-8 h-48 bg-gray-200 rounded-lg overflow-hidden">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d48173.94249348391!2d29.04560565!3d40.990049800000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cac790b17ba89d%3A0xd58aa148f45b2d0c!2zQmHEn2RhdCBDYWRkZXNpLCBLYWTEsWvDtnkvxLBzdGFuYnVs!5e0!3m2!1str!2str!4v1655661234567!5m2!1str!2str" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen="" 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Sandavinci Cafe Lokasyon"
                  aria-label="Sandavinci Cafe Google Harita Konumu"
                ></iframe>
              </div>
            </div>
          </div>
          
          {/* Contact Form */}
          <div className={inView ? 'animate-fade-in delay-300' : 'opacity-0'}>
            <div className="bg-white rounded-lg shadow-menu p-6 md:p-8">
              <h3 className="text-xl font-medium text-gray-900 mb-6">Bize Yazın</h3>
              
              {formSubmitted ? (
                <div className="text-center py-8">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-100 mb-4">
                    <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <h4 className="text-lg font-medium text-gray-900 mb-2">Teşekkürler!</h4>
                  <p className="text-gray-600">Mesajınız başarıyla gönderildi. En kısa sürede size dönüş yapacağız.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Adınız</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formState.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-posta Adresiniz</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    />
                  </div>
                  
                  <div className="mb-6">
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mesajınız</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formState.message}
                      onChange={handleInputChange}
                      rows="4"
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
                      required
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full btn btn-primary"
                  >
                    Gönder
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection 