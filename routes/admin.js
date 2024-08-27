// مسارات لوحة الإدارة
const express = require('express');
const User = require('../models/User');
const { authMiddleware, adminMiddleware } = require('../middleware/auth');
const { logError } = require('../logging'); // استيراد وظيفة تسجيل الأخطاء

const router = express.Router();

// عرض جميع المستخدمين (للأدمن فقط)
router.get('/users', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (err) {
        logError(err.message); // تسجيل الخطأ
        res.status(500).json({ error: 'حدث خطأ أثناء عرض المستخدمين' });
    }
});

// حذف مستخدم (للأدمن فقط)
router.delete('/users/:userId', authMiddleware, adminMiddleware, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.userId);
        res.json({ message: 'تم حذف المستخدم بنجاح' });
    } catch (err) {
        logError(err.message); // تسجيل الخطأ
        res.status(500).json({ error: 'حدث خطأ أثناء حذف المستخدم' });
    }
});

module.exports = router;
