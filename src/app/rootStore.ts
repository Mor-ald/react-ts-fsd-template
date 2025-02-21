import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { rootReducer } from './rootReducer';

/**
 * Root Store
 */
export const rootStore = configureStore({
  reducer: rootReducer,

  // Add middlewares in concat from APIs (YOUR_IMPORT_API.middleware)
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([]),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof rootStore.getState>;
export type AppDispatch = typeof rootStore.dispatch;

export type AppStore = typeof rootStore;

// Setup listeners
setupListeners(rootStore.dispatch);
