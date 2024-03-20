import { createSelector } from '@reduxjs/toolkit';

export const selectorsIsLoading = state => state.cars.isLoading;
export const selectorsError = state => state.cars.error;
export const selectorsCars = state => state.cars.cars;

export const selectFilter = state => state.cars.filter;

export const selectorsFavoriteCars = state => state.cars.favoriteCars;
export const selectFavoriteCars = state => state.cars.favoriteCars;

export const selectVisibleCars = createSelector(
  [selectorsCars, selectFilter],
  (cars, { brand, price, mileageFrom, mileageTo }) => {
    if (!Array.isArray(cars)) {
      return [];
    }

    return cars
      .filter(one =>
        brand !== ''
          ? one.make.toLowerCase().includes(brand.toLowerCase())
          : true
      )
      .filter(one => {
        const formattedPrice = Number(
          one.rentalPrice.slice(1, one.rentalPrice.length)
        );
        return price ? formattedPrice <= Number(price) : true;
      })
      .filter(one =>
        Number(mileageFrom) ? one.mileage >= Number(mileageFrom) : true
      )
      .filter(one =>
        Number(mileageTo) ? one.mileage <= Number(mileageTo) : true
      );
  }
);
