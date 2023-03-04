import { formatThumbnailSrc } from "./slider.js";

const thumbnails = document.querySelectorAll('.thumbnail-photo');
const lightboxThumbnail = document.querySelectorAll('.lightbox-thumbnail-photo');
const lightbox = document.querySelector('.lightbox-container');
const lightboxPhoto = document.querySelector('.lightbox-main-photo');
const thumbailButtons = document.querySelectorAll('.thumbnail-btn');

let photoIndex = 0;

console.log(thumbnails[0])

thumbailButtons.forEach((btn) => {
    btn.addEventListener('click', (e) => {
        if(btn.matches('.next-btn-thumbnail')) {
            photoIndex++
            
            if(photoIndex > thumbnails.length - 1) { photoIndex = 0 }

            const currentPhoto = formatThumbnailSrc(thumbnails[photoIndex])
            lightboxPhoto.setAttribute('src', currentPhoto)
        }

        if(btn.matches('.prev-btn-thumbnail')) {
            photoIndex--

            if(photoIndex < 0) { photoIndex = 3 } 

            const currentPhoto = formatThumbnailSrc(thumbnails[photoIndex])
            lightboxPhoto.setAttribute('src', currentPhoto)
        }
    })
})

window.addEventListener('click', (e) => {
    if(e.target.matches('.thumbnail-photo')) {
        const currentThumbnail = e.target
        // checks what thumbnail got clicked and set it as a main photo
        const currentPhoto = formatThumbnailSrc(currentThumbnail)
        lightboxPhoto.setAttribute('src', currentPhoto)

        document.body.classList.add('hide-overflow')
        lightbox.classList.add('show-lightbox')

    } else if(lightbox.classList.contains('show-lightbox')) {
        if(e.target.matches('.close-btn-lightbox') ||
           e.target.matches('.lightbox-container') &&
          !e.target.matches('.lighbox-main-photo') &&
          !e.target.matches('.thumbnail-photo')) {
            document.body.classList.remove('hide-overflow')
            closeLightbox()
        }
    }
})




function showLighbox(e) {
    console.log(e.currentTarget)
}

function closeLightbox() {
    lightbox.classList.remove('show-lightbox')
}