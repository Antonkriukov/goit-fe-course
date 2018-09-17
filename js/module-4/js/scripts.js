'use strict';

function Cashier(name, productsDatabase) {
  // 🔔 не забывайте о this при обращении к свойствам и методам будущего объекта
  this.name = name;
  this.productsDatabase = productsDatabase;
  this.totalPrice = 0;
  this.customerMoney = 0;
  this.changeAmount = 0;
  /* Создадим методы, необходимые для рассчетов при обслуживании */
  this.countTotalPrice = function(order) {
    for (let item in order) {
      this.totalPrice += order[item] * this.productsDatabase[item];
    }
    return this.totalPrice;
  };
  this.getCustomerMoney = function(value) {
    this.customerMoney = value;
  };
  this.countChange = function() {
    if (this.totalPrice > this.customerMoney) {
      return null;
    }
    this.changeAmount = this.customerMoney - this.totalPrice;
    return this.changeAmount;
  };
  this.reset = function() {
    this.totalPrice = 0;
    this.customerMoney = 0;
    this.changeAmount = 0;
  };
  /* Функция трансакции - обслуживание кассиром очередного покупателя. */
  this.tranaction = function(order, money) {
    /* Создадим методы, выдоющие сообщения при обслуживании */
    const greet = function(obj) {
      console.log(`Здравствуйте, вас обслуживает ${obj.name}`);
      return obj.name;
    };
    const onSuccess = function(obj) {
      if (obj.changeAmount > 0) {
        console.log(`Спасибо за покупку, ваша сдача ${obj.changeAmount}`);
      }
      if (obj.changeAmount === 0) {
        console.log('Спасибо за покупку');
      }
      return obj.changeAmount;
    };
    const onError = function() {
      console.log('Очень жаль, вам не хватает денег на покупки');
    };
    /* Производим обслуживание */
    console.log('кассир,', this.name); // Имя кассира
    console.log(
      `for start - totalPrice = ${this.totalPrice}, customerMoney = ${
        this.customerMoney
      }, changeAmount = ${this.changeAmount}`,
    ); // 0, 0, 0
    greet(this); // Здравствуйте, вас обслуживает кассир ...
    console.log('Заказ: ', order); // Очередной заказ
    this.countTotalPrice(order);
    console.log('на общую сумму: ', this.totalPrice); // Проверям что посчитали
    this.getCustomerMoney(money);
    console.log('с покупателя получили: ', this.customerMoney); // Проверяем что в поле с деньгами пользователя
    const result = this.countChange();
    console.log('сдачи: ', result); // Проверяем что нам вернул countChange
    if (result !== null) {
      onSuccess(this);
    } else {
      // Спасибо за покупку, ваша сдача ..., При успешном обслуживании, onSuccess.
      onError();
    } // Очень жаль, вам не хватает денег на покупки, При неудачном обслуживании, onError
    this.reset();
    console.log(
      `after reset - totalPrice = ${this.totalPrice}, customerMoney = ${
        this.customerMoney
      }, changeAmount = ${this.changeAmount}`,
    ); // 0, 0, 0
    return result;
  };
}

