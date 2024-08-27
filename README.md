
markdown
Copy code
# Wishlist App

تطبيق ويب لإدارة قوائم الأمنيات يتيح للمستخدمين إنشاء قوائم أمنياتهم الشخصية، وإضافة العناصر إليها، ومشاركتها مع الآخرين. يحتوي التطبيق على لوحة إدارة للمشرفين بالإضافة إلى نظام تسجيل وتنبيهات عن طريق بوت تليجرام.

## المتطلبات

لتشغيل هذا المشروع، ستحتاج إلى تثبيت التالي:

- Node.js (الإصدار 12 أو أحدث)
- MongoDB (لإدارة قاعدة البيانات)
- حساب تليجرام لإعداد بوت التنبيهات

## الإعداد

1. **استنساخ المشروع:**

   ```bash
   git clone https://github.com/baljadrawy/wishlist-app.git
   cd wishlist-app
## تثبيت التبعيات:

تأكد من أنك داخل المجلد الرئيسي للمشروع، ثم قم بتثبيت التبعيات باستخدام npm:

```bash
npm install
## إعداد قاعدة البيانات:

تأكد من أن MongoDB تعمل على جهازك. ستقوم بإنشاء قاعدة البيانات تلقائيًا عند تشغيل الخادم.

إعداد بوت تليجرام:

قم بإنشاء بوت جديد باستخدام @BotFather على تليجرام واحصل على TOKEN.
احصل على CHAT_ID الخاص بك أو الخاص بالمجموعة التي ترغب في إرسال التنبيهات إليها.
قم بتعديل ملف logging.js بالقيم الصحيحة لـ TELEGRAM_BOT_TOKEN و TELEGRAM_CHAT_ID:

```javascript

const TELEGRAM_BOT_TOKEN = 'YOUR_TELEGRAM_BOT_TOKEN';
const TELEGRAM_CHAT_ID = 'YOUR_TELEGRAM_CHAT_ID';
تشغيل التطبيق:

بعد إتمام الإعداد، قم بتشغيل الخادم باستخدام:

```bash

npm start
التطبيق سيعمل على: http://localhost:3000

بنية المشروع
models/: يحتوي على نماذج قاعدة البيانات.
public/: يحتوي على الملفات العامة مثل HTML، CSS، و JavaScript.
routes/: يحتوي على جميع مسارات API.
middleware/: يحتوي على وسائط التحقق من الهوية.
server.js: الملف الرئيسي لتشغيل الخادم.
logging.js: يحتوي على إعدادات التسجيل وإرسال التنبيهات إلى تليجرام.
ميزات المشروع
تسجيل دخول وتسجيل مستخدمين جدد.
إدارة قوائم الأمنيات مع إمكانية إضافة عناصر جديدة.
لوحة تحكم للأدمن لعرض وإدارة المستخدمين.
نظام تسجيل (Logging) متكامل مع دعم لإرسال التنبيهات عبر بوت تليجرام.
تصميم بسيط وسهل الاستخدام.
مساهمة
إذا كنت ترغب في المساهمة في تطوير المشروع، يمكنك تقديم طلبات السحب (Pull Requests) أو فتح القضايا (Issues) على GitHub.

رخصة
هذا المشروع مرخص بموجب MIT License.

markdown


### ملاحظات إضافية:
- تأكد من تحديث الروابط في ملف `README.md` بما يناسب مستودعك الخاص على GitHub.
- يمكنك تعديل محتوى ملف `README.md` حسب الحاجة الخاصة بمشروعك.

إذا كان هناك أي شيء آخر تحتاج إلى تعديله أو إضافته، فلا تتردد في سؤالي!
