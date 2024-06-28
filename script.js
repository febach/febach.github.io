document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');
    const text = 'digitalisation of research and FAIR data';
    let index = 0;

    function typeEffect() {
        if (index < text.length) {
            header.querySelector('h2').textContent += text.charAt(index);
            index++;
            setTimeout(typeEffect, 100);
        }
    }

    header.querySelector('h2').textContent = '';
    typeEffect();
});
