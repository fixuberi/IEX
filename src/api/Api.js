export default class Api {
    constructor() {
        this.root = 'https://api.iextrading.com/1.0/';
        this.get = this.get.bind(this);
        this.apiClient = {
            get: this.get
        }
    }
    async get(path) {
        const response = await fetch(this.root + path);
        this.checkResponseStatus(response);
        return response.json();
    }
    checkResponseStatus(response) {
        if(response.status >= 300) throw response.status;
    }
}