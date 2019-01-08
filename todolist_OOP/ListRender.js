class ListRender {
    constructor() {
        this.tasks = new TasksList();
        //DOM elements
        this.ul = document.querySelector('ul');
        this.taskNumber = document.querySelector('h1 span');
        this.input = document.querySelector('form>input');

        document.querySelector('form>button').addEventListener('click', this.createList.bind(this));
        document.querySelector('.search').addEventListener('input', this.filterTasks.bind(this));

        this.render();
    }
    render() {
        //clear list
        this.ul.textContent = "";
        //recreate list elements based on tasks array with data-key storing current index value
        this.tasks.tasksList.forEach((item, index) => {
            item.dataset.key = index;
            this.ul.appendChild(item);
            item.querySelector('button').addEventListener('click', this.removeListElement.bind(this));
        });
        //clear input
        this.input.value = "";
        //update information about tasks number
        this.taskNumber.textContent = this.tasks.tasksList.length;

    }
    createList(e) {
        e.preventDefault();
        this.tasks.addTask(this.input.value);
        this.render();
    }

    removeListElement(e) {
        const index = e.target.parentNode.dataset.key;
        this.tasks.removeTask(index);
        this.render();
    }

    filterTasks(e) {
        const filteredItems = this.tasks.tasksList.filter(item => item.textContent.includes(e.target.value));
        this.ul.textContent = "";
        filteredItems.forEach(item => this.ul.appendChild(item));
    }
}