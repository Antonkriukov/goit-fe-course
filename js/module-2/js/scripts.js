'use strict'
const numbers = [];
let total = 0;
let userInput;
do  {
    userInput = prompt("Введите число");
    if (userInput === "" || userInput === null || isNaN(userInput)) break;

       
 } while(numbers.push(parseInt(userInput)));
     

   

for (let value of numbers){
    total += value;
}
alert(`Общая сумма чисел равна ${total}`);








