const handleCounterChange = () => {
    let counter = 0;
    return () => {
        document.body.textContent = `aktualny stan licznika to ${++counter}`;
    }
}

const add = handleCounterChange();

document.addEventListener('click', add);