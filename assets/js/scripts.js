import { async } from "q";

$(document).ready(function(){
  $('.movies-list').slick({
    variableWidth: true,
    prevArrow: '<button type="button" class="slick-prev"><i class="fas fa-chevron-left"></i></button>',
    nextArrow: '<button type="button" class="slick-next"><i class="fas fa-chevron-right"></i></button>'
  });

  const URL = "https://api.themoviedb.org/3";
  const IMAGEURL = "https://image.tmdb.org/t/p"

  const apiKey = "4e2e8c03e55ccbb370f994b5fa50f312";

  const setRatingColor = (el,score) =>{  
    if (score >= 7){
      el.style.borderColor = '#4fcc75';
    }else if ( score <= 3){
      el.style.borderColor = '#e50914';
    } else {
      el.style.borderColor = "yellow";
    }
  }

  const setFeaturedMovie = ({title, vote_average, backdrop_path }) =>{
    let titleEl = document.getElementById('featured-title');
    titleEl.innerHTML = title;

    let scoreEl = document.getElementById('featured-score');
    scoreEl.innerHTML = vote_average;
    setRatingColor(scoreEl, vote_average)

    let imageEl = document.getElementById('featured-image');
    imageEl.style.backgroundImage = `url(${IMAGEURL}/original/${backdrop_path})`;


  }

  const getFeaturedMovie  = () => {
    fetch(`${URL}/discover/movie?api_key=${apiKey}&language=pt-BR&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`)
    .then(res => res.json())
    .then(data => setFeaturedMovie(data.results[0]))
    .catch(err => console.log(`ERRO:${err}`));
    

  };
  getFeaturedMovie();
});