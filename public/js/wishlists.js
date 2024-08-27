// إضافة عنصر جديد إلى قائمة الأمنيات
async function addItem(userId) {
    const title = document.getElementById('itemTitle').value;
    const description = document.getElementById('itemDescription').value;
    const image = document.getElementById('itemImage').value;
    
    // إرسال البيانات إلى الخادم
    const response = await fetch(`/api/wishlist/${userId}/add`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ title, description, image }),
    });
    
    const data = await response.json();
    if (data.message) {
        alert(data.message);
        window.location.reload(); // إعادة تحميل الصفحة بعد الإضافة
    }
}
