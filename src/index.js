import { trendFilms, filmGenre } from './js/fetchData';
import card from './js/card-template';
import toggleModal from './js/modal-film-open-close';
import { btnUpToTop, topFunction } from './js/btnUp';
  
const refs = {
  cardBox: document.querySelector('.cards-container'),
};

filmGenre().then(a => {
  trendFilms().then(e => {
    refs.cardBox.innerHTML += card(e.data.results, a);
  });
});

btnUpToTop();
topFunction();

