// تعريف وظائف التحقق من الهوية والأدمن
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const { logError } = require('../logging'); // استيراد وظيفة تسجيل الأخطاء

// وظيفة التحقق من الهوية
const authMiddleware = (req, res, next) => {
    const token = req.header('Authorization').replace('Bearer ', '');
    if (!token) return res.status(401).json({ message: 'لم يتم تقديم رمز الدخول' });

    try {
        const decoded = jwt.verify(token, 'secret-key');
        req.user = decoded;
        next();
    } catch (err) {
        logError(err.message); // تسجيل الخطأ
        res.status(401).json({ message: 'رمز الدخول غير صالح' });
    }
};

// وظيفة التحقق من دور الأدمن
const adminMiddleware = async (req, res, next) => {
    const user = await User.findById(req.user.userId);
    if (user.role !== 'admin') {
        return res.status(403).json({ message: 'ليس لديك صلاحيات الوصول' });
    }
    next();
};

module.exports = { authMiddleware, adminMiddleware };
