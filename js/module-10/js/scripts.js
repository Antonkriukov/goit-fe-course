'use strict';
const inputId = document.querySelector('.userIdInput');
const addUserName = document.querySelector('.addUserName');
const addUserAge = document.querySelector('.addUserAge');
const removeById = document.querySelector('.removeById');
const updateById = document.querySelector('.updateById');
const updateUserName = document.querySelector('.updateUserName');
const updateUserAge = document.querySelector('.updateUserAge');

const getAllBtn = document.querySelector('.js-getAll');
const getUserByIdBtn = document.querySelector('.js-getUserById');
const addUserBtn = document.querySelector('.js-addUser');
const removeUserBtn = document.querySelector('.js-removeUser');
const updateUserBtn = document.querySelector('.js-updateUser');

const resultAll = document.querySelector('.js-resGetAll');
const resultGetUserById = document.querySelector('.js-resGetUserById');

const apiUrl = 'https://test-users-api.herokuapp.com/users/';

getAllBtn.addEventListener('click', evt => {
  evt.preventDefault();
  getAllUsers();
});
getUserByIdBtn.addEventListener('click', evt => {
  evt.preventDefault();
  const id = inputId.value;
  getUserById(id);
});
addUserBtn.addEventListener('click', evt => {
  evt.preventDefault();
  const name = addUserName.value;
  const age = Number(addUserAge.value);
  addUser(name, age);
});
removeUserBtn.addEventListener('click', evt => {
  evt.preventDefault();
  const id = removeById.value;
  removeUser(id);
});
updateUserBtn.addEventListener('click', evt => {
  evt.preventDefault();
  const id = updateById.value;
  const newName = updateUserName.value;
  const newAge = Number(updateUserAge.value);
  const user = {
    name: newName,
    age: newAge,
  };
  updateUser(id, user);
});

function getAllUsers() {
  return fetch(apiUrl)
    .then(response => {
      if (response.ok) {
        alert(`Success: ${response.status}`);
        return response.json();
      }
      throw new Error('Error' + response.statusText);
    })
    .then(data => {
      data.data.reduce((acc, item) => {
        acc = ` ${item.id}|${item.name}|${item.age} `;
        resultAll.textContent = resultAll.textContent + acc;
      }, '');
    })
    .catch(err => console.log(err));
}

function getUserById(id) {
  return fetch(apiUrl)
    .then(response => {
      if (response.ok) {
        alert(`Success: ${response.status}`);
        return response.json();
      }
      throw new Error('Error' + response.statusText);
    })
    .then(data => {
      const find = data.data.find(item => item.id === id);
      if (!find) {
        resultGetUserById.textContent = 'Такого пользователя в списке нет!';
      } else {
        resultGetUserById.textContent = `${find.id}|${find.name}|${find.age}`;
      }
    })
    .catch(err => console.log(err));
}
function addUser(name, age) {
  return fetch(apiUrl, {
    method: 'POST',
    body: JSON.stringify({ name: name, age: age }),
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (response.ok) {
        alert(`Success: ${response.status}`);
        return response.json();
      }
      throw new Error('Error' + response.statusText);
    })
    .catch(err => console.log(err));
}
function removeUser(id) {
  const newUrl = apiUrl + id;
  return fetch(newUrl, {
    method: 'DELETE',
  })
    .then(response => {
      if (response.ok) {
        alert(`Success: ${response.status}`);
        return response.json();
      }
      throw new Error('Error' + response.statusText);
    })
    .catch(err => console.log(err));
}
function updateUser(id, user) {
  const newUrl = apiUrl + id;
  return fetch(newUrl, {
    method: 'PUT',
    body: JSON.stringify(user),
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then(response => {
      if (response.ok) {
        alert(`Success: ${response.status}`);
        return response.json();
      }
      throw new Error('Error' + response.statusText);
    })
    .catch(err => console.log(err));
}
