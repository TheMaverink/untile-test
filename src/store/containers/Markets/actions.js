import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

import { SLICE_NAME, API_BASE_URL } from './consts';

export const fetchSupportedCurrencies = createAsyncThunk(
  `${SLICE_NAME}/fetchSupportedCurrencies`,
  async () => {
    const supportedCurrenciesResponse = await axios.get(
      `${API_BASE_URL}/simple/supported_vs_currencies`
    );

    // const allCoinsResponse = await axios.get(`${API_BASE_URL}/coins/list`);

    // if (
    //   supportedCurrenciesResponse?.data?.length > 0 &&
    //   allCoinsResponse?.data?.length > 0
    // ) {
    //   const supportedCurrencies = allCoinsResponse.data?.filter((coin) => {
    //     return supportedCurrenciesResponse.data.includes(coin.symbol);
    //   });

    //   return supportedCurrenciesResponse.data;
    // } else {
    //   return [];
    // }

    return supportedCurrenciesResponse.data;
  }
);

export const fetchConversion = createAsyncThunk(
  `${SLICE_NAME}/fetchConversion`,
  async ({ inputCurrency, targetCurrency ,amount}) => {
    const response = await axios.get(`${API_BASE_URL}/simple/price`, {
      params: {
        ids: 'bitcoin',
        vs_currencies: `${inputCurrency},${targetCurrency}`,
      },
    });

    const conversion = response?.data?.bitcoin;
    const conversionValues = Object.values(response?.data?.bitcoin);
    const ratio = conversionValues[1] / conversionValues[0];

    return {
      inputCurrency,
      targetCurrency,
      conversion: {
        ...conversion,
        ratio:ratio * amount,
        amount
      },
    };
  }
);

export const fetchTickers = createAsyncThunk(
  `${SLICE_NAME}/fetchTickers`,
  async ({ coinName, market }) => {

    const url = `${API_BASE_URL}/coins/${coinName}/tickers?exchange_ids=${market}`

    console.log('URL!')
    console.log(url)

    console.log('coinName!')
    console.log(coinName)

    console.log('market!')
    console.log(market)
    // const response = await axios.get(
    //   `${API_BASE_URL}/coins/${coinId}/tickers`,
    //   {
    //     params: { exchange_ids: market },
    //   }
    // );

    const response = await axios.get(url)

    return response.data.tickers;
  }
);

export const fetchExchanges = createAsyncThunk(
  `${SLICE_NAME}/fetchExchanges`,
  async () => {
    // const exchangesListresponse = await axios.get(
    //   `https://api.coingecko.com/api/v3/exchanges/list`
    // );

    // const exchangesList = exchangesListresponse.data

    const exchangesResponse = await axios.get(`${API_BASE_URL}/exchanges`);

    console.log('exchangesResponse!!')
    console.log(exchangesResponse)

    const exchanges = exchangesResponse.data;

    return exchanges;
  }
);
