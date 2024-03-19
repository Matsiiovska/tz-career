import CarsList from 'components/CarsList/CarsList';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleCars, selectorsCars } from '../../redux/selectors';
import { Filters } from 'components/Filters/Filters';
import { fetchCarCards } from '../../redux/operations';

const CatalogPage = () => {
  const dispatch = useDispatch();

  const cars = useSelector(selectVisibleCars);
  /*console.log('cars', cars);*/
  const allCars = useSelector(selectorsCars);
  useEffect(() => {
    if (!allCars || !allCars.length) dispatch(fetchCarCards());
  }, [dispatch, allCars]);

  return (
    <div>
      <Filters />
      <CarsList cars={cars} />
    </div>
  );
};

export default CatalogPage;
