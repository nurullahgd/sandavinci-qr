import { useInView } from 'react-intersection-observer'
import { FaCoffee, FaLeaf, FaUsers, FaHeart } from 'react-icons/fa'

const AboutSection = ({ id }) => {
  // Animation when section comes into view
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })
  
  // Features data
  const features = [
    {
      id: 1,
      icon: <FaCoffee className="h-10 w-10 text-primary-500" />,
      title: 'Özenle Seçilmiş Kahveler',
      description: 'Dünyanın farklı bölgelerinden özenle seçtiğimiz kahve çekirdeklerini uzman baristalarımız tarafından hazırlanıp sunuyoruz.'
    },
    {
      id: 2,
      icon: <FaLeaf className="h-10 w-10 text-primary-500" />,
      title: 'Taze Malzemeler',
      description: 'Tüm yiyeceklerimizi günlük olarak hazırlıyor ve en taze malzemeleri kullanmaya özen gösteriyoruz.'
    },
    {
      id: 3,
      icon: <FaUsers className="h-10 w-10 text-primary-500" />,
      title: 'Samimi Ortam',
      description: 'Arkadaşlarınızla buluşmak, çalışmak veya kitap okumak için ideal bir ortam sunuyoruz.'
    },
    {
      id: 4,
      icon: <FaHeart className="h-10 w-10 text-primary-500" />,
      title: 'Tutkuyla Yapıyoruz',
      description: 'Her bir fincan kahveyi ve her bir tabak yemeği tutkuyla hazırlıyor ve sunuyoruz.'
    }
  ]

  return (
    <section id={id} className="py-20 bg-white" ref={ref}>
      <div className="container">
        <div className={`text-center mb-16 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-primary-700 mb-4">Hakkımızda</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            2015 yılından beri kaliteli kahve ve lezzetli yemekler sunmaktayız. 
            Sandavinci Cafe'de misafirlerimize unutulmaz bir deneyim yaşatmak için çalışıyoruz.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {features.map((feature, index) => (
            <div 
              key={feature.id} 
              className={`flex items-start ${inView ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${200 + (index * 100)}ms` }}
            >
              <div className="flex-shrink-0 mt-1">
                {feature.icon}
              </div>
              <div className="ml-4">
                <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
                <p className="mt-2 text-gray-600">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Store Hours */}
        <div className={`mt-16 bg-primary-50 rounded-lg p-6 md:p-8 text-center ${inView ? 'animate-fade-in delay-400' : 'opacity-0'}`}>
          <h3 className="text-xl font-medium text-primary-700 mb-6">Çalışma Saatlerimiz</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <p className="font-medium text-gray-900">Pazartesi - Cuma</p>
              <p className="text-gray-600">08:00 - 22:00</p>
            </div>
            <div>
              <p className="font-medium text-gray-900">Cumartesi</p>
              <p className="text-gray-600">09:00 - 23:00</p>
            </div>
            <div>
              <p className="font-medium text-gray-900">Pazar</p>
              <p className="text-gray-600">10:00 - 22:00</p>
            </div>
            <div>
              <p className="font-medium text-gray-900">Resmi Tatiller</p>
              <p className="text-gray-600">10:00 - 21:00</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection 