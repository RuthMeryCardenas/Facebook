"use strict";

const Profile = (update) => {
  const profile = $('<div class="profile"></div>');

  profile.append(NewPost());

  return profile;
};

const NewPost = () => {
  const newPost = $('<fieldset class="new-post"></fieldset>');

  const contentPost = $('<textarea class="content" rows="7" placeholder="¿Qué estás pensando?"></textarea>');

  const actions = $('<div class="actions"></div>');
  const privacy = $('<select class="privacy"></select>');
  privacy.append('<option value="0">Amigos</option>');
  privacy.append('<option value="1">Público</option>');
  const btn_toPost = $('<button id="js-btn-toPost" class="btn-facebook" type="button">Publicar</button>');
  actions.append(privacy);
  actions.append(btn_toPost);

  newPost.append(contentPost);
  newPost.append(actions);

  return newPost;
}
