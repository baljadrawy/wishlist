// تعريف نموذج قائمة الأمنيات (Wishlist)
const mongoose = require('mongoose');

// إنشاء مخطط البيانات لقوائم الأمنيات
const wishlistSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // معرف المستخدم
    items: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Item' }], // العناصر المرتبطة بالقائمة
});

// تصدير النموذج لاستخدامه في مكان آخر
module.exports = mongoose.model('Wishlist', wishlistSchema);
