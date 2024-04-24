const container = document.querySelector(".container");
const movieTitle = document.querySelector(".userInputTitle");
const moviePosterUrl = document.querySelector(".userInputPosterUrl");
const btn = document.querySelector(".button");
const movieTitletoDisplay = document.querySelector(".favouriteMovieTitle");

let titleInStorage = localStorage.getItem("title");
let imageUrlInStorage = localStorage.getItem("imageUrl");

if(titleInStorage && imageUrlInStorage) {
movieTitletoDisplay.textContent = titleInStorage;
container.style.backgroundImage = `linear-gradient(rgba(51, 51, 82, 0.685), rgba(73, 49, 49, 0.582)), 
url("${imageUrlInStorage}")`;                      

 }


btn.addEventListener("click", () => {
let movieTitleInput = movieTitle.value;
let posterUrlInput = moviePosterUrl.value;
localStorage.setItem("title", movieTitleInput);
localStorage.setItem("imageUrl", posterUrlInput);
movieTitletoDisplay.textContent = movieTitleInput;
container.style.backgroundImage = `linear-gradient(rgba(51, 51, 82, 0.685), rgba(73, 49, 49, 0.582)),url("${posterUrlInput}")`;
movieTitle.value ="";
moviePosterUrl.value ="";
 }); 