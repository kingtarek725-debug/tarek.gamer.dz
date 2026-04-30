const music = document.getElementById('bgMusic');
const icon = document.getElementById('music-icon');
const text = document.getElementById('btn-text');

function toggleMusic() {
    if (music.paused) {
        music.play().then(() => {
            icon.className = "fas fa-pause";
            text.innerText = "إيقاف";
        }).catch(err => {
            alert("يرجى التأكد من وجود ملف homemusic.mp3 في المجلد");
        });
    } else {
        music.pause();
        icon.className = "fas fa-play";
        text.innerText = "تشغيل الموسيقى";
    }
}
