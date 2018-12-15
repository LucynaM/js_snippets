const h1 = document.createElement('h1');
h1.classList.add('center-position');
document.body.appendChild(h1);
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;


const detectMouseMove = (e) => {
    const x = e.clientX;
    const y = e.clientY;
    let r, g, b;
    r = x / windowWidth * 100;
    g = y / windowHeight * 100;
    b = (r + g) / 2;
    document.body.style.backgroundColor = `rgb(${r}%, ${g}%, ${b}%)`;
    h1.textContent = `${x}, ${y}`;
}


window.addEventListener('mousemove', detectMouseMove);