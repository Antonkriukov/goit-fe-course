'use strict';

const posts = [
  {
    img: 'https://placeimg.com/400/150/arch',
    title: 'Post title 1',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!',
    link: 'link-1.com',
  },
  {
    img: 'https://placeimg.com/400/150/nature',
    title: 'Post title 2',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!',
    link: 'link-2.com',
  },
  {
    img: 'https://placeimg.com/400/150/arch',
    title: 'Post title 3',
    text:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!',
    link: 'link-3.com',
  },
];

const body = document.querySelector('body');
const elements = createCards(posts);

body.append(...elements);

function createCards(arr) {
  return arr.reduce((acc, el) => acc.concat(createPostCard(el)), []);
}

function createPostCard({ img, title, text, link }) {
  const post = document.createElement('div');
  post.classList.add('post');

  const postImage = document.createElement('img');
  postImage.classList.add('post__image');
  postImage.setAttribute('src', img);
  postImage.setAttribute('alt', 'post image');

  const postTitle = document.createElement('h2');
  postTitle.classList.add('post__title');
  postTitle.textContent = title;

  const postText = document.createElement('p');
  postText.classList.add('post__text');
  postText.textContent = text;

  const button = document.createElement('button');
  button.classList.add('button');
  button.setAttribute('href', link);
  button.textContent = 'Read more';

  post.append(postImage, postTitle, postText, button);

  return post;
}

