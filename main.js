//
const API_KEY = "d367f0aa1b646902549724b33acb81a6";
// const btnHome = document.getElementById("btnHome");

async function getLatestMovies() {
  let moviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
  1;
  try {
    console.log("Realiza Promise");
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
      const newSection = document.createElement("section");

      //adding a class
      newSection.classList.add("container");
      newSection.classList.add("d-flex");
      newSection.classList.add("flex-wrap");
      newSection.classList.add("justify-content-around");
      newSection.classList.add("mt-3");

      
      //creating childs into the parent element section
      newSection.innerHTML = `
      <div class="card m-2" style="width: 10rem;">
        <img src="${movie.poster_path}" class="card-img-top" alt="img">
            <div class="card-body">
                <h5 class="card-title">${movie.original_title}</h5>
                <p class="card-text">${movie.release_date}</p>
                <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
        </div>
          `;
      getParentElement.appendChild(newSection);
    });
  };

//   window.addEventListener("DOMContentLoaded", () => {});
  buildProductList(latestMovies);
});
