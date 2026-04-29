const video = document.getElementById('myVideo');
const audioIcon = document.getElementById('audio-icon');

// محاولة البدء السلس
video.oncanplay = () => {
    console.log("الفيديو جاهز للعمل بسلاسة");
    video.play();
};

// التحكم في الصوت
function toggleAudio() {
    if (video.muted) {
        video.muted = false;
        audioIcon.className = "fas fa-volume-up";
    } else {
        video.muted = true;
        audioIcon.className = "fas fa-volume-mute";
    }
}

// تغيير خلفية الـ Nav عند التمرير
window.onscroll = () => {
    const nav = document.querySelector('nav');
    if (window.scrollY > 100) {
        nav.style.background = "rgba(0,0,0,0.9)";
        nav.style.padding = "10px 8%";
    } else {
        nav.style.background = "transparent";
        nav.style.padding = "20px 8%";
    }
};
