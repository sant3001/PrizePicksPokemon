import { store } from './reduxStore';

// Infer the `RootState` and `AppDispatch` types from the store itself
export type AppState = ReturnType<typeof store.getState>;
// Inferred type of store
export type AppDispatch = typeof store.dispatch;
