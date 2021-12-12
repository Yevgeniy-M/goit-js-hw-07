import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery')
const imageMarkup = galleryItems.map(img =>
    `<a class="gallery__item" href="${img.original}">
    <img
      class="gallery__image"
      src="${img.preview}"
      alt="${img.description}"
      />
  </a>`).join('')
galleryEl.insertAdjacentHTML('afterbegin', imageMarkup)

let lightbox = new SimpleLightbox(".gallery a", {
      captionsData: `alt`,
      captionType: 'attr',
      captionDelay: 250,
});

lightbox.open();