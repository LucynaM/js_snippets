// 1. set 2 Dates - start and end and convert them to number type by using getTime method that returns number of miliseconds for a date given since 1st of January 1970
// 2. calculate difference between 2 dates and display it in setInterval every second

const endTime = new Date('2019-01-01 23:59:00').getTime();
const spanD = document.querySelector('span.d');
const spanH = document.querySelector('span.h');
const spanM = document.querySelector('span.m');
const spanS = document.querySelector('span.s');

const formatTime = (value) => {
    return value < 10 ? `0${value}` : value;
}

setInterval(() => {
    const nowTime = new Date().getTime();
    const time = endTime - nowTime;

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((time / (1000 * 60)) % 60);
    const seconds = Math.floor((time / 1000) % 60);

    spanD.textContent = formatTime(days);
    spanH.textContent = formatTime(hours);
    spanM.textContent = formatTime(minutes);
    spanS.textContent = formatTime(seconds);
}, 1000)