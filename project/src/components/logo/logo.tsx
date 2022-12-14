import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type Props = {
  isFooter?: boolean;
};

function Logo({isFooter}: Props): JSX.Element {
  return (

    <Link className={`logo__link ${isFooter ? 'logo__link--light' : ''}`} to={AppRoute.Root}>
      <span className="logo__letter logo__letter--1">W</span>
      <span className="logo__letter logo__letter--2">T</span>
      <span className="logo__letter logo__letter--3">W</span>
    </Link>
  );
}

export default Logo;
