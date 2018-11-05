'use strict';

const products = {
  bread: 30,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40,
};

const order = {
  bread: 3,
  milk: 2,
  apples: 1,
  cheese: 1,
};

function Cashier(name, productsDatabase) {
  this.name = name;
  this.customerMoney = 0;
  this.productsDatabase = productsDatabase;

 

  this.countTotalPrice = order => {
    let totalOrderSum = 0;
    for (const elem in order) {
      totalOrderSum += order[elem] * this.productsDatabase[elem];
    }

    return totalOrderSum;
  };

  this.getCustomerMoney = value => this.customerMoney = value;
  

  this.countChange = totalPrice => {
    return this.customerMoney >= totalPrice ? this.customerMoney - totalPrice : null;
};
    
   
  

this.onError = () =>
    console.log('Очень жаль, вам не хватает денег на покупки');


  this.onSuccess = change => {
    if (change === 0) {
      console.log(`Спасибо за покупку`);
    }

    if (change > 0) {
      console.log('Спасибо за покупку, ваша сдача :', change);
    }
  };

  this.reset = () => (this.customerMoney = 0);;
}

const mango = new Cashier('Mango', products);

// Вызываем метод countTotalPrice для подсчета общей суммы
// передавая order - список покупок пользователя
 const totalPrice = mango.countTotalPrice(order);
//  console.log(totalPrice)



// Вызываем getCustomerMoney для запроса денег покупателя

mango.getCustomerMoney(80);

console.log(`Внесено денег: ${mango.customerMoney}`);

// Вызываем countChange для подсчета сдачи
const change = mango.countChange(totalPrice);
// console.log (change);



// Проверяем результат подсчета денег
if(change !== null) {
  // При успешном обслуживании вызываем метод onSuccess
 mango.onSuccess(change); // Спасибо за покупку, ваша сдача 190
} else {
 // При неудачном обслуживании вызываем метод onError   
 mango.onError(change); // Очень жаль, вам не хватает денег на покупки
}

// Вызываем reset при любом исходе обслуживания
mango.reset(change);

// Проверяем значения после reset
console.log(mango.customerMoney); // 0
