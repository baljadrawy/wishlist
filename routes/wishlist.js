// مسارات قوائم الأمنيات
const express = require('express');
const Wishlist = require('../models/Wishlist');
const Item = require('../models/Item');
const { authMiddleware } = require('../middleware/auth');
const { logError } = require('../logging'); // استيراد وظيفة تسجيل الأخطاء

const router = express.Router();

// عرض قائمة الأمنيات للمستخدم
router.get('/:userId', authMiddleware, async (req, res) => {
    try {
        const wishlist = await Wishlist.findOne({ userId: req.params.userId }).populate('items');
        if (!wishlist) return res.status(404).json({ message: 'لم يتم العثور على قائمة الأمنيات' });
        res.json(wishlist);
    } catch (err) {
        logError(err.message); // تسجيل الخطأ
        res.status(500).json({ error: 'حدث خطأ أثناء عرض قائمة الأمنيات' });
    }
});

// إضافة عنصر جديد إلى قائمة الأمنيات
router.post('/:userId/add', authMiddleware, async (req, res) => {
    try {
        const { title, description, image } = req.body;
        const item = new Item({ title, description, image });
        await item.save();

        let wishlist = await Wishlist.findOne({ userId: req.params.userId });
        if (!wishlist) {
            wishlist = new Wishlist({ userId: req.params.userId, items: [item._id] });
        } else {
            wishlist.items.push(item._id);
        }
        await wishlist.save();
        res.status(201).json({ message: 'تمت إضافة العنصر إلى قائمة الأمنيات' });
    } catch (err) {
        logError(err.message); // تسجيل الخطأ
        res.status(500).json({ error: 'حدث خطأ أثناء إضافة العنصر' });
    }
});

module.exports = router;
