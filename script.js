const character = document.getElementById('jesterGirl');

// حركة الشخصية مع الماوس (تأثير مرح وكوميدي)
document.addEventListener('mousemove', (e) => {
    const x = (window.innerWidth / 2 - e.clientX) / 25;
    const y = (window.innerHeight / 2 - e.clientY) / 25;
    
    character.style.transform = `translate(${x}px, \( {y}px) rotate( \){x * 0.8}deg)`;
});

// إضافة تأثير عند الكليك (كأنها تضحك أكثر)
character.addEventListener('click', () => {
    character.style.transition = 'transform 0.2s';
    character.style.transform = 'scale(1.15) rotate(10deg)';
    
    setTimeout(() => {
        character.style.transform = `translate(0px, 0px) rotate(0deg)`;
    }, 300);
    
    console.log("😂 المهرجة البنت ضحكت معاك!");
});
