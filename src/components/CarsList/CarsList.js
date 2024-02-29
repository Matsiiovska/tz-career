import { CarsListItem } from 'components/CarsListItem/CarsListItem';
import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchCarCards } from '../../redux/operations';

const CarsList = ({ cars }) => {
  const dispatch = useDispatch();
  //const cars = useSelector(selectorsCars); // Отримуємо дані зі стору

  useEffect(() => {
    dispatch(fetchCarCards());
  }, [dispatch]);
  return <ul>{cars && cars.map(one => <CarsListItem car={one} />)}</ul>;
};

export default CarsList;
