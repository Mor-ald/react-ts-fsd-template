import { combineReducers } from '@reduxjs/toolkit';
import { themeSlice } from '@/entities/theme';

/**
 * Root reducer
 */
export const rootReducer = combineReducers({
  [themeSlice.name]: themeSlice.reducer,
});
