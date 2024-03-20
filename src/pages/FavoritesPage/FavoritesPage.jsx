import React from 'react';
import { useSelector } from 'react-redux';
import { selectorsCars, selectorsFavoriteCars } from '../../redux/selectors';
import CarsListItem from '../../components/CarsListItem/CarsListItem';
import css from './FavoritesPage.module.css';

const FavoritesPage = () => {
  const favoriteCars = useSelector(selectorsFavoriteCars) || [];
  const allCars = useSelector(selectorsCars) || [];

  console.log(favoriteCars, allCars);

  const getCarById = carId => {
    if (!allCars) return undefined;

    return allCars.find(car => car.id === carId);
  };
  //
  return (
    <div>
      <ul className={css.Ul}>
        {favoriteCars.map(carId => (
          <CarsListItem key={carId} car={getCarById(carId)} />
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
