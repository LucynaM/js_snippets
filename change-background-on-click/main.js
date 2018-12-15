const h1 = document.createElement('h1');
h1.style.position = "absolute";
h1.style.top = "50%";
h1.style.left = "50%";
h1.style.transform = "translate(-50%, -50%)";
document.body.appendChild(h1);

const changeBackground = (e) => {
    const x = Math.round(e.clientX) % 2 == 0 ? true : false;
    const y = Math.round(e.clientY) % 2 == 0 ? true : false;
    let color;
    if(x !== y) {
        color = 'red';
    } else if (x) {
        color = 'green';
    } else {
        color = 'blue';
    }
    h1.textContent = `${e.clientX}, ${e.clientY}`;
    document.body.style.backgroundColor = color;
}

document.addEventListener('click', changeBackground);