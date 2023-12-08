import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryContainer = document.querySelector("ul.gallery");
let lightbox;

const addKeyboardListener = () => {
  document.addEventListener("keydown", handleKeyPress);
};

const removeKeyboardListener = () => {
  document.removeEventListener("keydown", handleKeyPress);
};

const handleKeyPress = (event) => {
  if (event.key === "Escape" && lightbox) {
    lightbox.close();
    removeKeyboardListener();
  }
};

const images = galleryItems.map((item) => {
  return `<li class="gallery__item">
      <a class="gallery__item-link" href="${item.original}">
          <img
              class="gallery__image"
              src="${item.preview}"
              data-source="${item.original}"
              alt="${item.description}"
          />
      </a>
  </li>`;
});

galleryContainer.insertAdjacentHTML("beforeend", images.join(""));

lightbox = new SimpleLightbox(".gallery__item-link", {
  captionsData: "alt",
  captionDelay: 250,
});
