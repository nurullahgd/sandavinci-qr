# Sandavinci Cafe QR Menu

Bu proje, Sandavinci Cafe için QR kodla erişilebilen dijital bir menü uygulamasıdır. React ve Tailwind CSS kullanılarak modern, SEO dostu ve erişilebilir bir şekilde tasarlanmıştır.

## Özellikler

- ✅ Responsive tasarım (mobile-first)
- ✅ SEO optimizasyonu (semantic HTML, meta etiketler, yapılandırılmış veri)
- ✅ Erişilebilir arayüz (WCAG 2.1 AA standartlarına uyumlu)
- ✅ Performans optimizasyonu (lazy loading, verimli kod)
- ✅ Modern ve estetik UI/UX
- ✅ Kategori bazlı menü filtreleme
- ✅ Animasyonlar ve geçişler

## Teknolojiler

- React
- Tailwind CSS
- React Icons
- React Intersection Observer (animasyonlar için)
- Vite (build tool)

## Kurulum

Projeyi yerel ortamınızda çalıştırmak için aşağıdaki adımları izleyin:

1. Repo'yu klonlayın
```bash
git clone https://github.com/yourusername/sandavinci-qr.git
cd sandavinci-qr
```

2. Bağımlılıkları yükleyin
```bash
npm install
```

3. Geliştirme sunucusunu başlatın
```bash
npm run dev
```

4. Tarayıcınızda [http://localhost:5173](http://localhost:5173) adresine gidin

## Dağıtım (Deploy)

Projeyi production ortamına deploy etmek için:

```bash
npm run build
```

Bu komut, `dist` klasöründe optimize edilmiş, production-ready dosyaları oluşturacaktır. Bu dosyaları herhangi bir statik site hostinginde (Netlify, Vercel, GitHub Pages vb.) yayınlayabilirsiniz.

## QR Kod Oluşturma

Menüye hızlı erişim için QR kod oluşturmak için şu adımları izleyin:

1. Sitenizi yayınlayın ve URL'ini alın (örn. `https://sandavinci-cafe.com/menu`)
2. Herhangi bir QR kod oluşturma servisi kullanarak (örn. [QR Code Generator](https://www.qr-code-generator.com/)) bu URL için QR kod oluşturun
3. Oluşturulan QR kodu masalara yerleştirin

## Lisans

MIT 