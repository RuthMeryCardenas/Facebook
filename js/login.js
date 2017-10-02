"use strict";

const Login = (update) => {
  const form = $('<div class="form"></div>');

  const userAction1 = $('<div class="user-action"></div>');
  const userEmail = $('<input type="text" id="js-user-email" value="">');
  userAction1.append('<label for="user-email">Email</label>');
  userAction1.append(userEmail);
  userAction1.append('<span class="js-error-message no-visibility">error 1</span>');

  const userAction2 = $('<div class="user-action"></div>');
  const userPassword = $('<input type="password" id="js-user-password" value="">');
  userAction2.append('<label for="user-password">Password</label>');
  userAction2.append(userPassword);
  userAction2.append('<span class="js-error-message no-visibility">error 2</span>');

  const btnContainer = $('<div class="btn-container"></div>');
  const btnLogin = $('<button class="btn js-btn-login" type="button" >Login</button>');
  btnContainer.append(btnLogin);


  btnLogin.on('click', (e) => {
    // Validar formulario de login
    if (validateForm(userEmail.val(), userPassword.val())) {
      // Cambiar pantalla de la app
      updateItem('screen', 'profile', 'string');
      
      // Renderizar componente raíz
      const root = $('#root');
      render(root);
    }
  });

  form.append(userAction1);
  form.append(userAction2);
  form.append(btnContainer);

  return form;
};

const validateForm = (userEmail, userPassword) => {
  const message1 = $('.js-error-message')[0];
  const message2 = $('.js-error-message')[1];
  const statusValidations = {
    email: false,
    password: false
  };

  // Validar inputs del formulario
  if (userEmail == "") {
    $(message1).removeClass('no-visibility');
    $(message1).text("El campo usuario no puede estar en blanco");
    statusValidations.email = false;
  }else if (!(/([a-z]+[a-z1-9._-]*)@{1}([a-z1-9\.]{2,})\.([a-z]{2,3})/.test(userEmail))) {
    $(message1).removeClass('no-visibility');
    $(message1).text("Formato inválido de email");
    statusValidations.email = false;
  }else {
    $(message1).addClass('no-visibility');
    statusValidations.email = true;
  }

  if (userPassword == "") {
    $(message2).removeClass('no-visibility');
    $(message2).text("El campo contraseña no puede estar en blanco");
    statusValidations.password = false;
  }else {
    $(message2).addClass('no-visibility');
    statusValidations.password = true;
  }

  // Validar si es un usuario válido
  if (statusValidations.email && statusValidations.password) {
    const user = searchItem ('users', (user) => user.email == userEmail);

    if (user !== null) {
      if (user.password != userPassword) {
        $(message2).removeClass('no-visibility');
        $(message2).text("Contraseña incorrecta");
      }else {
        $(message2).addClass('no-visibility');
        // Actualizar estado del login del usuario
        updateSubItem (selectItem('users'), user, 'login', true);
        return true;
      }
    }else {
      $(message1).removeClass('no-visibility');
      $(message1).text("Usuario no registrado");
    }
  }
  return false;
};
