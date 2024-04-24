const container = document.querySelector(".container");
const movieTitle = document.querySelector(".userInputTitle");
const movieYear = document.querySelector(".userInputYear");
const moviePosterUrl = document.querySelector(".userInputPosterUrl");

const btn = document.querySelector(".button");
const movieTitletoDisplay = document.querySelector(".favouriteMovieTitle");
const movieYeartoDisplay = document.querySelector(".favouriteMovieYear");

let titleInStorage = localStorage.getItem("title");
let yearInStorage = localStorage.getItem("year");
let imageUrlInStorage = localStorage.getItem("imageUrl");

if(titleInStorage && yearInStorage && imageUrlInStorage) {
movieTitletoDisplay.textContent = titleInStorage;
movieYeartoDisplay.textContent = yearInStorage;
container.style.backgroundImage = `linear-gradient(rgba(51, 51, 82, 0.685), rgba(73, 49, 49, 0.582)), 
url("${imageUrlInStorage}")`;                      
 }

btn.addEventListener("click", () => {
let movieTitleInput = movieTitle.value;
let movieYearInput = movieYear.value;
let posterUrlInput = moviePosterUrl.value;

localStorage.setItem("title", movieTitleInput);
localStorage.setItem("year", movieYearInput);
localStorage.setItem("imageUrl", posterUrlInput);

movieTitletoDisplay.textContent = movieTitleInput;
movieYeartoDisplay.textContent = movieYearInput;
container.style.backgroundImage = `linear-gradient(rgba(51, 51, 82, 0.685), rgba(73, 49, 49, 0.582)),url("${posterUrlInput}")`;

movieTitle.value ="";
movieYear.value ="";
moviePosterUrl.value ="";
 }); 