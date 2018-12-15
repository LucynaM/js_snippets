const addBackgroundColor = (color) => document.body.style.backgroundColor = `rgb(${color}%, ${color}%, ${color}%)`;

const changeBackground = (e) => {
    let color = 50;
    addBackgroundColor(color);
    return (e) => {
        if (e.keyCode == 38 && color < 100) {
            color += 2; 
        } else if (e.keyCode == 40 && color > 0) {
            color -= 2;
        }
        addBackgroundColor(color);
    }
}

const handleChange = changeBackground();
document.addEventListener('keypress', handleChange);