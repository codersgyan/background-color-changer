const body = document.body;
const button = document.querySelector('#colorChanger');

function getRandomValue() {
    return Math.floor(Math.random() * 255);
}

function changeBackground() {
    const r = getRandomValue();
    const g = getRandomValue();
    const b = getRandomValue();

    body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

button.addEventListener('click', changeBackground);
