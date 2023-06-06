const API_KEY = "asda";
const BASE_URL = "asda";
const API_URL = "asda";
const IMG_URL = "sad";

const fetchData = () => {
  fetch(API_URL)
    .then((response) => response.json())
    .then((data) => {
      const movies = data.results;
      movieList(movies);
    });
};

const movieList = (movies) => {
  movies.map((movie) => {
    const movieElement = document.createElement("div");
    movieElement.classList.add("movie");

    movieElement.innerHTML = `
      <div class="movide-card">
      <h3></h3>
      <img src="${IMG_URL}" alt="${movie.title}" />
      <p></p>
      <p class="${changeColor(vote)}"></p>
    </div>
      `;
  });
};
