const spnText = document.querySelector('.text');
const spnCursor = document.querySelector('.cursor');
const txt = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. KONIEC';

let charIndex = 0;


const addLetter = () => {
    spnText.textContent += txt[charIndex++];
    if (charIndex === txt.length) clearInterval(interval);
}

const interval = setInterval(addLetter, 40);

const animateCursor = () => spnCursor.classList.toggle('active');
setInterval(animateCursor, 400);