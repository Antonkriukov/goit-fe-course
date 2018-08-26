'use strict'

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

console.log(logins);


let login = prompt('Please, enter your login');

const checkLoginValidity = login => login.length >= 4 && login.length <= 16;
       

const checkLoginValidityResult = checkLoginValidity(login);


const checkIfLoginExists = function(ls, l) {
    return logins.includes(login)
    
};


const checkIfLoginExistsResult = checkIfLoginExists(logins, login);


const addLogin = function(logins, login) {
    console.log('Entered login: ', login);
    console.log('login length:', login.length);
    console.log('Length Validity (4-16):', checkLoginValidityResult);

    if (!checkLoginValidityResult ) {
        return console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    
    }
    if (!checkIfLoginExistsResult) {
        console.log('Данный логин отсутствует в базе логинов');
        console.log('Логин успешно добавлен!');
        logins.push(login);
        
    } else {
        console.log('Такой логин уже используется!');
    }
};

addLogin(logins, login);
console.log('Добавления логина в массив:' ,logins);

