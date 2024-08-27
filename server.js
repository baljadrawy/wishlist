// إعداد الخادم والتطبيق
const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan'); // إضافة تسجيل الطلبات
const authRoutes = require('./routes/auth');
const wishlistRoutes = require('./routes/wishlist');
const adminRoutes = require('./routes/admin');
const { logError } = require('./logging'); // استيراد وظيفة تسجيل الأخطاء

const app = express();
app.use(express.json());
app.use(morgan('combined')); // استخدام مورجان لتسجيل الطلبات
app.use('/api/auth', authRoutes);
app.use('/api/wishlist', wishlistRoutes);
app.use('/api/admin', adminRoutes);
app.use(express.static('public'));

// الاتصال بقاعدة البيانات
mongoose.connect('mongodb://localhost/wishlist', {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    app.listen(3000, () => console.log('الخادم يعمل على http://localhost:3000'));
}).catch(err => {
    logError(err.message); // تسجيل الأخطاء عند الفشل في الاتصال بقاعدة البيانات
});
