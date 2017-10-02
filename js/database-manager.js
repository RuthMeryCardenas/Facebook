"use strict";

// Usuarios válidos
const users = [{id: 0, login:false, email: "ruth.cardenas.perez@gmail.com", password: "mery"},
               {id: 1, login:false, email: "vania@laboratoria.la", password: "vania"}];

// Añade un nuevo item al local storage
const insertItem = (key, value, datatype) => {
  if (datatype == 'string') {
    if (selectItem(key, 'string') === null) {
      localStorage.setItem(key, value);
    }
  }
  if (datatype === undefined){
    if (selectItem(key) === null) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
};

// Obtiene el valor de un item existente del local storage
const selectItem = (key, datatype) => {
  if (datatype == 'string') {
    return localStorage.getItem(key);
  }
  return JSON.parse(localStorage.getItem(key));
};

// Elimina un item exixtente del local storage
const deleteItem = (key) => {
  localStorage.removeItem(key);
  return  true;
}

// Actualiza el valor de un item del local storage
const updateItem = (key, value, datatype) => {
  if (datatype == 'string') {
    if (selectItem(key, 'string') !== null) {
      localStorage.setItem(key, value);
    }
    localStorage.setItem(key, value);
  }
  if (datatype === undefined){
    if (selectItem(key) !== null) {
      localStorage.setItem(key, JSON.stringify(value));
    }
  }
};

// Actualiza el valor de un item del local storage
const updateSubItem = (key, element, subKey, newValue) => {
  let data = key;

  if (data[element.id][subKey] != newValue) {
    data[element.id][subKey] = newValue;
    localStorage.setItem('users', JSON.stringify(data));
    return true;
  }
  return false;
};

// Busca el valor de un item del local storage
const searchItem = (key, callback) => {
  const data = selectItem(key);

  if (data !== null) {
    const result = data.filter(callback)[0];
    if (result !== undefined) {
      return result;
    }
  }
  return null;
};

// Limpia el local storage
const resetDB = () => {
  localStorage.clear();
};
