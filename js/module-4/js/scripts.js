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
  

  this.countChange = totalprice => this.customerMoney-totalprice;
    
   
  

  this.onError = () =>
    console.log('Очень жаль, вам не хватает денег на покупки');

  this.onSuccess = () => {
    if (this.changeAmount === 0) {
      console.log(`Спасибо за покупку`);
    }

    if (this.changeAmount > 0) {
      console.log('Спасибо за покупку, ваша сдача :', this.changeAmount);
    }
  };

  this.reset = () => (this.customerMoney = 0);
}

const mango = new Cashier('Mango', products);

// Вызываем метод countTotalPrice для подсчета общей суммы
// передавая order - список покупок пользователя
 const total = mango.countTotalPrice(order);
 console.log(typeof(total))



// Вызываем getCustomerMoney для запроса денег покупателя

mango.getCustomerMoney(670);

console.log(mango.customerMoney);

// Вызываем countChange для подсчета сдачи
const change = mango.countChange();
console.log (typeof(change));
mango.countChange(total)


// // Проверяем результат подсчета денег
// if (change !== null) {
//   // При успешном обслуживании вызываем метод onSuccess
//   mango.onSuccess(); // Спасибо за покупку, ваша сдача 190
// } else {
//   // При неудачном обслуживании вызываем метод onError
//   mango.onError(); // Очень жаль, вам не хватает денег на покупки
// }

// // Вызываем reset при любом исходе обслуживания
// mango.reset();
