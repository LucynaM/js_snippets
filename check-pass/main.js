const input = document.getElementById('pass');
const div = document.querySelector('.message');

const passwords = ["user", 'newuser'];
const msgs = ["Wyjechałam ", 'Przyjechałam'];

const checkPass = (e) => {
    const inputValue = e.target.value;
    if (div.textContent) div.textContent = "";
    passwords.forEach((password, index) => { 
        if(password == inputValue) {
            div.textContent = msgs[index];
            e.target.value = '';
        } 
    })
}
const changeBackground = (e) => {
    e.target.classList.add('active');
}

const restoreBackground = (e) => {
    e.target.classList.remove('active');
}

input.addEventListener('input', checkPass);
input.addEventListener('focus', changeBackground);
input.addEventListener('blur', restoreBackground);