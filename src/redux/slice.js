import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { fetchCarCards } from './operations';

const initialState = {
  cars: [],
  isLoading: false,
  error: null,
};
const extraActions = [fetchCarCards];

const getActions = type => extraActions.map(action => action[type]);

const contactsSlice = createSlice({
  name: 'cars',
  initialState,
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

export const carsReducer = contactsSlice.reducer;
