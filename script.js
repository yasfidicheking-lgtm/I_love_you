// حركة خفيفة للشخصية مع الماوس
document.addEventListener('mousemove', (e) => {
    const character = document.querySelector('.character');
    const x = (window.innerWidth / 2 - e.clientX) / 25;
    const y = (window.innerHeight / 2 - e.clientY) / 25;
    
    character.style.transform = `translate(${x}px, ${y}px)`;
});

// رسالة ترحيبية عند تحميل الصفحة
window.onload = () => {
    console.log("✅ الموقع تحمل بنجاح! الشخصية كتتحرك...");
};
