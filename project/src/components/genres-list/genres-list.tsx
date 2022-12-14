import { useAppDispatch, useAppSelector } from '../../hooks/index';
import { Film } from '../../types/films-types';
import { ALL_GENRES } from '../../const';
import { changeGenre, filterFilmsByGenre } from '../../store/catalog-process/catalog-process';
import { Link } from 'react-router-dom';
import { MAX_GENRES_COUNT } from '../../const';
import { getFilms } from '../../store/data-process/selector';
import { getGenre } from '../../store/catalog-process/selector';

const getUniqueGenreList = (filmList: Film[]) => {
  const resultList: string[] = [];
  resultList.push(ALL_GENRES);
  filmList.forEach((film) => {
    if (!resultList.includes(film.genre)) {
      resultList.push(film.genre);
    }
  });
  return resultList.slice(0, MAX_GENRES_COUNT);
};

function GenresList(): JSX.Element {
  const films = useAppSelector(getFilms);

  const uniqueGenreList = getUniqueGenreList(films);
  const activeGenre = useAppSelector(getGenre);
  const dispatch = useAppDispatch();

  const handleGenreClick = (genre: string) => {
    dispatch(changeGenre(genre));
    dispatch(filterFilmsByGenre(films));
  };

  return (
    <ul className="catalog__genres-list">
      {uniqueGenreList.map((genre) => (
        <li className={`catalog__genres-item ${genre === activeGenre ? 'catalog__genres-item--active' : ''}`} key={genre}>
          <Link to='' onClick={() => handleGenreClick(genre)} className="catalog__genres-link">{genre}</Link>
        </li>
      ))}
    </ul>
  );
}

export default GenresList;
