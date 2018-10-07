'use strict';

const products = {
  bread: 10,
  milk: 15,
  apples: 20,
  chicken: 50,
  cheese: 40
};

const order = {
  bread: 2,
  milk: 2,
  apples: 1,
  cheese: 1
};

function Cashier(name, productsDatabase) {
  this.name = name;
  this.totalPrice = 0;
  this.customerMoney = 0;
  this.changeAmount = 0;
  this.productsDatabase = productsDatabase;

  this.countTotalPrice = function(order) {
    const keyOrder = Object.keys(order);
    const keyProd = Object.keys(products);
    for (const key of keyOrder) {
      for (const key2 of keyProd) {
        if (key === key2) {
          this.totalPrice += order[key] * products[key2];
        }
      }
    }
    return console.log(`Общая стоимость : ${this.totalPrice}`);
  };

  this.getCustomerMoney = function(value) {
    return console.log(`Внесено денег : ${this.customerMoney = value}`);
  };

  this.countChange = function() {
    this.changeAmount = this.customerMoney - this.totalPrice;
    if (this.changeAmount < 0) {
      return null;
    } else {
      return this.changeAmount;
    }
  };

  this.onError = function() {
    console.log("Очень жаль, вам не хватает денег на покупки");
  };

  this.onSuccess = function() {
    if (this.changeAmount === 0) {
      console.log(`Спасибо за покупку`);
    }

    if (this.changeAmount > 0) {
      console.log(`Спасибо за покупку, ваша сдача ${this.changeAmount}`);
    }
  };

  this.reset = function() {
    this.customerMoney = 0 ;
  };
}


const mango = new Cashier("Mango", products);



// Вызываем метод countTotalPrice для подсчета общей суммы
// передавая order - список покупок пользователя
mango.countTotalPrice(order);


// Вызываем getCustomerMoney для запроса денег покупателя
mango.getCustomerMoney(90);


// Вызываем countChange для подсчета сдачи
const change = mango.countChange();



// Проверяем результат подсчета денег
if (change !== null) {
  // При успешном обслуживании вызываем метод onSuccess
  mango.onSuccess(); // Спасибо за покупку, ваша сдача 190
} else {
  // При неудачном обслуживании вызываем метод onError
  mango.onError(); // Очень жаль, вам не хватает денег на покупки
}

// Вызываем reset при любом исходе обслуживания
mango.reset();


