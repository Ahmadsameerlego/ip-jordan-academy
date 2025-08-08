# IB JORDAN Network - الصفحة الرئيسية

## وصف المشروع
هذا مشروع موقع IB JORDAN Network المصمم بالكامل باستخدام HTML, CSS, و JavaScript. الموقع يتضمن جميع العناصر المطلوبة من التصميم الأصلي مع إضافة تفاعلات وحركات متقدمة.

## المميزات

### 🎨 التصميم
- **Header ثابت** مع شعار وملاحة
- **Dropdown menu** لزر "Join us"
- **Hero section** مع slider تلقائي
- **About section** مع صورة ونص
- **Unique features section** مع animations

### ⚡ التفاعلات
- **Slider تلقائي** في Hero section (يتغير كل 5 ثواني)
- **Animations** للعناصر عند التمرير
- **Hover effects** على الأزرار والبطاقات
- **Smooth scrolling** للروابط
- **Header يختفي** عند التمرير للأسفل

### 📱 التجاوب
- تصميم متجاوب لجميع أحجام الشاشات
- تحسين للهواتف والأجهزة اللوحية

## كيفية التشغيل

### الطريقة الأولى: فتح الملف مباشرة
1. انسخ جميع الملفات إلى مجلد واحد
2. افتح ملف `index.html` في المتصفح

### الطريقة الثانية: استخدام خادم محلي
```bash
# باستخدام Python
python -m http.server 8000

# أو باستخدام Node.js
npx serve .

# أو باستخدام PHP
php -S localhost:8000
```

ثم افتح `http://localhost:8000` في المتصفح

## هيكل الملفات

```
├── index.html          # الملف الرئيسي
├── styles.css          # ملف التصميم
├── script.js           # ملف التفاعلات
└── README.md           # هذا الملف
```

## المكونات الرئيسية

### Header
- شعار "IB JORDAN Network" مع أيقونة
- قائمة ملاحة مع 6 روابط
- زر Login
- زر Join us مع dropdown menu

### Hero Section
- 3 شرائح متحركة تلقائياً
- عنوان ووصف مختلف لكل شريحة
- أزرار للتفاعل
- نقاط للتنقل بين الشرائح

### About Section
- صورة placeholder على اليسار
- نص "About Jordan IB Network" على اليمين
- 3 فقرات من النص

### Unique Features Section
- 3 بطاقات مع أيقونات
- animations عند التمرير
- hover effects متقدمة

## الألوان المستخدمة

- **الأخضر الرئيسي**: `#4CAF50`
- **الرمادي الداكن**: `#333`
- **الرمادي الفاتح**: `#f5f5f5`
- **الأبيض**: `#ffffff`

## التقنيات المستخدمة

- **HTML5** للهيكل
- **CSS3** للتصميم والـ animations
- **JavaScript ES6+** للتفاعلات
- **Font Awesome** للأيقونات
- **CSS Grid & Flexbox** للتخطيط

## المميزات المتقدمة

### Animations
- Fade-in animations للعناصر
- Slide transitions للـ hero
- Hover effects للأزرار
- Scroll-triggered animations

### Accessibility
- دعم لوحة المفاتيح للـ dropdown
- ARIA labels للأيقونات
- Smooth scrolling
- Focus indicators

### Performance
- Optimized CSS animations
- Efficient JavaScript classes
- Lazy loading للـ animations
- Minimal DOM manipulation

## التخصيص

يمكنك تخصيص الموقع بسهولة:

### تغيير الألوان
عدّل متغيرات CSS في ملف `styles.css`:
```css
:root {
    --primary-color: #4CAF50;
    --dark-gray: #333;
    --light-gray: #f5f5f5;
}
```

### إضافة شرائح جديدة
أضف عناصر `<div class="slide">` في Hero section

### تغيير النصوص
عدّل النصوص مباشرة في ملف `index.html`

## الدعم

إذا واجهت أي مشاكل أو تحتاج إلى تعديلات، يمكنك:
1. فحص console المتصفح للأخطاء
2. التأكد من أن جميع الملفات في نفس المجلد
3. استخدام متصفح حديث يدعم ES6+

## الترخيص

هذا المشروع مفتوح المصدر ومتاح للاستخدام الشخصي والتجاري. 