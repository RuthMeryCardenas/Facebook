$().ready(() => {
  const users = [{id: 1, email: "ruth.cardenas.perez@gmail.com", password: "mery"},
                 {id: 2, email: "vania@laboratoria.la", password: "vania"}];
  insertItem('users', users);
});

const insertItem = (key, value) => {
  if (selectItem(key) === null) {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

const selectItem = (key) => JSON.parse(localStorage.getItem(key));

const deleteItem = (key) => {
  localStorage.removeItem(key);
  return  true;
}
