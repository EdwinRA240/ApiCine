//
const API_KEY = "d367f0aa1b646902549724b33acb81a6";
const btnprePage = document.getElementById("prePage");
const btnnextPage = document.getElementById("nextPage");
let p = 1;

btnprePage.onclick = () => {
  if (p == 1) {
    p = 1;
  } else {
    p -= 1;
  }
  latestMovies(p);
};

btnnextPage.onclick = () => {
  p++;
  latestMovies(p);
};

function latestMovies(p) {

  async function getLatestMovies() {
    let moviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${p}`;
    try {
      let response = await axios.get(moviesUrl);
      return response.data.results;
    } catch (e) {
      console.log(e);
      return [];
    }
  }

  let latestMovies;

  getLatestMovies().then((peliculas) => {
    latestMovies = peliculas;
    
    console.log(latestMovies);

    const buildProductList = (movieList) => {
      //select the parent HTML tag
      var getParentElement = document.getElementById("moviesList");
      getParentElement.innerHTML = "";

      //Loop the product list array in order to generate the <section> </section>
      movieList.forEach((movie) => {
        //creating the section cards
        const newDiv = document.createElement("div");

        //adding a class and style
        newDiv.classList.add("card");
        newDiv.classList.add("m-1");
        newDiv.style.width = "10rem";

        //creating childs into the parent element section
        newDiv.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="card-img-top" alt="img">
          <div class="card-body">
          <h7 class="card-title fw-bold">${movie.title}</h7>
          <p class="card-text">${movie.popularity}</p>
          <a href="#" class="btn btn-primary">Mas detalles</a>
          </div>
      `;
        getParentElement.appendChild(newDiv);
      });
    };

    // window.addEventListener("DOMContentLoaded", () => { });
    buildProductList(latestMovies);
  });
}

latestMovies(p);
