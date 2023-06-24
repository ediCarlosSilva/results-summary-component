
import data from '../data.json' assert { type: 'json'};

// taking the elements page
let cardWrapper = document.querySelectorAll('.card__wrapper');
let componentScore = document.querySelector('.component__score');
let imageCriterion = document.querySelectorAll('.card__criterion > img');

// an iterator for access cardWrapper content and imageCriterion
let iterator = 0;
let totalScore = 0; // this variable if for update the totalScore

for (let card of cardWrapper) {
    let cardTitle = card.querySelector('.card__title');
    let cardValue = card.querySelector('.card__value');

    cardTitle.innerHTML = data[iterator].category;
    cardValue.innerHTML = `${data[iterator].score} `;

    totalScore += parseInt(data[iterator].score);

    iterator++;
}
componentScore.innerHTML = Math.round(totalScore/data.length);

// this code is for update the src of the image beside criterion avaliation
iterator = 0;
for (let image of imageCriterion) {
    image.setAttribute('src', data[iterator].icon);
    iterator++;
}

