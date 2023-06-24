
import data from '../data.json' assert { type: 'json'};

let cardWrapper = document.querySelectorAll('.card__wrapper');
let componentScore = document.querySelector('.component__score');

// an iterator for access cardWrapper content
let iterator = 0;
let totalScore = 0;

for (let card of cardWrapper) {
    let cardTitle = card.querySelector('.card__title');
    let cardValue = card.querySelector('.card__value');

    cardTitle.innerHTML = data[iterator].category;
    cardValue.innerHTML = `${data[iterator].score} `;

    totalScore += parseInt(data[iterator].score);

    iterator++;
}
componentScore.innerHTML = Math.round(totalScore/data.length);

