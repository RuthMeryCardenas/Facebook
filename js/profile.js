"use strict";

const Profile = (update) => {
  const profile = $('<div class="profile"></div>');

  const filterPosts = $('<div class="filter-posts"></div>');
  const btn_public = $('<button id="js-filter-public" class="btn-underline" type="button">Público</button>');
  const btn_friends = $('<button id="js-filter-friends" class="btn-underline" type="button">Amigos</button>');
  filterPosts.append(btn_public);
  filterPosts.append(btn_friends);

  const containerPosts = $('<div class="profile-posts"></div>');
  printPosts(containerPosts);

  profile.append(NewPost());
  profile.append(filterPosts);
  profile.append(containerPosts);

  return profile;
};

const NewPost = () => {
  const newPost = $('<fieldset class="new-post"></fieldset>');

  const content = $('<textarea class="content" rows="7" placeholder="¿Qué estás pensando?"></textarea>');

  const actions = $('<div class="actions"></div>');
  const privacy = $('<select class="privacy" name="privacy"></select>');
  privacy.append('<option value="public">Público</option>');
  privacy.append('<option value="friends">Amigos</option>');
  const btn_toPost = $('<button id="js-btn-toPost" class="btn-facebook" type="button">Publicar</button>');
  actions.append(privacy);
  actions.append(btn_toPost);

  newPost.append(content);
  newPost.append(actions);

  btn_toPost.on('click', (e) => {
    if (content.val() == "") {
      showModal($('.modal'), 'La publicación está vacía', ModalMessage);
    }else {
      const loggedUser = searchItem ('users', (user) => user.login == true);
      addPost(loggedUser, privacy.val(), content.val());
      printPosts($('.profile-posts'));
      content.val('');
    }
  });
  return newPost;
}

const Post = (id, text) => {
  const post = $('<div data-id="' + id + '" data-selected="false" class="post"></div>');

  const content = $('<p class="content"></p>');
  content.text(text);

  const actions = $('<div class="actions"></div>');
  const btn_modal_update = $('<button class="btn-underline js-open-modal-update" type="button">Editar</button>');
  const btn_modal_delete = $('<button class="btn-underline js-open-modal-delete" type="button">Eliminar</button>');
  actions.append(btn_modal_update);
  actions.append(btn_modal_delete);

  post.append(content);
  post.append(actions);

  btn_modal_update.on('click', (e) => {
    post.attr('data-selected','true');

    const loggedUser = searchItem ('users', (user) => user.login == true);

    showModal($('.modal'), 'Editar publicación', ModalUpdate);
    $('.modal-root .content').text(selectPost(loggedUser, post.data('id')));
  });
  btn_modal_delete.on('click', (e) => {
    post.attr('data-selected','true');
    showModal($('.modal'), 'Eliminar publicación', ModalDelete);
  });

  return post;
};

const printPosts = (container) => {
  container.empty();
  const loggedUser = searchItem ('users', (user) => user.login == true);
  const posts = (loggedUser.posts).reverse();

  if (posts.length > 0) {
    posts.forEach((post) => {
      Post(post.id, post.content);
      container.append(Post(post.id, post.content));
    });
  }else {
    container.append('<span>No hay publicaciones anteriores</span>');
  }
};

const addPost = (user, privacy, content) => {
  let data = selectItem('users');
  const posts = data[user.id].posts;
  const id = posts[posts.length - 1].id + 1;

  posts.push({id: id,
              privacy: privacy,
              content: content});

  updateItem('users', data)
};

const deletePost = (user, idPost) => {
  let data = selectItem('users');
  const posts = data[user.id].posts;
  const currentPost = posts.filter((post) => {return post.id == idPost})[0];

  posts.splice(posts.indexOf(currentPost), 1);

  updateItem('users', data);
  printPosts($('.profile-posts'));
  hideModal($('.modal'));
};

const selectPost = (user, idPost) => {
  let data = selectItem('users');
  const posts = data[user.id].posts;
  const currentPost = posts.filter((post) => {return post.id == idPost})[0];

  return currentPost.content;
};

const updatePost = (user, idPost, privacy, content) => {
  let data = selectItem('users');
  const posts = data[user.id].posts;
  const currentPost = posts.filter((post) => {return post.id == idPost})[0];

  currentPost.privacy = privacy;
  currentPost.content = content;

  updateItem('users', data);
};
