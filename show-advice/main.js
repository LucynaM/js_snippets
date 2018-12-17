const options = [];
const input = document.querySelector('input');
const header = document.querySelector('h1');

const addOption = (e) => {
    e.preventDefault();
    options.push(input.value);
    input.value = '';
}
const clearOptions = (e) => {
    e.preventDefault();
    options.length = 0;
    header.textContent = '';
}

const showAdvice = (e) => {
    e.preventDefault();
    const index = Math.floor(Math.random() * options.length);
    header.textContent = options[index];
}
const showOptions = (e) => {
    e.preventDefault();
    alert(options.join(", "));
}


document.querySelector('.add').addEventListener('click', addOption);
document.querySelector('.clean').addEventListener('click', clearOptions);
document.querySelector('.showAdvice').addEventListener('click', showAdvice);
document.querySelector('.showOptions').addEventListener('click', showOptions);