"use strict";

const ModalBody = (action, root) => {
  const modalBody = $('<div class="modal-body"></div>');

  const header = $('<div class="modal-header"></div>');
  const btn_close = $('<button id="js-close-modal" class="btn-close" type="button">X</button>');
  header.append('<span>' + action + '</span>');
  header.append(btn_close);

  modalBody.append(header);
  modalBody.append(root());

  btn_close.on('click', (e) => {
    hideModal($('.modal'));
  });

  return modalBody;
};

const ModalUpdate = () => {
  const root = $('<div class="modal-root"></div>');

  const modalUpdate = $('<fieldset class="new-post"></fieldset>');

  const content = $('<textarea class="content" rows="7" placeholder="¿Qué estás pensando?"></textarea>');

  const actions = $('<div class="actions"></div>');
  const privacy = $('<select class="privacy"></select>');
  privacy.append('<option value="0">Amigos</option>');
  privacy.append('<option value="1">Público</option>');
  const btn_toPost = $('<button id="js-btn-toPost" class="btn-facebook" type="button">Guardar</button>');
  actions.append(privacy);
  actions.append(btn_toPost);

  modalUpdate.append(content);
  modalUpdate.append(actions);

  root.append(modalUpdate);

  return root;
};

const ModalDelete = () => {
  const root = $('<div class="modal-root"></div>');

  const modalDelete = $('<div class="confirm-delete"></div>');

  const content = $('<p>Esta publicación se eliminará y ya no podrás encontrarla. Puedes editarla si solo quieres modificar alguno de sus elementos.</p>');

  const actions = $('<div class="actions"></div>');
  const btn_cancel = $('<button class="btn-default" type="button">Cancelar</button>');
  const btn_delete = $('<button class="btn-facebook" type="button">Eliminar</button>');
  actions.append(btn_cancel);
  actions.append(btn_delete);

  modalDelete.append(content);
  modalDelete.append(actions);

  root.append(modalDelete);

  return root;
};

const showModal = (modal, actionUser, root) => {
  $(modal).removeClass('no-visibility');
  modal.append(ModalBody(actionUser, root));
}
const hideModal = (modal) => {
  $(modal).addClass('no-visibility');
  $(modal).empty();
}
