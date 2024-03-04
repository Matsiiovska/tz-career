import css from './CarsList.module.css';

import { CarsListItem } from 'components/CarsListItem/CarsListItem';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCarCards } from '../../redux/operations';

const CarsList = ({ cars }) => {
  const dispatch = useDispatch();
  const [rendOhog, setRendOhog] = useState(12);

  useEffect(() => {
    dispatch(fetchCarCards());
  }, [dispatch]);

  const handleLoadMore = () => {
    setRendOhog(prevCount => prevCount + 12);
  };

  return (
    <div>
      <ul className={css.Ul}>
        {cars &&
          cars
            .slice(0, rendOhog)
            .map(car => <CarsListItem key={car.id} car={car} />)}
      </ul>
      {rendOhog < cars.length && (
        <button className={css.Butt} type="button" onClick={handleLoadMore}>
          Load more
        </button>
      )}
    </div>
  );
};

export default CarsList;
