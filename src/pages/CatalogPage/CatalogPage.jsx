import CarsList from 'components/CarsList/CarsList';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectorsCars } from '../../redux/selectors';
import { Filters } from 'components/Filters/Filters';

const CatalogPage = () => {
  const cars = useSelector(selectorsCars);

  return (
    <>
      <Filters />
      <CarsList cars={cars} />
    </>
  );
};

export default CatalogPage;
