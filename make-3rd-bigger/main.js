const btn = document.querySelector('button');
const list = document.querySelector('ul');
let counter = 1;

btn.addEventListener('click', () => {
   const listItem = document.createElement('li');
   listItem.textContent = counter;
   counter % 3 == 0 ? listItem.classList.add('bigger') : '';
   list.appendChild(listItem);
   counter += 2;
})