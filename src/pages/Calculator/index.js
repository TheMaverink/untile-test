import React from 'react';
import styled from 'styled-components';
import { Heading1 } from '../../components/typography';

import TextInput from '../../components/inputs/TextInput';
import DropDown from '../../components/inputs/DropDown';
import Button from '../../components/Button';

const StyledCalculatorPage = styled.main`
  border: 2px solid red;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100%;

  .calculator-inputs {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  .calculator-results {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`;

export default function CalculatorPage() {
  const handleAmountChange = (amount) => {
    console.log(amount);
  };
  return (
    <StyledCalculatorPage>
      <Heading1>CRYPTO CALCULATOR</Heading1>

      <div className="calculator-inputs">
        <TextInput placeholder="enter value" onChange={handleAmountChange} />
        <DropDown
          options={['optionA', 'optionB', 'optionC']}
          defaultValue={'optionB'}
          onChange={() => console.log('test')}
        />
        <img
          src="/assets/arrow-to.png"
          alt="Convert Arrow"
          style={{ width: '50px', height: '50px' }}
        />
        <DropDown
          options={['optionA', 'optionB', 'optionC']}
          defaultValue={'optionB'}
          onChange={() => console.log('test')}
        />
        <Button onClick={() => console.log('button')} text={'Convert'} />
      </div>

      <div className="calculator-results"></div>
    </StyledCalculatorPage>
  );
}
