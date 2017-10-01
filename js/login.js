"use strict";

const Login = (update) => {
  const form = $('<div class="form"></div>');

  const userAction1 = $('<div class="user-action"></div>');
  const userEmail = $('<input type="text" id="js-user-email" value="">');
  userAction1.append('<label for="user-email">Email</label>');
  userAction1.append(userEmail);
  userAction1.append('<span class="js-error-message">Mensaje de error</span>');

  const userAction2 = $('<div class="user-action"></div>');
  const userPassword = $('<input type="password" id="js-user-password" value="">');
  userAction2.append('<label for="user-password">Password</label>');
  userAction2.append(userPassword);
  userAction2.append('<span class="js-error-message">Mensaje de error</span>');

  const btnContainer = $('<div class="btn-container"></div>');
  const btnLogin = $('<button class="btn js-btn-login" type="button" >Login</button>');
  btnContainer.append(btnLogin);


  btnLogin.on('click', (e) => {
    // validationsForm(userEmail, userPassword);
  });
  form.append(userAction1);
  form.append(userAction2);
  form.append(btnContainer);

  return form;
};
