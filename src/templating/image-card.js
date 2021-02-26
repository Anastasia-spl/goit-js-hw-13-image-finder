import refs from '../refs';
import imgCardTemplate from '../templates/image-card.hbs';

export default function(requestedImages) {
    const markup = imgCardTemplate(requestedImages);
    refs.imagesContainer.insertAdjacentHTML('beforeend', markup);
};