import { galleryItems } from './gallery-items.js';
// Change code below this line


const imagesMarkup = createimagesMarkup(galleryItems);
const gallery = document.querySelector('.gallery');
const imageLink = document.addEventListener('click', onImageLink)



gallery.insertAdjacentHTML('beforeend', imagesMarkup);

function createimagesMarkup(images) {
    
 return images.map(({ preview, original, description }) => {
  return `
    <div class="gallery__item">
     <a class="gallery__link" href="${original}">
        <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}"
          />
          </a>
          </div>                 
          `;
    })
    .join('');            
  }




function onImageLink(event) {
  event.preventDefault();
  if (event.target.nodeName !== "A") {
    return
  } else (
   basicLightbox.create(instance).show()
  )  
 };







