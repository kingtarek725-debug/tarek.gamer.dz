// تأثير بسيط عند التمرير لتغيير خلفية القائمة
window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.background = '#0f172a';
        nav.style.boxShadow = '0 4px 10px rgba(0,0,0,0.5)';
    } else {
        nav.style.background = 'rgba(30, 41, 59, 0.8)';
        nav.style.boxShadow = 'none';
    }
});

console.log("الموقع جاهز للعمل!");