import React from 'react';
import { useSelector } from 'react-redux';
import { selectorsCars, selectorsFavoriteCars } from '../../redux/selectors';
import CarsListItem from '../../components/CarsListItem/CarsListItem';

const FavoritesPage = () => {
  const favoriteCars = useSelector(selectorsFavoriteCars);
  const allCars = useSelector(selectorsCars);

  const getCarById = carId => {
    return allCars.find(car => car.id === carId);
  };

  console.log('first', favoriteCars);

  return (
    <div>
      <ul>
        {favoriteCars.map(car => (
          <CarsListItem key={car.id} car={getCarById(car)} isFavorite={true} />
        ))}
      </ul>
    </div>
  );
};

export default FavoritesPage;
