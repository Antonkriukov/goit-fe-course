'use strict';
const numbers = [];
let total = 0;
let userInput;
//Число введенное пользователем записывается в массив чисел
do {
  userInput = Number(prompt('Введите число'));
  if(isNaN(userInput)) break;
numbers.push(userInput)  ; 
} while (userInput !== 0 );


// По окончанию ввода, если массив не пустой, вывести alert с текстом `Общая сумма чисел равна ${сумма}
if (numbers.length > 1) {
  // сложить общую сумму всех элементов массива
  for (let value of numbers) 
    total += value;
  alert(`Общая сумма чисел равна ${total}`);
} 

