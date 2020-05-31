import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  starships: [],
};

const slice = createSlice({
  name: 'starships',
  initialState,
  reducers: {},
});

export default slice.reducer;
