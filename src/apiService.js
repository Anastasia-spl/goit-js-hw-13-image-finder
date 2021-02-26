import axios from 'axios';
import { notifyError }  from './components/notifications.js'
        
export default {
    searchQuery: '',
    page: 1,
    
    fetchImages() {
        const key = '20395824-d8cdb960c2a62f226b2cade5d';
        return axios(`https://pixabay.com/api/?q=${this.query}&key=${key}&per_page=12&page=${this.page}`)
            .then(({ data: { hits } }) => hits) 
            .catch((err) => notifyError(err));
    },
    
    resetPage() {
        this.page = 1;
    },

    get query() {
        return this.searchQuery;
    },
    set query(value) {
        this.searchQuery = value;
    },
}