import { useState, useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import MenuItem from './MenuItem'

// Menu data
const menuData = {
  kahve: [
    { id: 'k1', name: 'Türk Kahvesi', description: 'Geleneksel Türk kahvesi', price: 100, image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true },
    { id: 'k2', name: 'Damla Sakızlı Türk Kahvesi', description: 'Damla sakızı aromalı Türk kahvesi', price: 100, image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'k3', name: 'Double Türk Kahvesi', description: 'Double Türk kahvesi', price: 130, image: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sg13', name: 'Çay', description: 'Klasik siyah çay', price: 40, image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'k4', name: 'Espresso', description: 'Yoğun İtalyan espresso', price: 100, image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true },
    { id: 'k5', name: 'Double Espresso', description: 'İki kat espresso', price: 125, image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'k6', name: 'Risretto', description: 'Daha kısa sürede demlenen, yoğun espresso', price: 125, image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'k7', name: 'Espresso Macchiato', description: 'Espresso ve az miktar süt köpüğü', price: 125, image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'k8', name: 'Con Panna', description: 'Espresso ve krema', price: 140, image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true },
    { id: 'k10', name: 'Americano', description: 'Espresso ve sıcak su', price: 130, image: 'https://images.unsplash.com/photo-1551030173-122aabc4489c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'k11', name: 'Caffe Latte', description: 'Espresso ve buhar püskürtülmüş süt', price: 135, image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'k12', name: 'Cappuccino', description: 'Espresso, buhar püskürtülmüş süt ve süt köpüğü', price: 135, image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true },
    { id: 'k13', name: 'Cortado', description: 'Espresso ve az miktar buhar püskürtülmüş süt', price: 110, image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'k14', name: 'Flat White', description: 'Espresso ve kadifemsi süt', price: 135, image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'k15', name: 'Mocha', description: 'Espresso, çikolata ve buhar püskürtülmüş süt', price: 135, image: 'https://images.unsplash.com/photo-1527683040093-3a2b80ed1592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'k16', name: 'White Mocha', description: 'Espresso, beyaz çikolata ve buhar püskürtülmüş süt', price: 145, image: 'https://images.unsplash.com/photo-1527683040093-3a2b80ed1592?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'k17', name: 'Lotus Latte', description: 'Espresso, lotus bisküvi sosu ve süt', price: 150, image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true },
    { id: 'k18', name: 'Fıstıklı Latte', description: 'Espresso, fıstık sosu ve süt', price: 150, image: 'https://images.unsplash.com/photo-1570968915860-54d5c301fa9f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true },
    { id: 'k19', name: 'Karamel Macchiato', description: 'Espresso, karamel şurubu ve süt', price: 100, image: 'https://images.unsplash.com/photo-1579888071069-c107a6f79d82?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'k20', name: 'Sıcak Çikolata', description: 'Sıcak süt ve çikolata', price: 125, image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true },
    { id: 'k21', name: 'Beyaz Çikolata', description: 'Sıcak süt ve beyaz çikolata', price: 125, image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'k22', name: 'Salep', description: 'Tarçın ile servis edilir', price: 125, image: 'https://images.unsplash.com/photo-1610889556528-9a770e32642f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' }
  ],
  bitki: [
    { id: 'b1', name: 'Yeşil Çay', description: 'Taze demlenen yeşil çay', price: 100, image: 'https://images.unsplash.com/photo-1627435601361-ec25f5b1d0e5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'b2', name: 'Winner Tea', description: 'Özel karışım bitki çayı', price: 100, image: 'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'b3', name: 'Elma & Tarçın', description: 'Elma ve tarçın aromalı bitki çayı', price: 100, image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'b4', name: 'Ihlamur', description: 'Rahatlatıcı ıhlamur çayı', price: 100, image: 'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'b5', name: 'Ada Çayı', description: 'Geleneksel ada çayı', price: 100, image: 'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' }
  ],
  sicak: [
    { id: 's1', name: 'Çay', description: 'Siyah çay', price: 15, image: 'https://images.unsplash.com/photo-1576092768241-dec231879fc3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 's2', name: 'Bitki Çayı', description: 'Çeşitli bitki çayları', price: 25, image: 'https://images.unsplash.com/photo-1563911892437-1feda0179e1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 's3', name: 'Sıcak Çikolata', description: 'Krema ile servis edilir', price: 35, image: 'https://images.unsplash.com/photo-1542990253-0d0f5be5f0ed?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true },
    { id: 's4', name: 'Sahlep', description: 'Tarçın ile servis edilir', price: 35, image: 'https://images.unsplash.com/photo-1565267835939-07593027b791?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' }
  ],
  soguk: [
    { id: 'sg1', name: 'Ice Latte', description: 'Soğuk sütlü espresso', price: 135, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true },
    { id: 'sg2', name: 'Ice Americano', description: 'Soğuk sulu espresso', price: 125, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sg3', name: 'Ice Mocha', description: 'Soğuk çikolatalı espresso', price: 145, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sg4', name: 'Ice White Mocha', description: 'Soğuk beyaz çikolatalı espresso', price: 145, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sg5', name: 'Ice Zebra Mocha', description: 'Soğuk siyah ve beyaz çikolatalı espresso', price: 145, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sg6', name: 'Ice Flat White', description: 'Soğuk kadifemsi espresso', price: 150, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sg7', name: 'Ice Fıstık Latte', description: 'Soğuk fıstıklı espresso', price: 150, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true },
    { id: 'sg8', name: 'Ice Chai Tea Latte', description: 'Soğuk baharatlı çay latte', price: 135, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sg9', name: 'Fıstıklı Chai Tea Latte', description: 'Fıstıklı baharatlı çay latte', price: 135, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sg10', name: 'Frappe', description: 'Buzlu kahve köpüğü', price: 145, image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sg11', name: 'Affogato', description: 'Espresso ve dondurma', price: 140, image: 'https://images.unsplash.com/photo-1559561853-08451507cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sg12', name: 'Limonata', description: 'Taze sıkılmış limon', price: 125, image: 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true },
    { id: 'sg14', name: 'Su', description: 'Doğal kaynak suyu', price: 50, image: 'https://images.unsplash.com/photo-1548839140-29a749e1cf4d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sg15', name: 'Soda', description: 'Sade soda', price: 50, image: 'https://gizemtuncturk.com/wp-content/uploads/2023/08/Adsiz-tasarim-5.png' },
    { id: 'sg16', name: 'Churchill', description: 'Meyve aromalı içecek', price: 70, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW8bTIq-knug6W5609ywpf3Fa1YQbZccJgSQ&s' },
    { id: 'sg17', name: 'Ayran', description: 'Geleneksel ayran', price: 60, image: 'https://iis-akakce.akamaized.net/p.z?%2F%2Fimages%2Emigrosone%2Ecom%2Fsanalmarket%2Fproduct%2F11552597%2Fsutas%2Dayran%2D300%2Dml%2D5332e7%2D1650x1650%2Ejpg' },
    { id: 'sg18', name: 'Cola', description: 'Klasik cola', price: 60, image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sg19', name: 'Cola Zero', description: 'Şekersiz cola', price: 60, image: 'https://images.unsplash.com/photo-1554866585-cd94860890b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sg20', name: 'Fanta', description: 'Portakal aromalı gazlı içecek', price: 60, image: 'https://www.coca-cola.com/content/dam/onexp/tr/tr/brands/fanta/tr_fanta_prod_fanta-portakal_750x750.jpg' },
    { id: 'sg21', name: 'Sprite', description: 'Limon aromalı gazlı içecek', price: 60, image: 'https://images.migrosone.com/macrocenter/product/8030000/TUR5449000006288_A1NG_yan-881eaf.png' },
    { id: 'sg22', name: 'Cappy Meyve Suları', description: 'Çeşitli meyve suları', price: 60, image: 'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sg23', name: 'Redbull', description: 'Enerji içeceği', price: 120, image: 'https://t4.ftcdn.net/jpg/06/94/38/27/360_F_694382799_sYfpuh8EZH3eqM9T2bxSXgouin06tcKp.jpg', popular: true }
  ],
  smoothie: [
    { id: 'sm1', name: 'Muzlu Smoothie', description: 'Taze muz ve süt ile', price: 150, image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true },
    { id: 'sm2', name: 'Çilekli Smoothie', description: 'Taze çilek ve süt ile', price: 150, image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sm3', name: 'Nane Limon Smoothie', description: 'Nane ve limon aromalı', price: 150, image: 'https://images.unsplash.com/photo-1553530666-ba11a7da3888?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sm4', name: 'Banana Milkshake', description: 'Muzlu milkshake', price: 150, image: 'https://images.unsplash.com/photo-1568901839119-631418a3910d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sm5', name: 'Lotus Milkshake', description: 'Lotus bisküvili milkshake', price: 150, image: 'https://images.unsplash.com/photo-1568901839119-631418a3910d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true },
    { id: 'sm6', name: 'Ruby Milkshake', description: 'Ruby çikolatalı milkshake', price: 150, image: 'https://images.unsplash.com/photo-1568901839119-631418a3910d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sm7', name: 'Chocolate Milkshake', description: 'Çikolatalı milkshake', price: 150, image: 'https://images.unsplash.com/photo-1568901839119-631418a3910d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sm8', name: 'Karamel Milkshake', description: 'Karamelli milkshake', price: 150, image: 'https://images.unsplash.com/photo-1568901839119-631418a3910d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sm9', name: 'Vanilla Milkshake', description: 'Vanilyalı milkshake', price: 150, image: 'https://images.unsplash.com/photo-1568901839119-631418a3910d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sm10', name: 'Strawberry Milkshake', description: 'Çilekli milkshake', price: 150, image: 'https://images.unsplash.com/photo-1568901839119-631418a3910d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sm11', name: 'Nane Limon Frozen', description: 'Nane ve limon frozen', price: 150, image: 'https://www.happyartcafe.com/site/sized/100094/2024/03/nane-limon-frozen-1200x9000.webp' },
    { id: 'sm12', name: 'Elma Frozen', description: 'Elma aromalı frozen', price: 150, image: 'https://aurarestoran.com/wp-content/uploads/2023/06/KIVI-BOWL-BILSS.jpg' },
    { id: 'sm13', name: 'Yaban Mersini Frozen', description: 'Yaban mersini aromalı frozen', price: 150, image: 'https://images.unsplash.com/photo-1568901839119-631418a3910d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sm14', name: 'Coco Frozen', description: 'Hindistan cevizi aromalı frozen', price: 150, image: 'https://images.unsplash.com/photo-1568901839119-631418a3910d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sm15', name: 'Kivi Frozen', description: 'Kivi aromalı frozen', price: 150, image: 'https://images.unsplash.com/photo-1568901839119-631418a3910d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sm16', name: 'Red Berrys Frozen', description: 'Kırmızı meyveler aromalı frozen', price: 150, image: 'https://images.unsplash.com/photo-1568901839119-631418a3910d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true },
    { id: 'sm17', name: 'Passion Frozen', description: 'Passion fruit aromalı frozen', price: 150, image: 'https://images.unsplash.com/photo-1568901839119-631418a3910d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sm18', name: 'Frambuaz Frozen', description: 'Frambuaz aromalı frozen', price: 150, image: 'https://images.unsplash.com/photo-1568901839119-631418a3910d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sm19', name: 'Mango Frozen', description: 'Mango aromalı frozen', price: 150, image: 'https://images.unsplash.com/photo-1568901839119-631418a3910d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sm20', name: 'Çilek Frozen', description: 'Çilek aromalı frozen', price: 150, image: 'https://images.unsplash.com/photo-1568901839119-631418a3910d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sm21', name: 'Karadut Frozen', description: 'Karadut aromalı frozen', price: 150, image: 'https://images.unsplash.com/photo-1568901839119-631418a3910d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sm22', name: 'Muz Frozen', description: 'Muz aromalı frozen', price: 150, image: 'https://images.unsplash.com/photo-1568901839119-631418a3910d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 'sm23', name: 'Şeftali Frozen', description: 'Şeftali aromalı frozen', price: 150, image: 'https://images.unsplash.com/photo-1568901839119-631418a3910d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' }
  ],
  tatli: [
    { id: 't1', name: 'Lotus Fransız Ekler', description: 'Lotus bisküvi aromalı ekler pasta', price: 225, image: 'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true },
    { id: 't2', name: 'Tiramisu Fransız Ekler', description: 'Tiramisu aromalı ekler pasta', price: 200, image: 'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 't3', name: 'Klasik Fransız Ekler', description: 'Geleneksel ekler pasta', price: 200, image: 'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 't4', name: 'Çilekli Fransız Ekler', description: 'Çilek aromalı ekler pasta', price: 250, image: 'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 't5', name: 'Fıstıklı Cream Puff', description: 'Fıstık aromalı krema dolgulu pasta', price: 250, image: 'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 't6', name: 'Snickers Pasta', description: 'Snickers çikolata aromalı pasta', price: 225, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 't7', name: 'Tiramisu', description: 'İtalyan maskarpone peyniri ve kahve ile', price: 250, image: 'https://images.unsplash.com/photo-1571877227200-a0d98ea607e9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true },
    { id: 't8', name: 'Lotus Pasta', description: 'Lotus bisküvi aromalı pasta', price: 250, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true },
    { id: 't9', name: 'Mozaik Pasta', description: 'Klasik mozaik pasta', price: 200, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 't10', name: 'Marlenka', description: 'Bal ve ceviz ile hazırlanan geleneksel tatlı', price: 250, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 't11', name: 'Dondurma', description: 'Çeşitli aromalı dondurma', price: 200, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 't12', name: 'Cheesecake', description: 'Klasik New York usulü', price: 275, image: 'https://images.unsplash.com/photo-1567327613485-fbc7bf196198?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true },
    { id: 't13', name: 'Cup Tatlılar', description: 'Bardakta sunulan çeşitli tatlılar', price: 220, image: 'https://images.unsplash.com/photo-1563805042-7684c019e1cb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 't14', name: 'Sebastian', description: 'Özel pasta çeşidi', price: 275, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 't15', name: 'Sütlü Tatlılar', description: 'Muhallebi, sütlaç gibi sütlü tatlılar', price: 200, image: 'https://images.unsplash.com/photo-1603532648955-039310d9ed75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 't16', name: 'Waffle Bardak', description: 'Bardakta sunulan waffle', price: 200, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVpOX9NM2kCtpP31VbHQhBHhX_LTMJYkcP6A&s' },
    { id: 't17', name: 'Waffle Kase', description: 'Kasede sunulan waffle', price: 400, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS07ojccTGLhoBXNtV8CFw1premzBTCSL2MVw&s' },
    { id: 't18', name: 'Waffle', description: 'Klasik waffle', price: 270, image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4YuAZbKC25x3QjhdxA76pTVgg7husuyXPpw&s', popular: true },
    { id: 't19', name: 'Magnolia', description: 'Kırmızı meyveler ile', price: 220, image: 'https://images.unsplash.com/photo-1614707267537-b85aaf00c4b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true },
    { id: 't20', name: 'Special Tatlılar', description: 'Özel hazırlanan tatlı çeşitleri', price: 275, image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 't21', name: 'Hamur Tatlılar', description: 'Şekerpare, revani gibi hamur tatlıları', price: 250, image: 'https://images.unsplash.com/photo-1550617931-e17a7b70dce2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 't22', name: 'Geleneksel Tatlılar', description: 'Türk mutfağından geleneksel tatlılar', price: 220, image: 'https://images.unsplash.com/photo-1602351447937-745cb720612f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 't23', name: 'Suffle', description: 'Sıcak çikolatalı suffle', price: 200, image: 'https://media.istockphoto.com/id/135966211/tr/foto%C4%9Fraf/chocolate-souffles.jpg?s=612x612&w=0&k=20&c=Zs0T57lahgJDSZTHEXEYYi1pXdeyLuFXiGXrLuEwkWA=' },
    { id: 't24', name: 'Brownie', description: 'Sıcak çikolata sosu ile', price: 320, image: 'https://images.unsplash.com/photo-1564355808539-22fda35bed7e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true },
    { id: 't25', name: 'Kekler', description: 'Çeşitli ev yapımı kekler', price: 120, image: 'https://images.unsplash.com/photo-1563729784474-d77dbb933a9e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 't26', name: 'Çerez', description: 'Kuruyemiş karışımı', price: 150, image: 'https://adilefendidiyarbakir.com/resimler/urunler/resim/16901243130/cift-kisilik-cerez-resim-16901244159.webp' },
    { id: 't27', name: 'Dilim Cookie', description: 'Dilimlenmiş kurabiye', price: 100, image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 't28', name: 'Çilekli Cookie', description: 'Çilek parçacıklı kurabiye', price: 120, image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' }
  ],
  sandvic: [
    { id: 's1', name: 'Soğuk Sandviç XL', description: 'Ekstra büyük boy soğuk sandviç', price: 300, image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true },
    { id: 's2', name: 'Soğuk Sandviç L', description: 'Büyük boy soğuk sandviç', price: 250, image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 's3', name: 'Soğuk Sandviç M', description: 'Orta boy soğuk sandviç', price: 200, image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 's4', name: 'Soğuk Sandviç S', description: 'Küçük boy soğuk sandviç', price: 150, image: 'https://images.unsplash.com/photo-1553909489-cd47e0907980?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 's5', name: 'Lavaş Sandviç', description: 'Lavaş ekmeği ile hazırlanan sandviç', price: 200, image: 'https://images.unsplash.com/photo-1509722747041-616f39b57569?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80' },
    { id: 's6', name: 'Üç Peynirli', description: 'Üç çeşit peynirli sandviç', price: 225, image: 'https://images.unsplash.com/photo-1550507992-eb63ffee0847?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true },
    { id: 's7', name: 'Kruvasan', description: 'Tereyağlı kruvasan', price: 120, image: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80', popular: true }
  ]
}

const MenuSection = ({ id, activeCategory, categories, onCategoryChange }) => {
  const [visibleItems, setVisibleItems] = useState(6)
  const [showMore, setShowMore] = useState(true)
  
  // Reset visible items when category changes
  useEffect(() => {
    setVisibleItems(6)
    setShowMore(menuData[activeCategory].length > 6)
  }, [activeCategory])
  
  // Load more items
  const handleLoadMore = () => {
    const newVisibleItems = visibleItems + 6
    setVisibleItems(newVisibleItems)
    setShowMore(newVisibleItems < menuData[activeCategory].length)
  }
  
  // Animation when section comes into view
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true
  })

  const formatPrice = (price) => {
    return `₺${price}`
  }

  return (
    <section id={id} className="menu-section bg-white py-12 sm:py-16 md:py-20" ref={ref}>
      <div className="container">
        <div className={`text-center mb-8 sm:mb-10 ${inView ? 'animate-fade-in' : 'opacity-0'}`}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif text-primary-600 mb-4 sm:mb-6">Menümüz</h2>
          <p className="text-sm sm:text-base md:text-lg text-secondary-600 max-w-2xl mx-auto">
            Taze ve kaliteli malzemelerle hazırlanan lezzetli ürünlerimizi keşfedin
          </p>
        </div>
        
        {/* Category Tabs */}
        <div className={`flex flex-wrap justify-center gap-2 sm:gap-3 mb-8 sm:mb-10 md:mb-12 ${inView ? 'animate-fade-in delay-200' : 'opacity-0'}`}>
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-2 text-xs sm:text-sm md:text-base font-medium rounded-full transition-colors ${
                activeCategory === category.id
                  ? 'bg-primary-600 text-white'
                  : 'bg-white text-primary-600 border border-gray-200 hover:bg-gray-50'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
        
        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
          {menuData[activeCategory].slice(0, visibleItems).map((item, index) => (
            <div 
              key={item.id} 
              className={`bg-white rounded-lg shadow-sm overflow-hidden flex hover:shadow-md transition-all duration-300 ${inView ? 'animate-slide-up' : 'opacity-0'}`}
              style={{ animationDelay: `${300 + (100 * (index % 6))}ms` }}
            >
              <div className="relative w-1/3 min-w-[100px] h-24 sm:h-32 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                  loading="lazy"
                  width={100}
                  height={100}
                />
                {item.popular && (
                  <span className="absolute top-0 right-0 bg-primary-600 text-white text-xs px-1.5 py-0.5 sm:px-2 sm:py-1 font-medium">
                    Popüler
                  </span>
                )}
              </div>
              <div className="p-3 sm:p-4 flex flex-col justify-center flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-sm sm:text-base md:text-lg font-medium text-primary-600">{item.name}</h3>
                  <span className="font-bold text-sm sm:text-base text-secondary-700 ml-2">{formatPrice(item.price)}</span>
                </div>
                <p className="text-xs sm:text-sm text-secondary-600 mt-1">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Load More Button */}
        {showMore && (
          <div className="text-center mt-8 sm:mt-10 md:mt-12">
            <button
              onClick={handleLoadMore}
              className="px-4 py-2 sm:px-6 sm:py-2 border-2 border-primary-600 text-primary-600 text-sm sm:text-base font-medium rounded-full hover:bg-primary-50 transition-colors"
              aria-label="Daha fazla yükle"
            >
              Daha Fazla Göster
            </button>
          </div>
        )}
      </div>
    </section>
  )
}

export default MenuSection 