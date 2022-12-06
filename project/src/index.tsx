import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { Provider } from 'react-redux';
import {store} from './store/index';

const Settings = {
  FilmTitle: 'The Grand Budapest Hotel',
  FilmGenre: 'Drama',
  ReleaseDate: 2014,
} as const;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App
        filmTitle={Settings.FilmTitle}
        filmGenre={Settings.FilmGenre}
        releaseDate={Settings.ReleaseDate}
      />
    </Provider>
  </React.StrictMode>,
);
