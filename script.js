// حركة الشخصية مع الماوس
const character = document.getElementById('jesterGirl');

document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 28;
    const y = (window.innerHeight / 2 - e.clientY) / 28;
    character.style.transform = `translate(${x}px, \( {y}px) rotate( \){x * 0.6}deg)`;
});

// Scroll سلس للأقسام
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    }
}

// رسالة عند التحميل
window.onload = () => {
    console.log("✅ Exposé La Comédie prêt avec style théâtre rouge et noir ! 🎭");
};
