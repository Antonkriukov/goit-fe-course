'use strict';

//1 задание
const adminLogin = prompt('Admin Login');
const canceled = 'Отменено пользователем!';
const closed = `Доступ запрещен!`;

if (adminLogin === 'admin') {
  const adminPassword = prompt('Admin Password');

  if (adminPassword === 'm4ngo1zh4ackz0r') {
    alert('Добро пожаловать!');
  } else if (adminLogin === null) {
    alert(canceled);
  } else {
    alert(closed);
  }
} else if (adminLogin === null) {
  alert(canceled);
} else {
  alert(closed);
};
