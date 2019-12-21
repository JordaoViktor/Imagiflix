import CONST from './constants';
import { $id } from './utils';


export const setRatingColor = (el, score)  => {
  if(score >= 7) {
    el.style.borderColor = "green";
  } else if (score <= 3) {
    el.style.borderColor = "red";
  } else {
    el.style.borderColor = "yellow";
  }
};



export const setFeaturedMovie = ({title, vote_average, backdrop_path }) =>{

  let titleEl = $id('featured-title');
  titleEl.innerHTML = title;

  let scoreEl = $id('featured-score');
  scoreEl.innerHTML = vote_average;
  setRatingColor(scoreEl, vote_average);

  let imageEl = $id('featured-image');
  imageEl.style.backgroundImage = `url(${CONST.IMAGEURL}/original/${backdrop_path})`;


};

export const setMovie = (elId,{ id,title, vote_average, poster_path,name}) => {
  let scoreColor;

  if (vote_average >= 7){
    scoreColor = '#4fcc75';
  }else if ( vote_average <= 3){
    scoreColor = '#e50914';
  } else {
    scoreColor = "yellow";
  }

  const movieEl = `
      <div class="movies-item" data-id="${id}" data-type="${title ? 'movie' : 'tv'}">
      <div class="movies-info">
        <i class="far fa-play-circle"></i>
        
        <h3>${title ? title : name}</h3>

        <div class="rating">
          <div class="rating-rate" style="border-color:${scoreColor}">${vote_average}</div>
        </div>
      </div>

      <img src="${CONST.IMAGEURL}/w185/${poster_path}" alt="">
  </div>
  `;

  $(elId).slick('slickAdd', movieEl);
};
