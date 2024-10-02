import { createSlice } from '@reduxjs/toolkit';

import { SLICE_NAME } from './consts';

import {
  fetchSupportedCurrencies,
  fetchConversion,
  fetchTickers,
  fetchExchanges,
  // fetchAllCoins,
} from './actions';

export const slice = createSlice({
  name: SLICE_NAME,
  initialState: {
    supportedCurrencies: [],
    conversionHistory: [],
    tickers: [],
    allCoins: [],
    exchanges: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearTickers(state) {
      state.tickers = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSupportedCurrencies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchSupportedCurrencies.fulfilled, (state, action) => {
        state.loading = false;
        state.supportedCurrencies = action.payload;
      })
      .addCase(fetchSupportedCurrencies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(fetchConversion.fulfilled, (state, action) => {
        state.conversionHistory.push(action.payload);
      })
      .addCase(fetchTickers.fulfilled, (state, action) => {
        state.tickers = action.payload;
      })
      .addCase(fetchExchanges.fulfilled, (state, action) => {
        state.exchanges = action.payload;
      })
      // .addCase(fetchAllCoins.fulfilled, (state, action) => {
      //   state.allCoins = action.payload;
      // });
  },
});

export const { clearTickers } = slice.actions;

export default slice.reducer;
