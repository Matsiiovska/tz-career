import CarsList from 'components/CarsList/CarsList';
import React from 'react';
import { useSelector } from 'react-redux';
import { selectorsCars } from '../../redux/selectors';

const CatalogPage = () => {
  const cars = useSelector(selectorsCars);

  return (
    <>
      <CarsList cars={cars} />
    </>
  );
};

export default CatalogPage;
