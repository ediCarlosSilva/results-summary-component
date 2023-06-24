'use strict'

import data from '../data.json' assert { type: 'json'};

let cardWrapper = document.querySelectorAll('.card__wrapper');
let componentScore = document.querySelector('.component__score');

// an iterator for access cardWrapper content
let iterador = 0;

for (let card of cardWrapper) {
    card.querySelector('.card__title').innerHTML = data[iterador].category;
    card.querySelector('.card__value').innerHTML = `${data[iterador].score} `;
    iterador++;
}

// console.log(data[0]);
