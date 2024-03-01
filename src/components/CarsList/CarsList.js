import css from './CarsList.module.css';

import { CarsListItem } from 'components/CarsListItem/CarsListItem';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCarCards } from '../../redux/operations';

const CarsList = ({ cars }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCarCards());
  }, [dispatch]);
  return (
    <ul className={css.Ul}>
      {cars && cars.map(car => <CarsListItem key={car.id} car={car} />)}
    </ul>
  );
};

export default CarsList;
