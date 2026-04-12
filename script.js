// حركة الشخصية مع الماوس (تأثير مرح)
document.addEventListener('mousemove', (e) => {
    const character = document.querySelector('.character');
    const x = (window.innerWidth / 2 - e.clientX) / 30;
    const y = (window.innerHeight / 2 - e.clientY) / 30;
    character.style.transform = `translate(${x}px, \( {y}px) rotate( \){x/10}deg)`;
});

console.log("✅ Exposé sur La Comédie chargé avec succès ! 🎭");
