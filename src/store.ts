import { Action, combineReducers, configureStore, ThunkAction } from '@reduxjs/toolkit';
import starshipsReducer from './modules/starshipsSlice';

export const rootReducer = combineReducers({
  starships: starshipsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;

export type RootState = ReturnType<typeof rootReducer>;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
