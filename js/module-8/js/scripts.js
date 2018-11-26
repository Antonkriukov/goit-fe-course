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
  const imageGallery = document.querySelector('.js-image-gallery');

  const fullviewImage = showFullviewImage(galleryItems[0]);
  const previewImages = showPreviewImages(galleryItems);

  imageGallery.innerHTML = fullviewImage;
  imageGallery.innerHTML += previewImages;

  const previewImgs = imageGallery.querySelectorAll('.preview-img');

  const previewActiveImg = previewImgs[0].classList.add('preview-img-active');
  


  imageGallery.addEventListener('click', onImageGalleryClick);

  function onImageGalleryClick({ target }) {
    const hasClass = target.classList.contains('preview-img');

    if (!hasClass) return;

    const activeFullviewImage = imageGallery.querySelector('.fullview-img');

    activeFullviewImage.setAttribute('src', target.dataset.fullview);

    setActivePreviewImg(previewImgs, target);
  }

  function setActivePreviewImg(previewImgs, target) {
    previewImgs.forEach(previewActiveImg => {
      if (previewActiveImg!== target) {
        previewActiveImg.classList.remove('preview-img-active');
      } else {
        previewActiveImg.classList.add('preview-img-active');
      }
    })
    return previewActiveImg;
  }

  function showFullviewImage({ fullview }) {
    const fullviewGalleryItem = `                                                                                                                                                                       
      <div class="fullview-item">
        <img class="fullview-img" src="${fullview}" alt="outdoors">
      </div> 
    `;

    return fullviewGalleryItem;
  }

  function showPreviewImages() {
    const previewGalleryItems = `
  <div class="slider"><ul class="preview-items">
    ${galleryItems.reduce(
      (acc, { preview, fullview, alt }) =>
        acc +
        `
      <li class="preview-item"><img class="preview-img" 
                                    src="${preview}"
                                    data-fullview="${fullview}"
                                    alt="${alt}">
      </li>`,
      '',
    )} 
  </ul></div>`;

    return previewGalleryItems;
  }
});
