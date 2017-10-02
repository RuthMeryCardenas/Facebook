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
    insertItem('screen', 'login', 'string');
    wrapper.append(Login(() => render(root)));
    console.log("Login | default screen");
      break;
    case 'login':
    wrapper.append(Login(() => render(root)));
    console.log("Login | refresh screen");
      break;
    case 'profile':
    wrapper.append(Profile(() => render(root)));
    console.log("Profile | logged user");
      break;
    default:
  }

  root.append(wrapper);
};
