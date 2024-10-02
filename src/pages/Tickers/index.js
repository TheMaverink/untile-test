import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { Heading1 } from '../../components/typography';
import DropDown from '../../components/inputs/DropDown';
import Button from '../../components/Button';

import { getCoinName } from '../../utils/misc';

import {
  fetchSupportedCurrencies,
  fetchExchanges,
  selectSupportedCurrencies,
  fetchTickers,
  selectExchanges,
  // selectAllCoins,
} from '../../store/containers/Markets';

const StyledTickersPage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  gap: 50px;

  .tickers-inputs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }
`;

const StyledTickerCard = styled.div``;

const TickerCard = ({ pair, lastValue, lastTrade, market, volume }) => {
  return (
    <StyledTickerCard>
      <button>View More</button>
      <div className="left">
        <p>{pair}</p>
        <p>{lastValue}</p>
        <p>{lastTrade}</p>
      </div>
      <div className="right">
        <p>{market}</p>
        <p>{volume}</p>
      </div>
    </StyledTickerCard>
  );
};

export default function TickersPage() {
  const dispatch = useDispatch();

  const exchanges = useSelector(selectExchanges);
  const supportedCurrencies = useSelector(selectSupportedCurrencies);

  const [market, selectMarket] = React.useState('Binance');
  const [targetCurrency, setTargetCurrency] = React.useState('btc');

  React.useEffect(() => {
    dispatch(fetchExchanges());
    dispatch(fetchSupportedCurrencies());
  }, []);

  //wrong apis
  //api with limits which is a pain

  return (
    <StyledTickersPage>
      <Heading1 style={{ marginTop: '100px' }}>TICKERS</Heading1>

      <div className="tickers-inputs">
        <DropDown
          options={supportedCurrencies}
          value={targetCurrency}
          onChange={(event) => setTargetCurrency(event.target.value)}
          label="COIN:"
        />

        <DropDown
          options={Object.keys(exchanges)}
          value={market || 'Binance'}
          onChange={(event) => selectMarket(event.target.value)}
          label="MARKET:"
        />

        <Button
          text={'Search'}
          onClick={() =>
            dispatch(
              fetchTickers({
                coinName: getCoinName(targetCurrency).toLowerCase(),
                market:market.toLowerCase(),
              })
            )
          }
          style={{ flex: 1 }}
        />
      </div>
    </StyledTickersPage>
  );
}
