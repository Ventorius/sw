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

const { setLoading, setError, setStarships, setCurrentStarship } = slice.actions;

export default slice.reducer;

export const getStarships = (page = 1): AppThunk => async (dispatch): Promise<void> => {
  dispatch(setLoading(true));

  try {
    const { results } = await starshipApi.getAllStarships(page);

    dispatch(setStarships(results));
    dispatch(setLoading(false));
  } catch (e) {
    dispatch(setLoading(false));
    dispatch(setError(true));
  }
};

export const getCurrentStarship = (id = 2): AppThunk => async (dispatch): Promise<void> => {
  dispatch(setLoading(true));

  try {
    const data = await starshipApi.getSingleStarship(id);
    dispatch(setCurrentStarship(data));
    dispatch(setLoading(false));
  } catch (e) {
    dispatch(setLoading(false));
    dispatch(setError(true));
  }
};

export const searchForStarship = (searchPhrase: string): AppThunk => async (dispatch): Promise<void> => {
  dispatch(setLoading(true));

  try {
    const { results } = await starshipApi.searchForStarship(searchPhrase);
    dispatch(setStarships(results));
    dispatch(setLoading(false));
  } catch (e) {
    dispatch(setLoading(false));
    dispatch(setError(true));
  }
};
