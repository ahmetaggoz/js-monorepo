export const elements = {
    searchForm: document.getElementById("form-search"),
    searchInput: document.getElementById("txt-keyword"),
    searchResult: document.getElementById("results"),
    movieListContainer: document.getElementById("movie-list-container"),
    movieListHeader: document.getElementById("movie-list-header"),
    movieDetails: document.querySelector(".movie-details"),
    movieDetailsContainer: document.getElementById("movie-details-container"),
    movieDetailsClose: document.getElementById("movie-details-close")
}

export const renderLoader = parent =>{
  const loader = `<div class="loader-01"></div>`;
  parent.insertAdjacentHTML("beforebegin", loader);
};

export const clearLoader = parent =>{
  const loader = parent.previousSibling;
  if(loader)
    loader.parentNode.removeChild(loader);
};



export const image_size = {
    backdrop_sizes: [
        "w300",
        "w780",
        "w1280",
        "original"
      ],
      logo_sizes: [
        "w45",
        "w92",
        "w154",
        "w185",
        "w300",
        "w500",
        "original"
      ],
      poster_sizes: [
        "w92",
        "w154",
        "w185",
        "w342",
        "w500",
        "w780",
        "original"
      ],
      profile_sizes: [
        "w45",
        "w185",
        "h632",
        "original"
      ],
      still_sizes: [
        "w92",
        "w185",
        "w300",
        "original"
      ]
}