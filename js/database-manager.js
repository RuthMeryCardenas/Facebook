"use strict";

// Usuarios válidos
const users = [{id: 1, login:false, email: "ruth.cardenas.perez@gmail.com", password: "mery"},
               {id: 2, login:false, email: "vania@laboratoria.la", password: "vania"}];

// Añade un nuevo item a local storage
const insertItem = (key, value) => {
  if (selectItem(key) === null) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// Muestra un item existente de local storage
const selectItem = (key) => JSON.parse(localStorage.getItem(key));

// Elimina un item exixtente de local storage
const deleteItem = (key) => {
  localStorage.removeItem(key);
  return  true;
}
