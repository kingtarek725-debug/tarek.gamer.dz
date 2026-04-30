const music = document.getElementById('bgMusic');
const musicIcon = document.getElementById('music-icon');
const musicText = document.querySelector('.music-text');

function toggleMusic() {
    if (music.paused) {
        music.play();
        musicIcon.className = "fas fa-pause";
        musicText.innerText = "إيقاف الموسيقى";
        document.getElementById('music-btn').style.background = "#00d4ff";
        document.getElementById('music-btn').style.color = "#000";
    } else {
        music.pause();
        musicIcon.className = "fas fa-play";
        musicText.innerText = "تشغيل الموسيقى";
        document.getElementById('music-btn').style.background = "rgba(0, 212, 255, 0.1)";
        document.getElementById('music-btn').style.color = "#fff";
    }
}

// تأثير بسيط عند تحريك الماوس على الخلفية
document.addEventListener('mousemove', (e) => {
    const bg = document.querySelector('.bg-container');
    const x = (window.innerWidth / 2 - e.pageX) / 50;
    const y = (window.innerHeight / 2 - e.pageY) / 50;
    bg.style.transform = `scale(1.1) translate(${x}px, ${y}px)`;
});
