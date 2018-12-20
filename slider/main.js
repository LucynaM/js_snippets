const slidesList = [{
        url: 'images/img1.jpg',
        title: 'Pierwszy slajd',
    },
    {
        url: 'images/img2.jpg',
        title: 'Drugi slajd',
    },
    {
        url: 'images/img3.jpg',
        title: 'Trzeci slajd',
    },
];

const dots = [...document.querySelectorAll('.dots span')];
const img = document.querySelector('img.slider');
const header = document.querySelector('h1');
let index = 0;

const changeDots = () => {
    const oldIndex = dots.findIndex(dot => dot.classList.contains('active'));
    dots[oldIndex].classList.remove('active');
    dots[index].classList.add('active');
}

const changeIndex = (changeValue, breakValue, newValue) => {
    index += changeValue;
    if (index === breakValue) index = newValue;
    img.src = slidesList[index].url;
    header.textContent = slidesList[index].title;
}

const changeSlide = () => {
    changeIndex(1, slidesList.length, 0);
    changeDots();
}

let interval = setInterval(changeSlide, 2000);

const changeSlideOnKeyPress = (e) => {
    if (e.keyCode == 37 || e.keyCode == 39) {
        clearInterval(interval);
        if (e.keyCode == 39) {
            changeIndex(1, slidesList.length, 0);
        } else if (e.keyCode == 37) {
            changeIndex(-1, -1, slidesList.length - 1);
        }
        changeDots();
        interval = setInterval(changeSlide, 2000);
    }
}

window.addEventListener('keypress', changeSlideOnKeyPress);