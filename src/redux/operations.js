import { createAsyncThunk } from '@reduxjs/toolkit';

import axios from 'axios';

axios.defaults.baseURL = 'https://6528ffc055b137ddc83e0400.mockapi.io';

export const fetchCarCards = createAsyncThunk(
  'cars/fetchCarCards',
  async (_, thunkAPi) => {
    try {
      const response = await axios.get('adverts');
      console.log('response', response.data);
      return response.data;
    } catch (error) {
      return thunkAPi.rejectWithValue(error.message);
    }
  }
);
