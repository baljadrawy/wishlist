// تعريف نموذج العناصر (Item)
const mongoose = require('mongoose');

// إنشاء مخطط البيانات للعناصر
const itemSchema = new mongoose.Schema({
    title: { type: String, required: true }, // عنوان العنصر
    description: String, // وصف العنصر
    image: String, // رابط صورة العنصر
});

// تصدير النموذج لاستخدامه في مكان آخر
module.exports = mongoose.model('Item', itemSchema);
