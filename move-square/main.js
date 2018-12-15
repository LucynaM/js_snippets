const square = document.querySelector('div');
let flag = false;
let offsetX, offsetY;

const changeSquareColor = (e) => {
    e.target.style.backgroundColor = 'grey';
    flag = !flag;
    offsetX = e.offsetX;
    offsetY = e.offsetY;
}

const moveSquare = (e) => {
    if (flag) {
        const squareX = e.clientX - offsetX;
        const squareY = e.clientY - offsetY;
        square.style.left = `${squareX}px`;
        square.style.top = `${squareY}px`;
    }
}

const restoreSquareColor = (e) => {
    e.target.style.backgroundColor = 'black';
    flag = !flag;
}

square.addEventListener('mousedown', changeSquareColor);
square.addEventListener('mouseup', restoreSquareColor);
square.addEventListener('mousemove', moveSquare);