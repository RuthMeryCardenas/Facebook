"use strict";

const Profile = (update) => {
  const profile = $('<div class="profile"></div>');

  const filterPosts = $('<div class="filter-posts"></div>');
  const btn_public = $('<button id="js-filter-public" class="btn-underline" type="button">Público</button>');
  const btn_friends = $('<button id="js-filter-friends" class="btn-underline" type="button">Amigos</button>');
  filterPosts.append(btn_public);
  filterPosts.append(btn_friends);

  const containerPosts = $('<div class="profile-posts"></div>');
  containerPosts.append(Post(0));
  containerPosts.append(Post(1));

  profile.append(NewPost());
  profile.append(filterPosts);
  profile.append(containerPosts);

  return profile;
};

const NewPost = () => {
  const newPost = $('<fieldset class="new-post"></fieldset>');

  const content = $('<textarea class="content" rows="7" placeholder="¿Qué estás pensando?"></textarea>');

  const actions = $('<div class="actions"></div>');
  const privacy = $('<select class="privacy"></select>');
  privacy.append('<option value="0">Amigos</option>');
  privacy.append('<option value="1">Público</option>');
  const btn_toPost = $('<button id="js-btn-toPost" class="btn-facebook" type="button">Publicar</button>');
  actions.append(privacy);
  actions.append(btn_toPost);

  newPost.append(content);
  newPost.append(actions);

  return newPost;
}

const Post = (id) => {
  const post = $('<div id="' + id + '" class="post"></div>');

  const content = $('<p class="content"></p>');
  content.text('Hoy el Laucha tierniza un Matambre de Res en nuestro Horno Tromen y lo termina en la parrilla con unos agregados DELUXE por encima. ¡Una combinación explosiva de sabores!');

  const actions = $('<div class="actions"></div>');
  const btn_modal_update = $('<button class="btn-underline js-open-modal-update" type="button">Editar</button>');
  const btn_modal_delete = $('<button class="btn-underline js-open-modal-delete" type="button">Eliminar</button>');
  actions.append(btn_modal_update);
  actions.append(btn_modal_delete);

  post.append(content);
  post.append(actions);

  return post;
};
