const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const listItems = ul.getElementsByClassName('task'); // method updated 'live'
const input = document.querySelector('input');

const removeTask = (e) => {
    e.target.parentNode.remove();
    taskNumber.textContent = listItems.length;
}


const addTask = (e) => {
    e.preventDefault();
    const taskTitle = input.value;
    if (taskTitle === "") return;
    const newTask = document.createElement('li');
    newTask.className = 'task';
    newTask.innerHTML = taskTitle + ' <button>Usuń</button>';
    ul.appendChild(newTask);
    input.value = "";
    taskNumber.textContent = listItems.length;
    newTask.querySelector('button').addEventListener('click', removeTask);
}

form.addEventListener('submit', addTask);