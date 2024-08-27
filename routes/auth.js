// مسارات التسجيل وتسجيل الدخول
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { logError } = require('../logging'); // استيراد وظيفة تسجيل الأخطاء

const router = express.Router();

// مسار التسجيل
router.post('/register', async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({ username, email, password: hashedPassword });
        await user.save();
        res.status(201).json({ message: 'تم التسجيل بنجاح' });
    } catch (error) {
        logError(error.message); // تسجيل الخطأ
        res.status(500).json({ error: 'حدث خطأ أثناء التسجيل' });
    }
});

// مسار تسجيل الدخول
router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(400).json({ message: 'بيانات اعتماد غير صحيحة' });
        }
        const token = jwt.sign({ userId: user._id, role: user.role }, 'secret-key', { expiresIn: '1h' });
        res.json({ token, message: 'تم تسجيل الدخول بنجاح' });
    } catch (error) {
        logError(error.message); // تسجيل الخطأ
        res.status(500).json({ error: 'حدث خطأ أثناء تسجيل الدخول' });
    }
});

module.exports = router;
