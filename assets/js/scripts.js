import {startSlick} from './carousel'
import {getMovies, getSeries } from './getters'
import { setModalListeners} from './modal'


$(document).ready(function(){
  
  startSlick();
  getMovies();
  getSeries();
  setModalListeners();

});