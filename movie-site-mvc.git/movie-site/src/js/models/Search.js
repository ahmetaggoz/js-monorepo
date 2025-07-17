import {api_key, url} from "../config";


export default class Search {
    constructor(keyword) {
        this.keyword = keyword;
    }

    
    async getResult() {
        

        const response = await fetch(`${url}/search/movie?api_key=${api_key}&page=1&query=${this.keyword}`);
        this.data = await response.json();
    }


}