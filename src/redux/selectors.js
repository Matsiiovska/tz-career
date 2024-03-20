import { createSelector } from '@reduxjs/toolkit';

export const selectorsIsLoading = state => state.cars.isLoading;
export const selectorsError = state => state.cars.error;
export const selectorsCars = state => state.cars.cars;

export const selectFilter = state => state.cars.filter;

export const selectorsFavoriteCars = state => state.cars.favoriteCars;
//export const selectFavoriteCars = state => state.cars.favoriteCars;

export const selectVisibleCars = createSelector(
  [selectorsCars, selectFilter],
  (cars, { brand, price, mileageFrom, mileageTo }) => {
    if (!Array.isArray(cars)) {
      return [];
    }

    return cars
      .filter(one => {
        console.log('one:', one);
        console.log('one.make:', one.make);
        return brand !== '' && one.make !== undefined
          ? one.make.toLowerCase().includes(brand.toLowerCase())
          : one;
      })
      .filter(one => {
        const formattedPrice = Number(
          one.rentalPrice.slice(1, one.rentalPrice.length)
        );
        return price ? formattedPrice <= Number(price) : one;
      })
      .filter(one =>
        Number(mileageFrom) ? one.mileage >= Number(mileageFrom) : one
      )
      .filter(one =>
        Number(mileageTo) ? one.mileage <= Number(mileageTo) : one
      );
  }
);
