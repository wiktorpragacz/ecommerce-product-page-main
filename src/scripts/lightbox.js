import { formatThumbnailSrc } from "./slider.js";

const thumbnails = document.querySelectorAll(".thumbnail-photo");
const lightboxThumbnail = document.querySelectorAll(
  ".lightbox-thumbnail-photo"
);
const lightboxThumbnailPhoto = document.querySelectorAll(
  ".lightbox-thumbnail-photo"
);
const lightbox = document.querySelector(".lightbox-container");
const lightboxPhoto = document.querySelector(".lightbox-main-photo");
const thumbailButtons = document.querySelectorAll(".thumbnail-btn");

let photoIndex = 0;

thumbailButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    deleteActiveClass();

    if (btn.matches(".next-btn-thumbnail")) {
      deleteActiveClass();

      photoIndex++;

      if (photoIndex > thumbnails.length - 1) {
        lightboxThumbnailPhoto[0].classList.add("active-thumbnail");
        photoIndex = 0;
      }

      lightboxThumbnailPhoto[photoIndex].classList.add("active-thumbnail");

      const currentPhoto = formatThumbnailSrc(thumbnails[photoIndex]);
      lightboxPhoto.setAttribute("src", currentPhoto);
    }

    if (btn.matches(".prev-btn-thumbnail")) {
      deleteActiveClass();
      photoIndex--;

      if (photoIndex < 0) {
        lightboxThumbnailPhoto[3].classList.add("active-thumbnail");
        photoIndex = 3;
      }
      lightboxThumbnailPhoto[photoIndex].classList.add("active-thumbnail");

      const currentPhoto = formatThumbnailSrc(thumbnails[photoIndex]);
      lightboxPhoto.setAttribute("src", currentPhoto);
    }
  });
});

function deleteActiveClass() {
  lightboxThumbnailPhoto.forEach((photo) =>
    photo.classList.remove("active-thumbnail")
  );
}

window.addEventListener("click", (e) => {
  if (e.target.matches(".thumbnail-photo")) {
    const currentThumbnail = e.target;
    // checks what thumbnail got clicked and set it as a main photo
    const currentPhoto = formatThumbnailSrc(currentThumbnail);
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
    deleteActiveClass();
    e.target.classList.add("active-thumbnail");
    const correctPhoto = formatThumbnailSrc(e.target);

    // find number in src and set it as photoIndex
    photoIndex = filterNumberFromSrc(correctPhoto);
    lightboxPhoto.setAttribute("src", correctPhoto);
  });
});

function filterNumberFromSrc(src) {
  return src
    .split("")
    .filter((element) => /[0-9]/.test(element))
    .join("");
}

