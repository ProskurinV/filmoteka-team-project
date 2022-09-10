import { trendFilms, filmGenre } from './js/fetchData';
import card from './js/card-template';

const refs = {
  cardBox: document.querySelector('.cards-container'),
};

filmGenre().then(a => {
  trendFilms().then(e => {
    refs.cardBox.innerHTML += card(e.data.results, a);
  });
});
