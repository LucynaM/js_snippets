class TasksList {
    constructor() {
        this.tasksList = [];
    }
    addTask(title) {
        if (title === "") return;
        const task = document.createElement('li');
        task.className = 'task';
        task.innerHTML = title + ' <button>Usuń</button>';
        this.tasksList.push(task);
    }
    removeTask(index) {
        this.tasksList.splice(index, 1);
    }
}