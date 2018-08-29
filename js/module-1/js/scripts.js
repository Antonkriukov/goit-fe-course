'use strict';

//1 задание
const adminLogin = prompt('Admin Login');
const canceled = 'Отменено пользователем!';
const closed = 'Доступ запрещен!';
const password = 'm4ngo1zh4ackz0r';
const welcome = 'Добро пожаловать!';
if (adminLogin === 'admin') {
  const adminPassword = prompt('Admin Password');
  if (adminPassword === password) {
    alert(welcome);
  } else if (adminPassword === null) {
    alert(canceled);
  } else {
    alert(closed);
  }
} else if (adminLogin === null) {
  alert(canceled);
} else {
  alert(closed);
}
