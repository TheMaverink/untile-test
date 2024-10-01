import React from 'react';
import { useLocation } from 'react-router-dom';
import styled from 'styled-components';

const StyledNavbar = styled.nav`
  height: 64px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 2px solid #e0e0d7;
`;

const NavLink = styled.a`
  margin: 0 15px;
  text-decoration: none;
  color: ${(props) => props.theme.colors.midGrey};
  font-weight: 700;
  position: relative;
  font-size: 16px;

  color: ${(props) => (props.isActive ? props.theme.colors.lightBlue : props.theme.colors.midGrey)};

  &::after {
    content: '';
    display: block;
    width: ${(props) => (props.isActive ? '100%' : '0')};  // Set width based on active state
    height: 2px;
    background: ${(props) => props.theme.colors.lightBlue};
    transition: width 0.3s;
    position: absolute;
    bottom: -22px;
    left: 0;
  }

  &:hover {
    color: ${(props) => props.theme.colors.lightBlue};
  }
`;

export default function Navbar() {
  const location = useLocation(); // Get current location

  return (
    <StyledNavbar>
      <NavLink href="/calculator" isActive={location.pathname === '/calculator'}>
        CRYPTO CALCULATOR
      </NavLink>
      <NavLink href="/tickers" isActive={location.pathname === '/tickers'}>
        TICKERS
      </NavLink>
    </StyledNavbar>
  );
}
