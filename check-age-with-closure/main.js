/* with closure */

const user = (name, age) => {
    let userName = name;
    let userAge = age;
    const showUser = () => {
        document.body.textContent = `Cześć ${userName}, ${userAge >= 18 ? 'Możesz kupić piwo' : 'Nie możesz kupić piwa'} `;
    }
    return showUser;
}

const anna = user('Anna', 18);
anna();

/* with constructor */

const UserConstructor = function (name, age) {
    this.name = name;
    this.age = age;
}
UserConstructor.prototype.showUser = function () {
    document.body.textContent += `Cześć ${this.name}, ${this.age >= 18 ? 'możesz kupić piwo' : 'nie możesz kupić piwa'}`;
}
const ewa = new UserConstructor('Ewa', 16);
ewa.showUser();

/* with class */

const UserClass = class {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    showUser() {
        document.body.textContent += `Cześć ${this.name}, ${this.age >= 18 ? 'możesz kupić piwo' : 'nie możesz kupić piwa'}`;
    }
}

const piotr = new UserClass('Piotr', 30);
piotr.showUser();