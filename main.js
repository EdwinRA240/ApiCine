//
const btnPrePage = document.getElementById("prePage");
const btnNextPage = document.getElementById("nextPage");
const btnNews = document.getElementById("btnNews");
const btnPopulares = document.getElementById("btnPopulares");
let p = 1;

getPopularMovies(p);

btnPrePage.onclick = () => {
  if (p == 1) {
    p = 1;
  } else {
    p -= 1;
  }
  getPopularMovies(p);
};

btnNextPage.onclick = () => {
  p++;
  getPopularMovies(p);
};

btnPopulares.onclick = () => {
  p = 1;
  getPopularMovies(p);
}

btnNews.onclick = () => {
  getLatest();
}



// function latestMovies(p) {

//   async function getLatestMovies() {
//     let moviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${p}`;
//     try {
//       let response = await axios.get(moviesUrl);
//       return response.data.results;
//     } catch (e) {
//       console.log(e);
//       return [];
//     }
//   }

//   let latestMovies;

//   getLatestMovies().then((peliculas) => {
//     latestMovies = peliculas;
    
//     console.log(latestMovies);

//     const buildProductList = (movieList) => {
//       //select the parent HTML tag
//       var getParentElement = document.getElementById("moviesList");
//       getParentElement.innerHTML = "";

//       //Loop the product list array in order to generate the <section> </section>
//       movieList.forEach((movie) => {
//         //creating the section cards
//         const newDiv = document.createElement("div");

//         //adding a class and style
//         newDiv.classList.add("card");
//         newDiv.classList.add("m-1");
//         newDiv.style.width = "10rem";

//         //creating childs into the parent element section
//         newDiv.innerHTML = `
//           <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="img">
//           <div class="card-body">
//           <h7 class="card-title fw-bold">${movie.title}</h7>
//           <p class="card-text">${movie.popularity}</p>
//           <a href="#" class="btn btn-primary">Mas detalles</a>
//           </div>
//       `;
//         getParentElement.appendChild(newDiv);
//       });
//     };

//     // window.addEventListener("DOMContentLoaded", () => { });
//     buildProductList(latestMovies);
//   });
// }

