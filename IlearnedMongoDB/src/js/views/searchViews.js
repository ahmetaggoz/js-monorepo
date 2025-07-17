import { elements } from "../base";


export const displayResults = data => {
        data.forEach(movie => {
            const html = `
            <p>${movie.title}</p>
            `;
            
            elements.searchResult.insertAdjacentHTML('beforeend', html);
            // console.log(movie)
        });
}
