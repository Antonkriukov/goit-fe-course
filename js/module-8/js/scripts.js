'use strict';

const galleryItems = [
  {
    preview: 'img/preview-1.jpeg',
    fullview: 'img/fullview-1.jpeg',
    alt: 'alt text 1',
  },
  {
    preview: 'img/preview-2.jpeg',
    fullview: 'img/fullview-2.jpeg',
    alt: 'alt text 2',
  },
  {
    preview: 'img/preview-3.jpeg',
    fullview: 'img/fullview-3.jpeg',
    alt: 'alt text 3',
  },
  {
    preview: 'img/preview-4.jpeg',
    fullview: 'img/fullview-4.jpeg',
    alt: 'alt text 4',
  },
  {
    preview: 'img/preview-5.jpeg',
    fullview: 'img/fullview-5.jpeg',
    alt: 'alt text 5',
  },
  {
    preview: 'img/preview-6.jpeg',
    fullview: 'img/fullview-6.jpeg',
    alt: 'alt text 6',
  },
];
document.addEventListener('DOMContentLoaded', () => {
  const imgPreviewArr = document.querySelectorAll('img');
  imgPreviewArr[1].classList.add('focused');
});

const imageGallery = document.querySelector('.js-image-gallery');


const fullviewDiv = document.createElement('div');
fullviewDiv.classList.add('fullview');


const previewDiv = document.createElement('ul');
previewDiv.classList.add('preview');

const imgsLi = createImages(galleryItems);



previewDiv.append(...imgsLi);

imageGallery.append(fullviewDiv, previewDiv);

function createImages(galleryItems) {
  return galleryItems.map((item, index) => {
      if (!index) {
          createFullView(item);
      }

      return createImageItem(item);
  });
}

function createImageItem({preview, fullview, alt}) {
  const li = document.createElement('li');
  const img = document.createElement('img');

  img.setAttribute('src', preview);
  img.setAttribute('alt', alt);
  img.setAttribute('data-fullview', fullview);

  li.appendChild(img);
  return li;
}

function createFullView({fullview, alt}) {
  const img = document.createElement('img');

  img.setAttribute('src', fullview);
  img.setAttribute('alt', alt);

  fullviewDiv.appendChild(img);
}


previewDiv.addEventListener('click',  getThatImg);




function getThatImg(event) {
  const target = event.target;
    const images = previewDiv.querySelectorAll('li img');

    const fullViewSrc = document.querySelector('.fullview img');

    fullViewSrc.setAttribute('src', target.dataset.fullview);
    fullViewSrc.setAttribute('alt', target.alt);
  images.forEach((image) => {
      (image!== target)
          ? image.classList.remove('focused')
          : image.classList.add('focused');
  });

}

