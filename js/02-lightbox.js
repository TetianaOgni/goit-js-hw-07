import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector(".gallery");
const galleryLink = document.querySelector(".gallery__link");

const stringGalleryItems = createGalleryItems(galleryItems);
createGalleryList(stringGalleryItems);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                     <img
                        class="gallery__image"
                        src="${preview}"
                        alt="${description}"
                    />
                </a>
              </li>`;
    })
    .join("");
}
function createGalleryList(items) {
  gallery.innerHTML = items;
}

let lightbox = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
