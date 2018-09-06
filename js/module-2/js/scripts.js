'use strict';
const numbers = [];
let total = 0;
let userInput ;

do {
  userInput = Number(prompt('Введите число'));
  (numbers.push(parseFloat(userInput))) ;
  for (let value of numbers) {
    total += value;}
} while (userInput !== 0  ) 

  if (numbers.length > 1){
    alert(`Общая сумма чисел равна ${total}`)};





