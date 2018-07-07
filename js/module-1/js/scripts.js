'use strict'

//1 задание
const ADMIN_LOGIN = prompt('Admin Login');

if (ADMIN_LOGIN == 'admin') {
    
const ADMIN_PASSWORD = prompt( 'Admin Password');

if (ADMIN_PASSWORD =='m4ngo1zh4ackz0r') {
  alert ('Добро пожаловать!');

} else if ( ADMIN_PASSWORD == null) {
  alert('Отменено пользователем!');  
} else {
  alert('Доступ запрещен!');
}

} else if ( ADMIN_LOGIN == null) {
    alert('Отменено пользователем!');
} else {
    alert ('Доступ запрещен!');
}


 

