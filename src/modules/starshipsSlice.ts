import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface State {
  isLoading: boolean;
  starships: Starship[];
}

const initialState: State = {
  isLoading: false,
  starships: [],
};

const slice = createSlice({
  name: 'starships',
  initialState,
  reducers: {
    setLoading: (state: State, action: PayloadAction<boolean>): State => {
      state.isLoading = action.payload;
      return state;
    },
  },
});

export default slice.reducer;
