import '../css/main.scss';
import '../users.html'

import { RandomGenerator } from './random-generator';
const outputParagraph = document.querySelector('#outputParagraph');

const outputRandomInt = () => {
    outputParagraph.textContent = RandomGenerator.randomInteger();
};

const outputRandomRange = () => {
    outputParagraph.textContent = RandomGenerator.randomRange(1, 500);
};

const buttomRndInt = document.querySelector('#randomInt');
const buttomRndRange = document.querySelector('#randomRange');

buttomRndInt.addEventListener('click', outputRandomInt);
buttomRndRange.addEventListener('click', outputRandomRange);