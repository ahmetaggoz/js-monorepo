// api key: e12b0f9fa373ac67793da28728e413dd
// url: https://api.themoviedb.org/3/
// https://api.themoviedb.org/3/search/movie?api_key=e12b0f9fa373ac67793da28728e413dd&language=en-US&query=abc&page=1&include_adult=false

import Search from "./models/Search";
import { elements, renderLoader, clearLoader } from "./base";
import * as searchView from "./views/searchView"
import * as movieView from "./views/movieView"
import { Movie } from "./models/movie";



const state = {}

// Search Controller
const SearchController = async () => {
    const keyword = elements.searchInput.value;

    if(keyword) {
        state.search = new Search(keyword);


        searchView.clearInput();
        searchView.clearResult();


        renderLoader(elements.movieListContainer);

        await state.search.getResult();



        searchView.displayResult(keyword,state.search.data);

        setTimeout(()=>{
            clearLoader(elements.movieListContainer);
        }, 1000);

    }else{
        alert("anahtar kelime giriniz.");
    }
}




elements.searchForm.addEventListener("submit", function(e){
    e.preventDefault();
    SearchController();
})

// Movie Controller
const MovieController = async () =>{
    const id = window.location.hash.replace("#", "");

    if(id){
        state.movie = new Movie(id);

        renderLoader(elements.movieDetailsContainer);


        await  state.movie.GetMovie();
        movieView.backToTop();
        

        movieView.displayMovie(state.movie.data);

        setTimeout(()=>{
            clearLoader(elements.movieDetailsContainer);
        }, 1000);
    }
};

window.addEventListener("hashchange", MovieController);
elements.movieDetailsClose.addEventListener("click", movieView.closeDetails);