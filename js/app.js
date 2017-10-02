"use strict";

const state = {
  currentScreen: null
}

$().ready(() => {
  // Cargando usuarios válidos en local storage
  insertItem('users', users);

  // Renderizando el componente raíz
  const root = $('#root');
  render(root);
});

const render = (root)=>{
  root.empty();
  const wrapper = $('<div class="wrapper"></div>');

  if(state.screen == null){
    wrapper.append(Login(() => render(root)));
    state.currentScreen == "login";
  }else{
    // section.append(state.screen( _ => render(root)));
  }
  root.append(wrapper);
};
