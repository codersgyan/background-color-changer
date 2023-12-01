import { getBackgroundChanger } from './utils.js';

const body = document.body;
const button = document.querySelector('#colorChanger');

button.addEventListener('click', getBackgroundChanger(body));
