const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
}
const displayTime = () => {
    const time = new Date();
    let seconds = time.getSeconds();
    let minutes = time.getMinutes();
    let hours = time.getHours();

    document.querySelector('span').textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}
setInterval(displayTime, 1000);