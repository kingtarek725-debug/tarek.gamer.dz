const video = document.getElementById("myVideo");
const muteIcon = document.getElementById("mute-icon");

// محاولة تشغيل الصوت تلقائياً (قد تفشل في بعض المتصفحات)
window.addEventListener('load', () => {
    video.muted = false; // تفعيل الصوت
    video.play().catch(error => {
        console.log("المتصفح منع التشغيل التلقائي للصوت، سيتم الكتم حتى يضغط المستخدم");
        video.muted = true;
    });
});

function toggleMute() {
    if (video.muted) {
        video.muted = false;
        muteIcon.classList.replace("fa-volume-mute", "fa-volume-up");
    } else {
        video.muted = true;
        muteIcon.classList.replace("fa-volume-up", "fa-volume-mute");
    }
}
