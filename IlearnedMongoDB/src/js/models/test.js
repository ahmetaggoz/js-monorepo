// verilere buradan ulaş
export default class Search {
    constructor(keyword) {
        this.keyword = keyword;
    }

    async getResult(){
        const response = await fetch(`https://dummyjson.com/products/search?q=${this.keyword}`);
        this.data = await response.json();
        this.data = this.data.products;
    }
}