import styled from 'styled-components';

const StyledInputWrapper = styled.div`
  position: relative;
  width: 100%;
`;

const StyledInput = styled.input`
  background: #ffffff;
  background-image: linear-gradient(180deg, #f5f5f5 0%, #ffffff 100%);
  border: 1px solid #e0e0d7;
  box-shadow: inset 1px 1px 0 0 rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  padding: 10px;
  font-size: 24px; 
  color: #353A3E; 
  letter-spacing: 0; 
  text-align: right; 
  line-height: 32px;
  width: 100%;
  outline: none;
  min-width: 190px;
  height: 64px;

  &:focus {
    border-color: #a0a0a0;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;

const InputLabel = styled.label`
  position: absolute;
  top: -20px;
  left: 0px;
  font-size: 13px;
  color: #2979af;
  pointer-events: none;
  font-weight: 700;
`;

const TextInput = ({ placeholder, onChange, label }) => {
  return (
    <StyledInputWrapper>
      <InputLabel>{label}</InputLabel>
      <StyledInput type="text" placeholder={placeholder} onChange={onChange} />
    </StyledInputWrapper>
  );
};

export default TextInput;
