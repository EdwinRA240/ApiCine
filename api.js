const API_KEY = "d367f0aa1b646902549724b33acb81a6";

function getPopularMovies(p) {
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
            <p class="card-text">Popularidad: ${movie.popularity}</p>
            <a href="#" class="btn btn-primary" id="btnMasDetalles">Mas detalles</a>
            </div>
        `;
        getParentElement.appendChild(newDiv);
      });
    };

    // window.addEventListener("DOMContentLoaded", () => { });
    buildProductList(latestMovies);
  });
}

function getTopMovies(p) {
  async function getLatestMovies() {
    let moviesUrl = `https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&language=en-US&page=${p}`;
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
            <p class="card-text">Calificación: ${movie.vote_average}</p>
            <a href="#" class="btn btn-primary" id="btnMasDetalles">Mas detalles</a>
            </div>
        `;
        getParentElement.appendChild(newDiv);
      });
    };

    // window.addEventListener("DOMContentLoaded", () => { });
    buildProductList(latestMovies);
  });
}

function getId(id) {
  async function getLatestMovies() {
    let moviesUrl = `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
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
        var id = movie.id;
        //creating the section cards
        const newDiv = document.createElement("div");

        // adding a class and style
        newDiv.classList.add("carousel");
        newDiv.classList.add("slide");

        //creating childs into the parent element sectio11n
        newDiv.innerHTML = `1
            <div class="carousel-indicators">
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <h5>${movie.title}</h5>
                    <p>Descripion: ${movie.overview}</p>
                </div>
                </div>
            </div>
          `;
        getParentElement.appendChild(newDiv);
        return id;
      });
    };

    // window.addEventListener("DOMContentLoaded", () => { });
    buildProductList(latestMovies);
  });
}
