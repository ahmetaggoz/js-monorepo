import {api_key, url} from "../config";



export class Movie {
    constructor(id){
        this.id = id;
    }


    async GetMovie(){
        const response = await fetch(`${url}/movie/${this.id}?api_key=${api_key}`);
        this.data = await response.json();
    }
}