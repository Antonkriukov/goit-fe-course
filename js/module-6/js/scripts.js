'use strict';

class Hamburger {
  constructor(size, stuffing) {
    this._size = size;
    this._stuffing = stuffing;
    this._toppings = [];
  }
  addTopping(topping) {
    if (!this._toppings.includes(topping)) {
      return this._toppings.push(topping);
    }
  }

  removeTopping(topping) {
    return (this._toppings = this._toppings.filter(x => x !== topping));
  }

  get getToppings() {
    return this._toppings;
  }

  get getSize() {
    return this._size;
  }

  get getStuffing() {
    return this._stuffing;
  }

  get calculatePrice() {
    const priceArr = this._toppings.map(x => Hamburger.TOPPINGS[x].price);
    priceArr.push(
      Hamburger.SIZES[this._size].price,
      Hamburger.STUFFINGS[this._stuffing].price,
    );
    let price = priceArr.reduce((acc, prices) => acc + prices, 0);
    return price;
  }

  get calculateCalories() {
    const caloriesArr = this._toppings.map(x => Hamburger.TOPPINGS[x].calories);
    caloriesArr.push(
      Hamburger.SIZES[this._size].calories,
      Hamburger.STUFFINGS[this._stuffing].calories,
    );
    let calories = caloriesArr.reduce(
      (acc, itemcalories) => acc + itemcalories,
      0,
    );
    return calories;
  }
}

Hamburger.SIZE_SMALL = 'SIZE_SMALL';
Hamburger.SIZE_LARGE = 'SIZE_LARGE';

Hamburger.SIZES = {
  [Hamburger.SIZE_SMALL]: {
    price: 30,
    calories: 50,
  },
  [Hamburger.SIZE_LARGE]: {
    price: 50,
    calories: 100,
  },
};

Hamburger.STUFFING_CHEESE = 'STUFFING_CHEESE';
Hamburger.STUFFING_SALAD = 'STUFFING_SALAD';
Hamburger.STUFFING_MEAT = 'STUFFING_MEAT';

Hamburger.STUFFINGS = {
  [Hamburger.STUFFING_CHEESE]: {
    price: 15,
    calories: 20,
  },
  [Hamburger.STUFFING_SALAD]: {
    price: 20,
    calories: 5,
  },
  [Hamburger.STUFFING_MEAT]: {
    price: 35,
    calories: 15,
  },
};

Hamburger.TOPPING_SPICE = 'TOPPING_SPICE';
Hamburger.TOPPING_SAUCE = 'TOPPING_SAUCE';

Hamburger.TOPPINGS = {
  [Hamburger.TOPPING_SPICE]: {
    price: 10,
    calories: 0,
  },
  [Hamburger.TOPPING_SAUCE]: {
    price: 15,
    calories: 5,
  },
};

// Маленький гамбургер с начинкой из сыра
const hamburger = new Hamburger(
  Hamburger.SIZE_LARGE,
  Hamburger.STUFFING_MEAT,
);

// Добавка из приправы
hamburger.addTopping(Hamburger.TOPPING_SPICE);

// Спросим сколько там калорий
console.log('Calories: ', hamburger.calculateCalories);

// Сколько стоит?
console.log('Price: ', hamburger.calculatePrice);

// Я тут передумал и решил добавить еще соус
hamburger.addTopping(Hamburger.TOPPING_SAUCE);

// А сколько теперь стоит?
console.log('Price with sauce: ', hamburger.calculatePrice);

// Проверить, большой ли гамбургер?
console.log('Is hamburger large: ', hamburger.getSize === Hamburger.SIZE_LARGE); // -> false

// Убрать добавку
hamburger.removeTopping(Hamburger.TOPPING_SPICE);

// Смотрим сколько добавок
console.log('Hamburger has %d toppings', hamburger.getToppings.length); // 1
