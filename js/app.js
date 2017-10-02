"use strict";

$().ready(() => {
  // Cargar usuarios válidos en local storage
  insertItem('users', users);

  // Renderizar componente raíz
  const root = $('#root');
  render(root);
});

// Renderiza el componente raíz según la pantalla actual
const render = (root)=>{
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');
  switch (selectItem('screen', 'string')) {
    case null:
    insertItem('screen', 'login');
    wrapper.append(Login(() => render(root)));
    console.log("pantalla por defecto");
      break;
    case 'login':
    wrapper.append(Login(() => render(root)));
    console.log("pantalla login");
      break;
    case 'profile':
    console.log("pantalla profile");
      break;
    default:
  }

  root.append(wrapper);
};
