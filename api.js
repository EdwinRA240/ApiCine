async function getLatestMovies(moviesUrl) {
    // let moviesUrl = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=${p}`;
    try {
      console.log("Realiza Promise");
      let response = await axios.get(moviesUrl);
      return response.data.results;
    } catch (e) {
      console.log(e);
      return [];
    }
  }