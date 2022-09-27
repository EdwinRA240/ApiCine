const btnPrePage = document.getElementById("prePage");
const btnNextPage = document.getElementById("nextPage");
const btnNews = document.getElementById("btnNews");
const btnPopulares = document.getElementById("btnPopulares");
const btnMasDetalles = document.getElementById("btnMasDetalles");
let p = 1;

window.addEventListener("DOMContentLoaded", () => { 
  getPopularMovies(p);
}); 

btnPrePage.onclick = () => {
  if (p == 1) {
    p = 1;
  } else {
    p -= 1;
  }
};

btnNextPage.onclick = () => {
  p++;
};

btnPopulares.onclick = () => {
  p = 1;
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
}

btnNews.onclick = () => {
  p= 1;
  getTopMovies(p);
  
  btnPrePage.onclick = () => {
    if (p == 1) {
      p = 1;
    } else {
      p -= 1;
    }
    getTopMovies(p);
  };
  
  btnNextPage.onclick = () => {
    p++;
    getTopMovies(p);
  };
}

btnMasDetalles.onclick = () => {
  getId(p);
  // console.log(p);
};