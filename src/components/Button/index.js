import styled from 'styled-components';

const StyledButton = styled.button`
  background-image: linear-gradient(180deg, #1C4E86 1%, #194475 100%);
  border: 1px solid #10345C;
  box-shadow: inset 1px 1px 0 0 #2D68A9;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;

  &:hover {
    background-image: linear-gradient(180deg, #194475 1%, #1C4E86 100%);
  }

  &:focus {
    outline: none;
  }
`;

const ButtonText = styled.span`
  font-family: 'Ubuntu-Bold', sans-serif;
  font-size: 24px;
  color: #F8F8F8;
  letter-spacing: 0;
  text-align: center;
  line-height: 32px;
`;

const Button = ({ text, onClick }) => {
  return (
    <StyledButton onClick={onClick}>
      <ButtonText>{text}</ButtonText>
    </StyledButton>
  );
};

export default Button;
