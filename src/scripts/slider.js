export { formatThumbnailSrc };

//       mobile photo slider
const image = document.querySelector(".photos-section > img");
const slideBtn = document.querySelectorAll(".slide-btn");
const thumbnailPhoto = document.querySelectorAll(".thumbnail-photo");

slideBtn.forEach((btn) => {
  btn.addEventListener(
    "click",
    btn.classList.contains("prev-btn") ? showPrevPhoto : showNextPhoto
  );
});

let photoID = 1;
function showPrevPhoto() {
  photoID--;

  if (photoID < 1) {
    photoID = 4;
    image.setAttribute("src", `./images/image-product-4.jpg`);
    removeActiveClass();
  } else {
    image.setAttribute("src", `./images/image-product-${photoID}.jpg`);
    removeActiveClass();
  }
}

function showNextPhoto() {
  photoID++;

  if (photoID > 4) {
    photoID = 1;
    image.setAttribute("src", `./images/image-product-1.jpg`);
    removeActiveClass();
  } else {
    image.setAttribute("src", `./images/image-product-${photoID}.jpg`);
    removeActiveClass();
  }
}
//      desktop photo slider
// default active state
thumbnailPhoto[0].classList.add("active-photo");

thumbnailPhoto.forEach((photo) => {
  photo.addEventListener("click", setMainPhoto);
});

function setMainPhoto(e) {
  // remove active class and set it on thumbnail photo
  removeActiveClass();
  Array.from(thumbnailPhoto).map((photo) =>
    photo.classList.remove("active-photo")
  );
  const currentThumbnail = e.target;
  currentThumbnail.classList.add("active-photo");
  // remove'-thumbnail' from thumbnail photo url
  const correctSrc = formatThumbnailSrc(currentThumbnail)
  image.setAttribute("src", correctSrc);
}

function removeActiveClass() {
  Array.from(thumbnailPhoto).map((photo) =>
    photo.classList.remove("active-photo")
  );
  thumbnailPhoto[photoID - 1].classList.add("active-photo");
}

function formatThumbnailSrc(thumbnail) {
  return thumbnail.getAttribute('src').replace("-thumbnail", "")
}

