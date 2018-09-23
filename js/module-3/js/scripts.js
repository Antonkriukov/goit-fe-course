'use strict';
const login = prompt('Введите новій логин');
const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
//массив по-условию
//запрос на ввод нового логина

//проверка на количество символов

const isLoginValid = login => login.length >= 4 && login.length <= 16;

//проверка на совпадения

const isLoginUnique = (login, allLogins) => allLogins.includes(login);

// добавление логина в массив

const addLogin = login => {
  if (isLoginValid && isLoginUnique);
  alert('Логин успешно добавлен!');
  logins.push(login);
};


//вызов функций
addLogin(login)
console.log(logins);

