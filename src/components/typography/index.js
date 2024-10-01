import styled from 'styled-components';

const StyledHeading1 = styled.h1`
  color: ${(props) => props.theme.colors.midBlue};
  font-size: 40px;
  font-weight: 700;
`;

export const Heading1 = ({ children, style }) => {
  return <StyledHeading1 style={style}>{children}</StyledHeading1>;
};


