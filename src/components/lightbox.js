import refs from '../refs';
import lightboxTpl from '../templating/lightbox.js'

refs.imagesContainer.addEventListener('click', onOpensModal);
refs.closingBtn.addEventListener('click', onClosesModal);
refs.lightbox.addEventListener('click', onBackdropClick);

function onOpensModal(event) {
    event.preventDefault();
    const clickedImg = event.target;
    if (clickedImg.nodeName !== 'IMG') {
        return;
    }
    const currentImg = event.target.dataset;
    const { largeimg, likes, views, comments, downloads, id } = currentImg;
    lightboxTpl({ largeimg, likes, views, comments, downloads, id });
    refs.lightbox.classList.add('is-open'); 

    window.addEventListener('keydown', onEscPress);
}

function onEscPress(event) {
    if (event.code === 'Escape') {
        onClosesModal();
    }
}

function onClosesModal() {
    refs.lightbox.classList.remove('is-open'); 
    window.removeEventListener('keydown', onEscPress);
}

function onBackdropClick(event) {
    if (event.target.classList.contains('lightbox__overlay')) {
        onClosesModal();
    }
}
