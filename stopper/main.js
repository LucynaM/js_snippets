const mainBtn = document.querySelector('.main');
const resetBtn = document.querySelector('.reset');
const displayStopper = document.querySelector('.time div');
let time = 0;
let alreadyStarted = false;
let interval;

const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
}
const stopper = () => {
    const miliseconds = time % 100;
    const seconds = Math.floor(time / 100);
    const minutes = Math.floor(time / 6000);
    displayStopper.textContent = `${formatTime(minutes)}:${formatTime(seconds)}:${formatTime(miliseconds)}`;
    time++;
}


const startStopper = () => {
    if (alreadyStarted) {
        mainBtn.textContent = "Start";
        clearInterval(interval);

    } else {
        mainBtn.textContent = "Pauza";
        interval = setInterval(stopper, 10);
    }
    alreadyStarted = !alreadyStarted;
}

const resetStopper = () => {
    mainBtn.textContent = "Start";
    clearInterval(interval);
    alreadyStarted = false;
    displayStopper.textContent = '---';
    time = 0;
}

mainBtn.addEventListener('click', startStopper);
resetBtn.addEventListener('click', resetStopper);