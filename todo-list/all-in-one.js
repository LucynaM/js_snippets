const toDoList = [];
const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const input = document.querySelector('form>input');
const search = document.querySelector('.search');

const createTask = () => {
    const taskTitle = input.value;
    if (taskTitle === "") return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = taskTitle + ' <button>Usuń</button>';
    return task;
}

const createList = () => {
    //clear list
    ul.textContent = "";
    //recreate list elements based on toDoList array with data-key storing current index value
    toDoList.forEach((item, index) => {
        item.dataset.key = index;
        ul.appendChild(item);
    })
}

const removeTask = (e) => {
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1);
    createList();
    taskNumber.textContent = toDoList.length;
}

const addTask = (e) => {
    e.preventDefault();
    //create task
    const newTask = createTask();
    //add task to toDoArray array
    toDoList.push(newTask);
    //create list
    createList();
    //update information about task number
    input.value = "";
    taskNumber.textContent = toDoList.length;
    newTask.querySelector('button').addEventListener('click', removeTask);
}

const filterTasks = (e) => {
    const filter = e.target.value;
    const filteredItems = toDoList.filter(item => item.textContent.includes(filter));
    ul.textContent = "";
    filteredItems.forEach(item => ul.appendChild(item));
}

form.addEventListener('submit', addTask);
search.addEventListener('input', filterTasks);