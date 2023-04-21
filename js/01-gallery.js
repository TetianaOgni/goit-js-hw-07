import { galleryItems } from "./gallery-items.js";
// Change code below this line

const gallery = document.querySelector(".gallery");
const galleryLink = document.querySelector(".gallery__link");

const stringGalleryItems = createGalleryItems(galleryItems);
createGalleryList(stringGalleryItems);

gallery.addEventListener("click", onGalleryItemClick);

function createGalleryItems(galleryItems) {
  return galleryItems
    .map(({ description, original, preview }) => {
      return `<li class="gallery__item">
                <a class="gallery__link" href="${original}">
                     <img
                        class="gallery__image"
                        src="${preview}"
                        data-source="${original}"
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

function onGalleryItemClick(event) {
  cancelGalleryLinkClick(event);

  if (event.target.nodeName !== "IMG") {
    return;
  }

  const instance = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
  `);
  instance.show();
  onEscKeyPress(instance);
}

function onEscKeyPress(instance) {
  window.addEventListener("keydown", (event) => {
    if (event.code === "Escape") {
      instance.close();
      window.removeEventListener("keydown", event);
      console.log("не слухає");
    }
  });
}

function cancelGalleryLinkClick(event) {
  event.preventDefault();
}

console.log(galleryItems);
