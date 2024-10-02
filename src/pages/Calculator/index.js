import React from 'react';
import styled from 'styled-components';
import { useSelector, useDispatch } from 'react-redux';

import { Heading1 } from '../../components/typography';
import TextInput from '../../components/inputs/TextInput';
import DropDown from '../../components/inputs/DropDown';
import Button from '../../components/Button';

import {
  fetchSupportedCurrencies,
  fetchConversion,
  selectSupportedCurrencies,
  selectConversionHistory,
} from '../../store/containers/Markets';

const StyledCalculatorPage = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;
  gap: 50px;

  .calculator-inputs {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 12px;
  }

  .calculator-results {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 18px;
    margin-top: 50px;

    h4 {
      color: #21639c;
      font-size: 16px;
    }

    .conversion-item {
      font-size: 18px;
      width: 100%;
      font-weight: 300;
      text-align: center;
      color: #5f5f5b;

      span {
        font-weight: 700;
      }
    }

    .conversion-item:first-of-type {
      font-size: 32px;
      color: #353a3e;
    }
  }
`;

export default function CalculatorPage() {
  const dispatch = useDispatch();

  const supportedCurrencies = useSelector(selectSupportedCurrencies);
  const conversionHistory = useSelector(selectConversionHistory);

  // const allCoins = useSelector(selectAllCoins);

  const [inputCurrency, setInputCurrency] = React.useState('btc');
  const [targetCurrency, setTargetCurrency] = React.useState('eth');
  const [amount, setAmount] = React.useState('');

  const handleAmountChange = (event) => {
    const { value } = event.target;

    if (/^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  React.useEffect(() => {
    // dispatch(fetchAllCoins());
    dispatch(fetchSupportedCurrencies());
  }, [dispatch]);

  React.useEffect(() => {
    console.log('supportedCurrencies');
    console.log(supportedCurrencies);
  }, [supportedCurrencies]);

  const handleConvert = () => {
    dispatch(fetchConversion({ inputCurrency, targetCurrency, amount }));
  };

  return (
    <StyledCalculatorPage>
      <Heading1 style={{ marginTop: '100px' }}>CRYPTO CALCULATOR</Heading1>

      <div className="calculator-inputs">
        <TextInput
          placeholder="enter value"
          onChange={handleAmountChange}
          value={amount}
          label="FROM:"
        />
        <DropDown
          options={Object.keys(supportedCurrencies)}
          value={inputCurrency}
          onChange={(event) => setInputCurrency(event.target.value)}
        />
        <img
          src="/assets/arrow-to.png"
          alt="Convert Arrow"
          style={{ width: '50px', height: '50px' }}
        />
        <DropDown
          options={Object.keys(supportedCurrencies)}
          value={targetCurrency}
          onChange={(event) => setTargetCurrency(event.target.value)}
          label="TO:"
        />
        <Button onClick={handleConvert} text={'Convert'} disabled={!amount} />
      </div>

      <div className="calculator-results">
        {conversionHistory?.length > 0 && (
          <>
            <h4>RESULT</h4>

            {conversionHistory.map((conversion, index) => (
              <p key={index} className="conversion-item">
                <span>{`${conversion.conversion.amount} ${conversion.inputCurrency}`}</span> is worth{' '}
                <span>{`${conversion.conversion.ratio} ${conversion.targetCurrency}`}</span>
              </p>
            ))}
          </>
        )}
      </div>
    </StyledCalculatorPage>
  );
}
