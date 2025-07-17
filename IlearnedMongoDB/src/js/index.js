import  Search  from "./models/test";
import { elements } from "./base";
import * as searchView from './views/searchViews';

const state = {}

// Search Controller
const SearchController = async () => {
    const keyword = elements.searchInput.value;

    if(keyword) {
        state.search = new Search(keyword);

        // console.log(await state.search.getResult())
        // console.log(state.search.data)

        await state.search.getResult();
        searchView.displayResults(state.search.data);
        console.log("butona tiklandi")
        // console.log(state.search.data.products)

    }else{
        alert("anahtar kelime giriniz.");
    }
}

elements.searchForm.addEventListener("submit", function(e){
    e.preventDefault();
    SearchController();
})