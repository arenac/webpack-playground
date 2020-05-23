import '../css/main.css';
import '../css/input-elements.css';

import { hiddenParagraph, showParagraphButton } from './dom-loader'

var showParagraph = false;

showParagraphButton.addEventListener('click', toggleHiddenState);
updateHiddenParagraph();

function toggleHiddenState() {
    showParagraph = !showParagraph;
    updateHiddenParagraph();
    updateShowParagraphButton()
}

function updateShowParagraphButton() {
    if (showParagraph) {
      showParagraphButton.textContent = 'Hide the Paragraph';
    } else {
      showParagraphButton.textContent = 'Show the Paragraph';
    }
}

function updateHiddenParagraph() {
    if (showParagraph) {
        hiddenParagraph.style.display = 'block';
    } else {
        hiddenParagraph.style.display = 'none';
    }
}