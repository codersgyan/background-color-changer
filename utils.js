export function getRandomValue() {
    const MAX_RGB_VALUE = 255;
    return Math.floor(Math.random() * MAX_RGB_VALUE);
}

export function getBackgroundChanger(element) {
    return function changeBackground() {
        const r = getRandomValue();
        const g = getRandomValue();
        const b = getRandomValue();

        element.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    };
}
