# Slim Moms 🥗

Slim Moms, kullanıcıların günlük kalori ihtiyacını hesaplayabildiği, yedikleri ürünleri takip edebildiği ve kişisel beslenme günlüğünü yönetebildiği full stack bir web uygulamasıdır.

Proje React tabanlı frontend ve Node.js + Express tabanlı backend mimarisiyle geliştirilmiştir. Kullanıcı kimlik doğrulama, günlük kalori hesaplama, ürün arama, diary yönetimi, protected route yapısı ve responsive kullanıcı arayüzü gibi temel özellikleri içerir.

---

## 📌 Proje Amacı

Bu projenin temel amacı, kullanıcıların günlük beslenme süreçlerini daha düzenli takip edebilmesini sağlamaktır.

Kullanıcılar uygulama üzerinden:

- Günlük kalori ihtiyacını hesaplayabilir.
- Kayıt olabilir ve giriş yapabilir.
- Giriş yaptıktan sonra kişisel diary sayfasına erişebilir.
- Tükettiği ürünleri günlük listesine ekleyebilir.
- Eklenen ürünleri silebilir.
- Kullanıcı oturumunu sürdürebilir.
- Logout işlemi yapabilir.
- Responsive arayüz sayesinde uygulamayı farklı ekran boyutlarında kullanabilir.

---

## 🚀 Canlı Demo

### Frontend Deploy

https://slim-moms-wheat.vercel.app/

### Backend Deploy

https://slim-moms-2q85.onrender.com/

> Not: Backend Render free tier üzerinde çalıştığı için ilk isteklerde kısa süreli gecikme yaşanabilir.

---

## 🔗 GitHub Repository

https://github.com/hilmisafak/slim-moms

---

## 🧱 Proje Mimarisi

Proje iki ana bölümden oluşur:

```text
slim-moms/
├── backend/
└── frontend/
```

### Backend

Backend tarafı REST API mantığıyla geliştirilmiştir.  
Express.js kullanılarak route, controller, service, middleware, model ve validation katmanları ayrılmıştır.

### Frontend

Frontend tarafı React.js ile geliştirilmiştir.  
Sayfa yönetimi React Router DOM ile, global state yönetimi ise Redux Toolkit ile yapılmaktadır.

---

## 🛠 Kullanılan Teknolojiler

## Frontend Teknolojileri

- React.js
- Vite
- Redux Toolkit
- React Redux
- Redux Persist
- React Router DOM
- Axios
- Formik
- React Hook Form
- Yup
- React Toastify
- CSS Modules
- JavaScript

---

## Backend Teknolojileri

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT Authentication
- bcrypt
- Joi
- dotenv
- cors
- nodemon
- Swagger

---

## 📁 Proje Klasör Yapısı

```text
slim-moms/
├── backend/
│   ├── src/
│   │   ├── constants/
│   │   ├── controllers/
│   │   ├── db/
│   │   │   └── models/
│   │   ├── middlewares/
│   │   ├── routers/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── validation/
│   │   ├── index.js
│   │   └── server.js
│   ├── docs/
│   ├── .env.example
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── redux/
│   │   ├── services/
│   │   ├── utils/
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── .env.example
│   └── package.json
│
└── README.md
```

---

## ⚙️ Kurulum

Projeyi lokal ortamda çalıştırmak için aşağıdaki adımları takip edebilirsiniz.

---

## 1. Repository Klonlama

```bash
git clone https://github.com/hilmisafak/slim-moms.git
cd slim-moms
```

---

## 2. Backend Kurulumu

```bash
cd backend
npm install
```

Backend için `.env.example` dosyasını kopyalayarak `.env` dosyası oluşturun.

```bash
cp .env.example .env
```

Windows PowerShell için:

```bash
copy .env.example .env
```

---

## 3. Backend `.env` Ayarları

Backend tarafında örnek `.env` yapısı:

```env
PORT=5000
MONGODB_USER=your_mongodb_user
MONGODB_PASSWORD=your_mongodb_password
MONGODB_URL=cluster0.audyhuc.mongodb.net
MONGODB_DB=slim-moms-db
JWT_SECRET=your_jwt_secret
JWT_EXPIRES_IN=7d
```

---

## 4. Backend Çalıştırma

Development modunda çalıştırmak için:

```bash
npm run dev
```

Production modunda çalıştırmak için:

```bash
npm start
```

Backend varsayılan olarak şu adreste çalışır:

```text
http://localhost:5000
```

---

## 5. Frontend Kurulumu

Yeni terminal açın ve proje kök dizininden frontend klasörüne geçin:

```bash
cd frontend
npm install
```

Frontend için `.env.example` dosyasını kopyalayarak `.env` dosyası oluşturun.

```bash
cp .env.example .env
```

Windows PowerShell için:

```bash
copy .env.example .env
```

---

## 6. Frontend `.env` Ayarları

Frontend tarafında örnek `.env` yapısı:

```env
VITE_API_URL=http://localhost:5000
```

Production için backend deploy adresi kullanılabilir:

```env
VITE_API_URL=https://slim-moms-2q85.onrender.com
```

---

## 7. Frontend Çalıştırma

```bash
npm run dev
```

Frontend varsayılan olarak şu adreste çalışır:

```text
http://localhost:5173
```

---

## 📜 NPM Komutları

## Backend Komutları

```bash
npm run dev
npm start
npm run lint
```

### Açıklama

| Komut          | Açıklama                                           |
| -------------- | -------------------------------------------------- |
| `npm run dev`  | Backend uygulamasını development modunda başlatır. |
| `npm start`    | Backend uygulamasını production modunda başlatır.  |
| `npm run lint` | Backend kodlarını lint kontrolünden geçirir.       |

---

## Frontend Komutları

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

### Açıklama

| Komut             | Açıklama                                              |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Frontend uygulamasını development modunda başlatır.   |
| `npm run build`   | Production build oluşturur.                           |
| `npm run preview` | Oluşturulan production build’i lokal ortamda önizler. |
| `npm run lint`    | Frontend kodlarını lint kontrolünden geçirir.         |

---

## 🔐 Authentication Yapısı

Projede kullanıcı kimlik doğrulama sistemi JWT ve session mantığıyla çalışmaktadır.

Auth akışı şu yapıdadır:

```text
Router → Controller → Service → Model
```

### Katmanların Görevleri

| Katman     | Görev                                              |
| ---------- | -------------------------------------------------- |
| Router     | URL ile controller eşleşmesini sağlar.             |
| Controller | Request alır, validation yapar ve service çağırır. |
| Service    | İş mantığını yönetir.                              |
| Model      | MongoDB veri şemasını tanımlar.                    |
| Validation | Request body alanlarını kontrol eder.              |
| Middleware | Protected route erişimini doğrular.                |

---

## 🔑 Auth Endpointleri

Backend tarafında auth işlemleri `/api/auth` altında çalışır.

| Method | Endpoint             | Açıklama                          | Protected |
| ------ | -------------------- | --------------------------------- | --------- |
| POST   | `/api/auth/register` | Yeni kullanıcı kaydı oluşturur.   | Hayır     |
| POST   | `/api/auth/login`    | Kullanıcı girişi yapar.           | Hayır     |
| GET    | `/api/auth/current`  | Mevcut kullanıcı bilgisini döner. | Evet      |
| POST   | `/api/auth/logout`   | Kullanıcı oturumunu sonlandırır.  | Evet      |

---

## Register Request Örneği

```http
POST /api/auth/register
Content-Type: application/json
```

```json
{
  "name": "Test User",
  "email": "test@example.com",
  "password": "Test1234"
}
```

---

## Register Response Örneği

```json
{
  "status": 201,
  "message": "Successfully registered user",
  "data": {
    "user": {
      "_id": "user_id",
      "name": "Test User",
      "email": "test@example.com"
    }
  }
}
```

---

## Login Request Örneği

```http
POST /api/auth/login
Content-Type: application/json
```

```json
{
  "email": "test@example.com",
  "password": "Test1234"
}
```

---

## Login Response Örneği

```json
{
  "status": 200,
  "message": "Successfully logged in",
  "data": {
    "user": {
      "_id": "user_id",
      "name": "Test User",
      "email": "test@example.com"
    },
    "token": "access_token",
    "refreshToken": "refresh_token"
  }
}
```

---

## Current User Request Örneği

```http
GET /api/auth/current
Authorization: Bearer access_token
```

---

## Logout Request Örneği

```http
POST /api/auth/logout
Authorization: Bearer access_token
```

---

## 🧩 Backend Modülleri

## Auth Modülü

Kullanıcı kayıt, giriş, çıkış ve mevcut kullanıcı kontrolünü yönetir.

İlgili dosyalar:

```text
backend/src/db/models/user.js
backend/src/db/models/session.js
backend/src/validation/auth.js
backend/src/services/auth.js
backend/src/controllers/auth.js
backend/src/routers/auth.js
backend/src/middlewares/authenticate.js
backend/docs/auth.swagger.js
```

### Auth Özellikleri

- Kullanıcı kayıt işlemi
- Kullanıcı giriş işlemi
- JWT access token üretimi
- Refresh token üretimi
- Session kaydı oluşturma
- Logout sırasında session silme
- Protected route kontrolü
- Current user bilgisi alma
- Joi validation
- Swagger dokümantasyonu

---

## Diary Modülü

Kullanıcıların günlük tükettikleri ürünleri yönetmesini sağlar.

Temel işlevler:

- Günlük ürün listesi alma
- Diary kaydı oluşturma
- Diary kaydı silme
- Tarihe göre diary listeleme

Backend route yapısı:

```text
/api/diary
```

---

## Product Modülü

Ürün arama ve kalori hesaplama işlemlerini yönetir.

Temel işlevler:

- Ürün arama
- Günlük kalori hesaplama
- Tavsiye edilmeyen ürün listesini döndürme

Backend route yapısı:

```text
/api/product
```

Örnek endpoint:

```text
/api/product/calculate-daily-calories
/api/product/search?q=apple
```

---

## 🖥 Frontend Modülleri

## Auth

Kullanıcı kayıt, giriş, çıkış ve oturum bilgisini yönetir.

Özellikler:

- Register formu
- Login formu
- Logout işlemi
- Token saklama
- Redux Persist ile oturum devamlılığı
- Protected route kontrolü
- Sayfa yenilemede kullanıcı oturumunu geri yükleme

---

## Calculator

Kullanıcının günlük kalori ihtiyacını hesaplar.

Özellikler:

- Kullanıcı bilgilerine göre kalori hesaplama
- Tavsiye edilmeyen ürünleri listeleme
- API üzerinden backend ile iletişim

---

## Diary

Kullanıcının günlük tüketim kayıtlarını yönetir.

Özellikler:

- Ürün arama
- Ürün ekleme
- Ürün silme
- Günlük kalori takibi
- Tarihe göre listeleme

---

## Global State

Uygulama genelindeki ortak durumları yönetir.

Örnek:

- Loading state
- Error state
- Ortak UI durumları

---

## 🧭 Route Yapısı

Frontend tarafında temel route yapısı şu şekildedir:

| Route         | Açıklama                       | Erişim                      |
| ------------- | ------------------------------ | --------------------------- |
| `/login`      | Kullanıcı giriş sayfası        | Public                      |
| `/register`   | Kullanıcı kayıt sayfası        | Public                      |
| `/diary`      | Günlük beslenme sayfası        | Private                     |
| `/calculator` | Kalori hesaplama sayfası       | Private                     |
| `*`           | Bilinmeyen route yönlendirmesi | Login sayfasına yönlendirir |

---

## 🔒 Protected Route Mantığı

Private route’lara erişmek için kullanıcının giriş yapmış olması gerekir.

Kullanıcı giriş yapmamışsa:

```text
/diary veya /calculator → /login
```

Kullanıcı giriş yaptıysa:

```text
/login veya /register → /diary
```

---

## 🔄 Token ve Session Mantığı

Bu projede sadece JWT üretmek yeterli değildir. Token bilgisi backend tarafında session koleksiyonunda da tutulur.

Akış:

1. Kullanıcı login olur.
2. Backend access token ve refresh token üretir.
3. Tokenlar session koleksiyonuna kaydedilir.
4. Frontend access token bilgisini saklar.
5. Protected route isteklerinde `Authorization: Bearer token` header’ı gönderilir.
6. Backend gelen token’ı session koleksiyonunda arar.
7. Token geçerliyse kullanıcı bilgisi `req.user` içine aktarılır.
8. Logout işleminde ilgili session kaydı silinir.

---

## 🧪 Test Edilmesi Gereken Temel Akışlar

## Authentication Testleri

- Kullanıcı kayıt olabiliyor mu?
- Kullanıcı giriş yapabiliyor mu?
- Hatalı şifre durumunda hata mesajı geliyor mu?
- Logout işlemi çalışıyor mu?
- Token localStorage/persist içinde saklanıyor mu?
- Sayfa yenilendiğinde kullanıcı oturumu korunuyor mu?
- Logout sonrası protected route erişimi engelleniyor mu?

---

## Calculator Testleri

- Günlük kalori hesaplama çalışıyor mu?
- Form validasyonları doğru çalışıyor mu?
- Boş alanlar hata veriyor mu?
- API isteği doğru endpoint’e gidiyor mu?
- Tavsiye edilmeyen ürünler listeleniyor mu?

---

## Diary Testleri

- Ürün arama çalışıyor mu?
- Ürün listeye ekleniyor mu?
- Eklenen ürün silinebiliyor mu?
- Tarihe göre diary kayıtları geliyor mu?
- Boş liste durumu doğru görünüyor mu?
- Loading ve error durumları doğru çalışıyor mu?

---

## Responsive Testleri

- Mobile görünüm kontrol edilmeli.
- Tablet görünüm kontrol edilmeli.
- Desktop görünüm kontrol edilmeli.
- Navbar taşma yapmamalı.
- Form elemanları ekran dışına çıkmamalı.
- Buton ve input hizalamaları bozulmamalı.

---

## Cross-Browser Testleri

Test edilmesi önerilen tarayıcılar:

- Google Chrome
- Mozilla Firefox
- Microsoft Edge

---

## 🧪 QA İçin Önerilen Test Hesabı

```text
Email: test@test.com
Password: Test1234
```

> Not: Test hesabı production database içinde mevcut değilse register ekranından yeni bir kullanıcı oluşturulabilir.

---

## 🧾 Swagger Dokümantasyonu

Backend tarafında API dokümantasyonu için Swagger yapısı kullanılmaktadır.

Swagger dosyaları iki bölümden oluşur:

```text
backend/src/middlewares/swaggerDocs.js
backend/docs/*.js
```

Auth endpoint dokümantasyonu:

```text
backend/docs/auth.swagger.js
```

Swagger ile görülebilecek bilgiler:

- Endpoint adresleri
- HTTP method bilgileri
- Request body yapıları
- Response body yapıları
- Error response yapıları
- Bearer token gerektiren endpointler

---

## ✅ Stabilizasyon Sürecinde Yapılan Kontroller

Proje merge sonrası stabilizasyon sürecinden geçirilmiştir.

Yapılan başlıca kontroller:

- Frontend route yapısı bağlandı.
- Public route’lar düzenlendi.
- Private route’lar düzenlendi.
- `App.jsx` route akışı kuruldu.
- Frontend lint kontrolü yapıldı.
- Frontend production build kontrolü yapıldı.
- Eksik selector import hatası giderildi.
- Olmayan asset referansı kaldırıldı.
- Frontend environment dosyaları kontrol edildi.
- Diary API endpoint path’leri backend ile uyumlu hale getirildi.
- Calculator API endpoint path’i backend ile uyumlu hale getirildi.
- Product search endpoint path’i backend ile uyumlu hale getirildi.
- Logout işlemi Redux operasyonuna bağlandı.
- Kullanıcı adı Redux state üzerinden okunacak hale getirildi.
- PersistGate uygulama ağacını saracak şekilde düzenlendi.
- Auth refresh operasyonu eklendi.
- Uygulama açılışında refreshUser çağrısı eklendi.
- Global loader state bug’ı giderildi.
- Console/debug kalıntıları temizlendi.
- Diary product delete akışı backend endpoint beklentisiyle uyumlu hale getirildi.

---

## 🐞 Bilinen Notlar

- Render free tier sebebiyle backend ilk istekte gecikebilir.
- Backend için Node.js 20 kullanılması önerilir.
- Node.js 24 altında MongoDB Atlas SRV/DNS çözümleme problemi yaşanabilir.
- Local test sırasında MongoDB bağlantı bilgilerinin doğru olduğundan emin olunmalıdır.
- Production ortamında CORS ayarları deploy adresine göre sınırlandırılabilir.
- Refresh token endpoint’i proje kapsamına göre ayrıca geliştirilebilir.

---

## 🧪 Build ve Lint Kontrolü

Frontend için:

```bash
cd frontend
npm run lint
npm run build
```

Backend için:

```bash
cd backend
npm run lint
```

Stabilizasyon sürecinde frontend lint ve build kontrolleri başarılı şekilde tamamlanmıştır.

---

## 🧑‍💻 Geliştirici Notları

Proje geliştirme sürecinde branch bazlı çalışma yapılmıştır.

Önerilen çalışma akışı:

```bash
git checkout main
git pull origin main
git checkout -b feature/new-feature
```

Değişiklik sonrası:

```bash
git add .
git commit -m "Add new feature"
git push origin feature/new-feature
```

---

## 🌿 Branch ve Takım Çalışma Kuralları

- `main` branch doğrudan kullanılmamalıdır.
- Her geliştirici kendi feature branch’i üzerinde çalışmalıdır.
- Pull request açılmadan önce lint ve build kontrolü yapılmalıdır.
- Code review sonrası merge işlemi yapılmalıdır.
- Merge sonrası temel kullanıcı akışları tekrar test edilmelidir.

---

## 📦 Deploy Bilgileri

### Frontend

Frontend Vercel üzerinde deploy edilmiştir.

```text
https://slim-moms-wheat.vercel.app/
```

### Backend

Backend Render üzerinde deploy edilmiştir.

```text
https://slim-moms-2q85.onrender.com/
```

---

## 📋 QA Teslim Notları

QA tester aşağıdaki kontrolleri yapmalıdır:

- Proje deploy linkleri üzerinden açılıyor mu?
- Register işlemi çalışıyor mu?
- Login işlemi çalışıyor mu?
- Logout işlemi çalışıyor mu?
- Calculator işlemi çalışıyor mu?
- Diary ürün ekleme çalışıyor mu?
- Diary ürün silme çalışıyor mu?
- Protected route sistemi doğru çalışıyor mu?
- Mobile responsive yapı düzgün mü?
- Console error var mı?
- Network istekleri doğru endpointlere gidiyor mu?
- Backend ilk istekte gecikse bile sonrasında cevap veriyor mu?

---

## 📄 Lisans

Bu proje eğitim ve final proje çalışması kapsamında geliştirilmiştir.

---

## 👤 Geliştirici

**Hilmi Şafak**

GitHub: https://github.com/hilmisafak

---

## ✅ Proje Durumu

- Frontend tamamlandı.
- Backend tamamlandı.
- Deploy işlemleri tamamlandı.
- Auth akışı tamamlandı.
- Diary temel akışı tamamlandı.
- Calculator temel akışı tamamlandı.
- QA test süreci başlatılabilir.
