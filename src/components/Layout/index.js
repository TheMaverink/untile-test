import styled, { createGlobalStyle } from 'styled-components';
import { Outlet } from 'react-router-dom';

import Navbar from '../Navbar';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Ubuntu', sans-serif;
    font-size: 16px;
    line-height: 1.5;
    background-color: #f4f4f9;
    color: #333;
    background-color: ${(props) => props.theme.colors.background};

  }

  #root{
    min-height:100vh;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    font-family: inherit;
    font-size: 1rem;
    padding: 0.5rem 1rem;
    border: none;
    cursor: pointer;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
  }
`;

export default function Layout() {
  return (
    <>
      <GlobalStyle />
      <Navbar />
      <Outlet />
    </>
  );
}
