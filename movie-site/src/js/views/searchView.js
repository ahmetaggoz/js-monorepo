import { elements } from "../base";

export const clearInput = () => {
    elements.searchInput.value = "";
}

export const clearResult = () => {
    elements.searchResult.innerHTML = "";
}



export const displayResult = (keyword,data) => {
    data.results.forEach(movie => {
        const html = `
        <li class="media mb-3">
            <img
                src="https://image.tmdb.org/t/p/w92/${movie.poster_path}"
                onerror="this.src='https://via.placeholder.com/92x138.png';"
                class="mr-3"
                alt="${movie.title}"
            />
            <div class="media-body">
                <h5 class="mt-0 mb-1">
                    <span class="badge badge-primary">${movie.vote_average}</span>
                    <a href="#${movie.id}">${movie.title}</a>
                </h5>
                <p>${movie.overview}</p>
            </div>
      </li>
        `;

        elements.movieListHeader.innerHTML = `"${keyword}" arasında ${data.total_results} sonuç bulundu.`;
        elements.movieListContainer.classList.add("d-block");
        elements.searchResult.insertAdjacentHTML("beforeend", html);
    });
}