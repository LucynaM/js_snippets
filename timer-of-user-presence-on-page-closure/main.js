// show time spent by user on webpage
// closure exercise

const timerWrap = () => {
    let time = 0;
    const h1 = document.createElement('h1');
    h1.style.position = 'absolute';
    h1.style.top = '50%';
    h1.style.left = '50%';
    h1.style.transform = 'translate(-50%, -50%)';
    document.body.appendChild(h1);
    return () => {
        h1.textContent = time++;
    }
}
const showTime = timerWrap();
const interval = setInterval(showTime, 1000);