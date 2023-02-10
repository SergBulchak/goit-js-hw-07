import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector(".gallery");
const galleryMarkup = createGalleryofImages(galleryItems);
galleryContainer.insertAdjacentHTML("afterbegin", galleryMarkup);

galleryContainer.addEventListener("click", onGalleryItemClick);

function createGalleryofImages(galleryItems) {
    const galleryImg = galleryItems.map(({ preview, original, description }) =>{
        return `<div class="gallery__item">
        <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
        </a>
    </div>`
    })
        .join("");
    return galleryImg;
};

function onGalleryItemClick(event) {
    event.preventDefault();
     if (event.target.nodeName !== "IMG") {
    return;
    };

    const instance = basicLightbox.create(
    `<img src="${event.target.dataset.source}" width="800" height="600">`,
    {
      onShow: instance => {
        document.addEventListener('keydown', closeModal);
      },
      onClose: instance => {
        document.removeEventListener('keydown', closeModal);
      },
    }
  );
  function closeModal(event) {
    if (event.code === 'Escape') {
      instance.close();
    }
  }
  instance.show();
};


