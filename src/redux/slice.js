import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCarCards } from './operations';

const getActions = type => extraActions.map(action => action[type]);

const initialState = {
  /* cars: [],*/
  isLoading: false,
  error: null,
  favoriteCars: [],
  filter: { brend: '', price: null, mileageFrom: null, mileageTo: null },
};
const extraActions = [fetchCarCards];

const contactsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    addToFavorites(state, action) {
      const carId = action.payload;
      state.favoriteCars.push(carId);
    },
    removeFromFavorites(state, action) {
      const carId = action.payload;
      state.favoriteCars = state.favoriteCars.filter(id => id !== carId);
    },
    setFilters: (state, { payload }) => {
      state.filter.brand = payload.brand || '';
      state.filter.price = payload.price || null;
      state.filter.mileageFrom = payload.mileageFrom || null;
      state.filter.mileageTo = payload.mileageTo || null;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(fetchCarCards.fulfilled, (state, action) => {
        state.cars = action.payload;
      })
      .addMatcher(isAnyOf(...getActions('fulfilled')), handleFulfilled)
      .addMatcher(isAnyOf(...getActions('pending')), handlePending)
      .addMatcher(isAnyOf(...getActions('rejected')), handleRejected),
});

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const { addToFavorites, removeFromFavorites, setFilters } =
  contactsSlice.actions;
export const carsReducer = contactsSlice.reducer;
