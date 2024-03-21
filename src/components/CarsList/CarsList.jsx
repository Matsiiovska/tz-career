import css from './CarsList.module.css';
import { CarsListItem } from 'components/CarsListItem/CarsListItem';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCarCards } from '../../redux/operations';
import { selectorsIsLoading } from '../../redux/selectors';

const CarsList = ({ cars }) => {
  const dispatch = useDispatch();
  const [rendOhog, setRendOhog] = useState(12);
  const loading = useSelector(selectorsIsLoading);

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
          Array.isArray(cars) &&
          cars.length > 0 &&
          cars
            .slice(0, rendOhog)
            .map(car => <CarsListItem key={car.id} car={car} />)}
      </ul>
      {cars && Array.isArray(cars) && cars.length > rendOhog && (
        <button
          className={css.Butt}
          type="button"
          onClick={handleLoadMore}
          disabled={loading}
        >
          Load more
        </button>
      )}
    </div>
  );
};

export default CarsList;
