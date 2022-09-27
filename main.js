/* The above code is getting the value of the button and then adding an event listener to it. */
const btnPrePage = document.getElementById("prePage");
const btnNextPage = document.getElementById("nextPage");
const btnNews = document.getElementById("btnNews");
const btnPopulares = document.getElementById("btnPopulares");
const btnMasDetalles = document.getElementById("btnMasDetalles");

if(btnMasDetalles){btnMasDetalles.onclick = () => { console.log("MasDetalles clicked"); };}

window.addEventListener("DOMContentLoaded", () => { 
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
