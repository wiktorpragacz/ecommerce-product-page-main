export { formatThumbnailSrc };

const image = document.querySelector(".photos-section > img");
const slideBtn = document.querySelectorAll(".slide-btn");

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
  } else {
    image.setAttribute("src", `./images/image-product-${photoID}.jpg`);
  }
}

function showNextPhoto() {
  photoID++;

  if (photoID > 4) {
    photoID = 1;
    image.setAttribute("src", `./images/image-product-1.jpg`);
  } else {
    image.setAttribute("src", `./images/image-product-${photoID}.jpg`);
  }
}

function formatThumbnailSrc(thumbnail) {
  return thumbnail.getAttribute('src').replace("-thumbnail", "")
}

