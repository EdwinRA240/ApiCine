const API_KEY = "d367f0aa1b646902549724b33acb81a6";
const BASE_URL = "https://api.themoviedb.org/3";

function getPopularMovies(p) {
  async function getLatestMovies() {
    let moviesUrl = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=${p}`;
    try {
      let response = await axios.get(moviesUrl);
      return response.data.results;
    } catch (e) {
      return e;
    }
  }

  const getDataId = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(error);
      return error;
    }
  };

  let latestMovies;

  getLatestMovies().then((peliculas) => {
    latestMovies = peliculas;

    // console.log(latestMovies);

    const buildProductList = (movieList) => {
      //select the parent HTML tag
      var getParentElement = document.getElementById("moviesList");
      getParentElement.innerHTML = "";

      //Loop the product list array in order to generate the <section> </section>
      movieList.forEach(async (movie) => {
        let overviewID = await getDataId(
          `${BASE_URL}/movie/${movie.id}?api_key=${API_KEY}&language=es-ES`
        ).then(async (response) => {
          return await response.overview;
        });

        //creating the section cards
        const newDiv = document.createElement("div");

        //adding a class and style
        newDiv.classList.add("card");
        newDiv.classList.add("m-1");
        newDiv.style.width = "10rem";

        //creating childs into the parent element section
        newDiv.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w200${movie.poster_path}" class="card-img-top" alt="img">
          <div class="card-body">
		  <h7 class="card-title fw-bold">${movie.title}</h7>
		  <p class="card-text">Popularidad: ${movie.popularity}</p>
		  
		  <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
		  tabindex="-1">
            <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalToggleLabel">${movie.title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
						<img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" class="img-fluid mb-4" alt="img">
						<h6>Descripcion:</h6> <h7>${overviewID}</h7>
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Ver Trailer</button>
                    </div>
                </div>
            </div>
            </div>
            <div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"
            tabindex="-1">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="exampleModalToggleLabel2">Trailer</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        VIDEO 🎬
                    </div>
                    <div class="modal-footer">
                        <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Regresar</button>
                    </div>
                </div>
            </div>
            </div>
            <a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Ver mas</a>
            
            </div>
            `;
        // <a href="#" class="btn btn-primary" id="btnMasDetalles">Mas detalles</a>
        getParentElement.appendChild(newDiv);
      });
    };

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
      // console.log(e);
      return [];
    }
  }

  let latestMovies;

  getLatestMovies().then((peliculas) => {
    latestMovies = peliculas;

    // console.log(latestMovies);

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
      console.log(response);
      return response.data.results;
    } catch (e) {
      return [];
    }
  }

  let latestMovies;
  getLatestMovies().then((peliculas) => {
    latestMovies = peliculas;

    // console.log(latestMovies);

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

        //creating childs into the parent element section
        newDiv.innerHTML = `
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

/* <div class="modal fade" id="exampleModalToggle" aria-hidden="true" aria-labelledby="exampleModalToggleLabel"
tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalToggleLabel">Descripcion</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            TE LA CREISTE NATI 🙈
        </div>
        <div class="modal-footer">
            <button class="btn btn-primary" data-bs-target="#exampleModalToggle2" data-bs-toggle="modal">Ver Trailer</button>
        </div>
    </div>
</div>
</div>
<div class="modal fade" id="exampleModalToggle2" aria-hidden="true" aria-labelledby="exampleModalToggleLabel2"
tabindex="-1">
<div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalToggleLabel2">Trailer</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            TE LA VOLVISTE A CREER NATI 👽
        </div>
        <div class="modal-footer">
            <button class="btn btn-primary" data-bs-target="#exampleModalToggle" data-bs-toggle="modal">Regresar</button>
        </div>
    </div>
</div>
</div>
<a class="btn btn-primary" data-bs-toggle="modal" href="#exampleModalToggle" role="button">Ver mas</a> */
