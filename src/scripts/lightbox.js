import { formatThumbnailSrc } from "./slider.js";

const thumbnails = document.querySelectorAll(".thumbnail-photo");
const lightboxThumbnailPhoto = document.querySelectorAll(
  ".lightbox-thumbnail-photo"
);
const lightbox = document.querySelector(".lightbox-container");
const lightboxPhoto = document.querySelector(".lightbox-main-photo");
const thumbnailButtons = document.querySelectorAll(".thumbnail-btn");

let photoIndex = 0;

thumbnailButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    if (btn.matches(".next-btn-thumbnail")) {
      photoIndex++;

      if (photoIndex > thumbnails.length - 1) {
        photoIndex = 0;
      }

      const currentPhoto = formatThumbnailSrc(thumbnails[photoIndex]);
      lightboxPhoto.setAttribute("src", currentPhoto);
    }

    if (btn.matches(".prev-btn-thumbnail")) {
      photoIndex--;

      if (photoIndex < 0) {
        photoIndex = thumbnails.length - 1;
      }

      const currentPhoto = formatThumbnailSrc(thumbnails[photoIndex]);
      lightboxPhoto.setAttribute("src", currentPhoto);
    }
  });
});

window.addEventListener("click", (e) => {
  if (e.target.matches(".thumbnail-photo")) {
    const currentThumbnail = e.target;
    // remove -thumbnail from photo src and set as current photo
    const currentPhoto = formatThumbnailSrc(currentThumbnail);

    photoIndex = filterNumberFromSrc(currentPhoto) - 1;

    // checks what thumbnail got clicked and set it as a main photo
    lightboxPhoto.setAttribute("src", currentPhoto);

    document.body.classList.add("hide-overflow");
    lightbox.classList.add("show-lightbox");
  } else if (lightbox.classList.contains("show-lightbox")) {
    if (
      e.target.matches(".close-btn-lightbox") ||
      (e.target.matches(".lightbox-container") &&
        !e.target.matches(".lighbox-main-photo") &&
        !e.target.matches(".thumbnail-photo"))
    ) {
      document.body.classList.remove("hide-overflow");
      closeLightbox();
    }
  }
});

function closeLightbox() {
  lightbox.classList.remove("show-lightbox");
}

lightboxThumbnailPhoto.forEach((thumbnail) => {
  thumbnail.addEventListener("click", (e) => {
    const correctPhoto = formatThumbnailSrc(e.target);

    // find number in src and set it as photoIndex
    photoIndex = filterNumberFromSrc(correctPhoto);
  });
});

function filterNumberFromSrc(src) {
  return src
    .split("")
    .filter((element) => /[0-9]/.test(element))
    .join("");
}
