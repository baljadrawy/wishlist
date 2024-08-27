// تعريف نموذج المستخدمين (User)
const mongoose = require('mongoose');

// إنشاء مخطط البيانات للمستخدمين
const userSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true }, // اسم المستخدم
    email: { type: String, required: true, unique: true }, // البريد الإلكتروني
    password: { type: String, required: true }, // كلمة المرور
    role: { type: String, default: 'user' }, // دور المستخدم (افتراضي: مستخدم عادي)
});

// تصدير النموذج لاستخدامه في مكان آخر
module.exports = mongoose.model('User', userSchema);
