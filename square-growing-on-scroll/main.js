// Make square grow when scrolling. When square size outpasses half of window width, start to decrease its size till 0, than make it grow again. 

const div = document.createElement('div');
document.body.appendChild(div);

const manageChange = () => {

    let size = 200;
    let flag = true;

    const setSize = () => {
        div.style.width = `${size}px`;
        div.style.height = `${size}px`;
    }
    setSize();
    
    return () => {
        if (size * 2 >= window.innerWidth) {
            flag = !(flag)
        } else if (size <= 0) {
            flag = !(flag)
        }
        flag ? size += 5 : size -= 5;
        setSize();
    }
}

const growSquare = manageChange();

window.addEventListener('scroll', growSquare);

