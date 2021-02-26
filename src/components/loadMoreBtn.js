export default class LoadMoreBtn {
    constructor({ selector, hidden = false}) {
        this.refs = this.getRefs(selector);
        hidden && this.refs.button.classList.add('visually-hidden');
    }

    getRefs(selector) {
        const refs = {};
        refs.button = document.querySelector(selector);
        refs.spinner = refs.button.querySelector('.js-spinner');
        refs.label = refs.button.querySelector('.js-label');
        return refs;
    }

    show() {
        this.refs.button.classList.remove('visually-hidden');
    }

    hide() {
        this.refs.button.classList.add('visually-hidden');
    }
  
    disable() {
        this.refs.button.disable = true;
        this.refs.label.textContent = "Loading...";
        this.refs.spinner.classList.remove('visually-hidden');
    }

    enable() {
        this.refs.label.textContent = "Load more";
        this.refs.button.disable = false;
        this.refs.spinner.classList.add('visually-hidden');
    }
}