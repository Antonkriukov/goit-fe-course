'use strict';
const numbers = [];
let total = 0;
let userInput;
//Число введенное пользователем записывается в массив чисел
do {
  userInput = Number(prompt('Введите число'));
  numbers.push(parseFloat(userInput));
} while (userInput !== 0);
// сложить общую сумму всех элементов массива
for (let value of numbers) {
  total += value;
}
// По окончанию ввода, если массив не пустой, вывести alert с текстом `Общая сумма чисел равна ${сумма}
if (numbers.length > 1) {
  alert(`Общая сумма чисел равна ${total}`);
}
