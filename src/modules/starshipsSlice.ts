import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { AppThunk } from '../store';
import * as starshipApi from 'api/starships';

interface State {
  isLoading: boolean;
  starships: Starship[];
  hasError: boolean;
  hasNext: boolean;
  currentStarship: Starship | null;
}

const initialState: State = {
  isLoading: false,
  starships: [],
  hasError: false,
  hasNext: false,
  currentStarship: null,
};

const slice = createSlice({
  name: 'starships',
  initialState,
  reducers: {
    setLoading: (state: State, action: PayloadAction<boolean>): State => {
      state.isLoading = action.payload;
      return state;
    },

    setError: (state: State, action: PayloadAction<boolean>): State => {
      state.hasError = action.payload;
      return state;
    },

    setStarships: (state: State, action: PayloadAction<Starship[]>): State => {
      state.starships = action.payload;
      return state;
    },

    setCurrentStarship: (state: State, action: PayloadAction<Starship>): State => {
      state.currentStarship = action.payload;
      return state;
    },
  },
});

const { setLoading, setError } = slice.actions;

export default slice.reducer;

export const getStarships = (page = 1): AppThunk => async (dispatch): Promise<void> => {
  dispatch(setLoading(true));

  try {
    const data = await starshipApi.getAllStarships(page);
    setLoading(false);
  } catch (e) {
    setLoading(false);
    setError(true);
  }
};

export const getCurrentStarship = (id = 2): AppThunk => async (dispatch): Promise<void> => {
  dispatch(setLoading(true));

  try {
    const data = await starshipApi.getSingleStarship(id);
    setLoading(false);
  } catch (e) {
    setLoading(false);
    setError(true);
  }
};

export const searchForStarship = (searchPhrase: string): AppThunk => async (dispatch): Promise<void> => {
  dispatch(setLoading(true));

  try {
    const data = await starshipApi.searchForStarship(searchPhrase);
    setLoading(false);
  } catch (e) {
    setLoading(false);
    setError(true);
  }
};
