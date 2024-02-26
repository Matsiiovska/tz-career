//import { createSelector } from '@reduxjs/toolkit';

export const selectorsIsLoading = state => state.cars.isLoading;
export const selectorsError = state => state.cars.error;
export const selectorsCars = state => state.cars.cars;

export const selectFilter = state => state.cars.filter;
