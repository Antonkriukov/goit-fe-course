'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];
// Взаимодействия с пользователем
const enterLogin = 'Please, enter your login';
const loginError = 'Ошибка! Логин должен быть от 4 до 16 символов';
const noLogin = 'Данный логин отсутствует в базе логинов';
const pushLogin = 'Логин успешно добавлен!';
const useLogin = 'Такой логин уже используется!';
// Спрашиваем логин у пользователя

let login = prompt(enterLogin);
// Проверка на длину от 4 до 16-ти символов включительно
const isLoginValid = login => login.length >= 4 && login.length <= 16;

const checkLoginValidityResult = isLoginValid(login);
// проверяет наличие login в массиве allLogins, возвращая true
const isLoginUnique = function(ls, l) {
  return logins.includes(login);
};

const checkIfLoginExistsResult = isLoginUnique(logins, login);
/* Функцию addLogin(logins, login) которая:
    - Принимает новый логин и массив всех логинов как параметры
    - Проверяет валидность логина используя вспомогательную функцию isLoginValid
    - Если логин не валиден, прекратить исполнение функции addLogin 
      и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
    - Если логин валиден, функция addLogin проверяеть уникальность логина 
      с помощью функции isLoginUnique
    - Если isLoginUnique вернет true, addLogin добавляет новый логин 
       в logins и возвращает строку 'Логин успешно добавлен!'
    - Если isLoginUnique вернет false, тогда addLogin не добавляет 
       логин в массив и возвращает строку 'Такой логин уже используется!'
   */
const addLogin = function(logins, login) {
  if (!checkLoginValidityResult) {
    return console.log(loginError);
  }
  if (!checkIfLoginExistsResult) {
    console.log(noLogin);
    console.log(pushLogin);
    logins.push(login);
  } else {
    console.log(useLogin);
  }
};

addLogin(logins, login);
console.log('Добавления логина в массив:', logins);
