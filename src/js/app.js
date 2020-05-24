import '../css/main.scss';
import '../users.html'

import { RandomGenerator } from './random-generator';
const outputParagraph = $('#outputParagraph');

const outputRandomInt = () => {
    outputParagraph.text(RandomGenerator.randomInteger());
};

const outputRandomRange = () => {
    outputParagraph.text(RandomGenerator.randomRange(1, 500));
};

const buttomRndInt = jQuery('#randomInt');
const buttomRndRange = document.querySelector('#randomRange');

buttomRndInt.click(outputRandomInt);
buttomRndRange.addEventListener('click', outputRandomRange);