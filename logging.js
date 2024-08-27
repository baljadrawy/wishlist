// إعداد تسجيل الأخطاء وإرسالها إلى بوت تليجرام
const axios = require('axios');

const TELEGRAM_BOT_TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN';
const TELEGRAM_CHAT_ID = 'YOUR_TELEGRAM_CHAT_ID';

// تسجيل الأخطاء وإرسالها إلى تليجرام
function logError(message) {
    console.error(`Error: ${message}`);

    // إرسال الرسالة إلى بوت تليجرام
    axios.post(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        chat_id: TELEGRAM_CHAT_ID,
        text: `🚨 Error: ${message}`
    }).catch(err => console.error('Failed to send message to Telegram:', err.message));
}

module.exports = { logError };
