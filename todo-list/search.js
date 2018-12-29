const input = document.querySelector('input');
const ul = document.querySelector('ul');
const list = [...document.querySelectorAll('li')];

const filterList = (e) => {
    const filter = e.target.value;
    const filteredList = list.filter(item => item.textContent.includes(filter));
    ul.textContent = "";
    filteredList.forEach(item => ul.appendChild(item));
}

input.addEventListener('input', filterList);