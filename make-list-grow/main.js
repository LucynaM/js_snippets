// Display list on first click than increase its font size

const list = document.querySelector('ul');


const manageList = () => {

    let flag = false;
    let size = 12;

    const assignSize = () => {
        list.querySelectorAll('li').forEach((item) => {
            item.style.fontSize = `${size}px`;
        })
        size ++;
    }

    assignSize();
    return () => {
        if (!flag) {
            list.querySelectorAll('li').forEach((item) => {
                item.style.display = "block";
            })
            flag = true;
        } else {
            assignSize();
        }
    }
}

const handleList = manageList();


document.querySelector('button').addEventListener('click', handleList);