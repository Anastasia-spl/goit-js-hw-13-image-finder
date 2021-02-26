import refs from '../refs';
import lightboxTemplate from '../templates/lightbox.hbs';

export default function(imgInfo) {
    const markup = lightboxTemplate(imgInfo);
    refs.lightboxContent.innerHTML = markup;
};