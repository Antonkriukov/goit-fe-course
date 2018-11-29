'use strict';

const galleryItems = [
  { preview: 'img/preview-1.jpeg', fullview: 'img/fullview-1.jpeg', alt: "alt text 1" },
  { preview: 'img/preview-2.jpeg', fullview: 'img/fullview-2.jpeg', alt: "alt text 2" },
  { preview: 'img/preview-3.jpeg', fullview: 'img/fullview-3.jpeg', alt: "alt text 3" },
  { preview: 'img/preview-4.jpeg', fullview: 'img/fullview-4.jpeg', alt: "alt text 4" },
  { preview: 'img/preview-5.jpeg', fullview: 'img/fullview-5.jpeg', alt: "alt text 5" },
  { preview: 'img/preview-6.jpeg', fullview: 'img/fullview-6.jpeg', alt: "alt text 6" },
];

document.addEventListener('DOMContentLoaded', () => {
  const imgPreviewArr = document.querySelectorAll('img');
  imgPreviewArr[1].classList.add('focused');
  imgFullview.setAttribute('src', galleryItems[0].fullview);
});

const imageGallery = document.querySelector('.js-image-gallery');

const container = document.createElement('div');
const fullView = document.createElement('div');
const imgFullview = document.createElement('img');
const preView = document.createElement('ul');

fullView.classList.add('fullview');
preView.classList.add('preview');

const result = createCards (galleryItems);
imageGallery.append(...result); 

function createCards (galleryItems) {
  return galleryItems.map(item => createPostCard(item));
};


function createPostCard ({preview, fullview, alt}) {  

  const previewItem = document.createElement('li');
  const imgPreview = document.createElement('img');


  imgFullview.setAttribute('alt', alt);
  imgPreview.setAttribute('src', preview);
  imgPreview.setAttribute('alt', alt);
  imgPreview.setAttribute('data-fullview', fullview);

  fullView.appendChild(imgFullview);
  preView.append(previewItem);
  previewItem.appendChild(imgPreview);

  container.append(fullView, preView);

  return container;
}

preView.addEventListener('click', getImg);
function getImg (event) {
  const target = event.target;
  const name = target.nodeName
  if (name !== 'IMG') {
  return;
}
  getThatImg(target);
}

function getThatImg (pointedImg) {
  const source = pointedImg.getAttribute('data-fullview');
  const previousImg = preView.querySelector('li img.focused');

  if (previousImg) {
      previousImg.classList.remove('focused');
  }

  pointedImg.classList.add('focused');
  imgFullview.setAttribute('src', source);
}