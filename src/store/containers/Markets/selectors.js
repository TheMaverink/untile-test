import { createSelector } from '@reduxjs/toolkit';
import { SLICE_NAME } from './consts';

export const selectMarkets = (state) => state[SLICE_NAME];

export const selectIsConverterSliceLoading = createSelector(
  selectMarkets,
  (markets) => markets?.loading
);

export const selectSupportedCurrencies = createSelector(
  selectMarkets,
  (markets) => {
    const currencies = markets?.supportedCurrencies || [];

    return currencies

  // return allCoins.reduce((accumulator, coin) => {
  //   const { id, symbol, name } = coin;
  //   accumulator[symbol] = { id, symbol, name };
  //   return accumulator;
  // }, {});
  } 
);

export const selectConversionHistory = createSelector(
  selectMarkets,
  (markets) => markets?.conversionHistory
);

export const selectTickers = createSelector(
  selectMarkets,
  (markets) => markets?.tickers
);

// export const selectAllCoins = createSelector(selectMarkets, (markets) => {
//   const allCoins = markets?.allCoins || [];

//   return allCoins.reduce((accumulator, coin) => {
//     const { id, symbol, name } = coin;
//     accumulator[symbol] = { id, symbol, name };
//     return accumulator;
//   }, {});
// });

export const selectExchanges = createSelector(selectMarkets, (markets) => {
  if (!markets.exchanges || !(markets.exchanges.length > 0)) return {};

  return markets.exchanges.reduce((acc, market) => {
    acc[market.name] = {
      ...market,
    };
    return acc;
  }, {});
});
