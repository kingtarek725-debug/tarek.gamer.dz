const video = document.getElementById('myVideo');

// التأكد من تشغيل الفيديو بمجرد أن يصبح جاهزاً
video.addEventListener('canplaythrough', function() {
    video.play();
}, false);

// إذا حدث خطأ في التحميل، حاول إعادة التشغيل
video.addEventListener('error', function() {
    console.log("حدث خطأ في تحميل الفيديو، جاري المحاولة مرة أخرى...");
    video.load();
});
