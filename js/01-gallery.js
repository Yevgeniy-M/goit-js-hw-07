import { galleryItems } from './gallery-items.js';
// Change code below this line

const galleryEl = document.querySelector('.gallery')
const imageMarkup = galleryItems.map(img =>
    `<a class="gallery__link" href="large-image.jpg">
    <img
      class="gallery__image"
      src="${img.preview}"
      data-source="${img.original}"
      alt="${img.description}"
      onclick="return false;"
    />
  </a>`).join('')
galleryEl.insertAdjacentHTML('afterbegin', imageMarkup)

galleryEl.addEventListener('click', bigImg)


function bigImg() {

    const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

    instance.show()
  
}






// @моє гімно@
// import { galleryItems } from './gallery-items.js';
// // Change code below this line

// import * as basicLightbox from './basiclightbox';

// // const basicLightbox = require('basiclightbox');


// const imagesMarkup = createimagesMarkup(galleryItems);
// const gallery = document.querySelector('.gallery');
// const imageLink = document.addEventListener('click', onImageLink);

// const instance = basicLightbox.create(`
//      <img src="assets/images/image.png" width="800" height="600">
//  `) 
//  instance.show();


// gallery.insertAdjacentHTML('beforeend', imagesMarkup);

// function createimagesMarkup(images) {
    
//  return images.map(({ preview, original, description }) => {
//   return `
//     <div class="gallery__item">
//      <a class="gallery__link" href="${original}">
//         <img
//           class="gallery__image"
//           src="${preview}"
//           data-source="${original}"
//           alt="${description}"
//           />
//           </a>
//           </div>                 
//           `;
//     })
//     .join('');            
//   }

// function onImageLink(event) {
//   event.preventDefault();
//   if (event.target.nodeName !== "A") {
//     return
//   } else (
//    basicLightbox.create(instance).show()
//   )  
//  };
