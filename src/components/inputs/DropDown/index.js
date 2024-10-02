import React, { useState } from 'react';
import styled from 'styled-components';

const DropdownWrapper = styled.div`
  display: flex;
  align-items: center;
  background-image: linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%);
  border: 1px solid #e0e0d7;
  box-shadow: inset 1px 1px 0 0 rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  position: relative;
  width: 100%;
  height: 64px;
  flex: 1;
`;

const DropdownSelect = styled.select`
  flex: 1;
  padding: 10px;
  background: transparent;
  border: none;
  outline: none;
  font-family: 'Ubuntu-Regular', sans-serif;
  font-size: 24px;
  color: #4e555b;
  letter-spacing: 0;
  line-height: 32px;
  appearance: none;
  min-width: 190px;
  height: 64px;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

const DropdownIcon = styled.div`
  background-image: linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%);
  border: 1px solid #e0e0d7;
  box-shadow: inset 1px 1px 0 0 rgba(255, 255, 255, 0.8);
  border-radius: 0 4px 4px 0;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  position: absolute;
  right: 0;
  height: 100%;
  max-width: 50px;
`;

const DropdownLabel = styled.label`
  position: absolute;
  top: -20px;
  left: 0px;
  font-size: 13px;
  color: #2979af;
  pointer-events: none;
  font-weight: 700;
`;

const DropdownOptions = styled.div`
  position: absolute;
  background: white;
  border: 1px solid #e0e0d7;
  border-radius: 4px;
  width: 100%;
  z-index: 1000;
  display: ${(props) => (props.open ? 'block' : 'none')};
`;

const DropdownOption = styled.div`
  padding: 10px;
  cursor: pointer;

  &:hover {
    background-color: #f0f0f0;
  }
`;

const DropDown = ({ options, defaultValue, onChange, value, label }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleIconClick = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    onChange({ target: { value: option } });
    setIsOpen(false);
  };

  return (
    <DropdownWrapper>
      <DropdownLabel>{label}</DropdownLabel>
      <DropdownSelect
        value={value}
        onChange={onChange}
        onClick={() => setIsOpen(false)}
      >
        <option value="" disabled>
          {defaultValue}
        </option>
        {options?.length > 0 &&
          options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
      </DropdownSelect>
      <DropdownIcon onClick={handleIconClick}>
        <img
          src="/assets/select-arrow-down.png"
          alt="Select Arrow"
          style={{ width: '50px', height: '50px' }}
        />
      </DropdownIcon>
      <DropdownOptions open={isOpen}>
        {options?.length > 0 &&
          options?.map((option, index) => (
            <DropdownOption
              key={index}
              onClick={() => handleOptionClick(option)}
            >
              {option}
            </DropdownOption>
          ))}
      </DropdownOptions>
    </DropdownWrapper>
  );
};

export default DropDown;
