import { configureStore, combineReducers } from '@reduxjs/toolkit';
import logger from 'redux-logger';

import {
  saveStateToLocalStorage,
  loadStateFromLocalStorage,
} from '../../utils/misc';

import {
  SLICE_NAME as marketsSliceName,
  slice as marketsSlice,
} from '../containers/Markets';

const LOGGER_ON = false;

const preloadedState = loadStateFromLocalStorage();

const appReducer = combineReducers({
  [marketsSliceName]: marketsSlice.reducer,
});

const store = configureStore({
  reducer: appReducer,
  preloadedState,
  middleware: (getDefaultMiddleware) =>
    LOGGER_ON ? getDefaultMiddleware().concat(logger) : getDefaultMiddleware(),
  devTools: process.env.NODE_ENV !== 'production',
});

store.subscribe(() => {
  saveStateToLocalStorage(store.getState());
});

export { store };
