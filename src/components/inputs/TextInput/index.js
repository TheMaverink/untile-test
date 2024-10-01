import styled from 'styled-components';

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

  &:focus {
    border-color: #a0a0a0;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
  }
`;

const TextInput = ({ placeholder, onChange }) => {
  return (
    <StyledInput type="text" placeholder={placeholder} onChange={onChange} />
  );
};

export default TextInput;
