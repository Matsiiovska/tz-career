import CarsList from 'components/CarsList/CarsList';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectVisibleCars, selectorsCars } from '../../redux/selectors';
import { Filters } from 'components/Filters/Filters';
import { fetchCarCards } from '../../redux/operations';
import css from './CatalogPage.module.css';

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
      {cars.length ? (
        <CarsList cars={cars} />
      ) : (
        <p className={css.SoryNon}>
          Dear customer, nothing was found for your request. Apply the filter
          again on the other side.
        </p>
      )}
    </div>
  );
};

export default CatalogPage;
