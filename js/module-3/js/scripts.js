'use strict';
const login = prompt('Введите новий логин');

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

// alert

const existLogin = 'Такой логин уже существует';

const errorLogin = 'Ошибка! Логин должен быть от 4 до 16 символов';

const addedLogin = 'Логин успешно добавлен';

//проверкa на длину от 4 до 16-ти символов включительно

const isLoginValid = login => login.length >= 4 && login.length <= 16;

const resultLoginValid = isLoginValid(login);

//проверяет наличие login в массиве allLogins

const isLoginUnique = (addLogins, login) => logins.includes(login);

const resultLoginUnique = isLoginUnique(logins, login);

/*функцию addLogin(logins, login) которая:
    - Принимает новый логин и массив всех логинов как параметры
    - Проверяет валидность логина используя вспомогательную функцию isLoginValid
    - Если логин не валиден, прекратить исполнение функции addLogin 
      и вернуть строку 'Ошибка! Логин должен быть от 4 до 16 символов'
    - Если логин валиден, функция addLogin проверяеть уникальность логина 
      с помощью функции isLoginUnique
    - Если isLoginUnique вернет true, addLogin добавляет новый логин 
       в logins и возвращает строку 'Логин успешно добавлен!'
    - Если isLoginUnique вернет false, тогда addLogin не добавляет 
       логин в массив и возвращает строку 'Такой логин уже используется!'*/

const addLogins = function(logins, login) {
  if (resultLoginUnique && resultLoginValid) {
    alert(existLogin);
  } else if (!resultLoginValid) {
    alert(errorLogin);
  } else {
    logins.push(login);
    alert(addedLogin);
  }
};

const addloginsResults = addLogins(logins ,login);

