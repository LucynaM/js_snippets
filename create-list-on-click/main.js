const btn = document.createElement('button');
btn.textContent = 'Start';
document.body.appendChild(btn);
const list = document.createElement('ul');
document.body.appendChild(list);

const createListElements = () => {
    let clickNumber = 0;
    let size = 10;
    return () => {
        for (let i = 1; i < 11; i ++) {
            const listItem = document.createElement('li');
            listItem.textContent = `Element nr ${i + clickNumber*10}`;
            listItem.style.fontSize = `${size++}px `;
            list.appendChild(listItem);
        }
        clickNumber ++;
    }
}
const handleListCreation = createListElements();

btn.addEventListener('click', handleListCreation);

