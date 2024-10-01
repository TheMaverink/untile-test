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
`;

const DropdownSelect = styled.select`
  flex: 1;
  padding: 10px;
  background: transparent;
  border: none;
  outline: none;
  font-family: 'Ubuntu-Regular', sans-serif;
  font-size: 24px;
  color: #4E555B;
  letter-spacing: 0;
  line-height: 32px;
  appearance: none;
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
`;

const DropDown = ({ options, defaultValue, onChange, value }) => {
  return (
    <DropdownWrapper>
      <DropdownSelect value={value} onChange={onChange}>
        <option value="" disabled>
          {defaultValue}
        </option>
        {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </DropdownSelect>
      <DropdownIcon>
        <img
          src="/assets/select-arrow-down.png"
          alt="Select Arrow"
          style={{ width: '50px', height: '50px' }} 
        />
      </DropdownIcon>
    </DropdownWrapper>
  );
};

export default DropDown;
