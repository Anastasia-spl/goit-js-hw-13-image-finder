import './styles.css';
import 'material-design-icons';
import { notifyInfo } from './components/notifications.js'

import refs from './refs.js'
import apiService from './apiService.js';
import createGallery from './templating/image-card.js';
import LoadMoreBtn from './components/loadMoreBtn.js';
import './components/lightbox.js';

const loadMoreBtn = new LoadMoreBtn({
    selector: '.js-loadMoreImages',
    hidden: true,
});

refs.searchForm.addEventListener('submit', onSearchForm);
loadMoreBtn.refs.button.addEventListener('click', onLoadMoreBtn);

function onSearchForm(event) {
    const form = event.currentTarget;
    apiService.query = form.elements.query.value;

    event.preventDefault();
    refs.imagesContainer.innerHTML = '';
    apiService.resetPage();
    loadMoreBtn.hide();
    fetchImages();
}

function onLoadMoreBtn(event) {
    apiService.page += 1;
    fetchImages();
}

function fetchImages() {
    loadMoreBtn.disable();
    apiService.fetchImages()
        .then((images) => {
            if (images.length !== 0) {
                 createGallery(images);
                window.scrollTo({
                    top: document.documentElement.offsetHeight,
                    behavior: "smooth",
                });
                loadMoreBtn.show();
                loadMoreBtn.enable();
            }
            else if (refs.imagesContainer.childElementCount !== 0 && images.length === 0) {
                loadMoreBtn.hide();
                notifyInfo('There are no more images for this request');
            } else {
                notifyInfo('Try another word', 'No images found for this request');
            }
               
        });
}
