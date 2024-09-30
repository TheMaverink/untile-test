import React from 'react';
import { ThemeProvider as StyledThemeProvider } from 'styled-components';

const theme = {
  colors: {
    white:'#F8F8F8',
    lightBlue: '#1E5891',
    midBlue:"#21639C",
    darkBlue: '',
    background: '#f5f5f5',
    lightGrey:"#5F5F5B",
    midGrey:"#8A8A86",
    darkGrey:"#454B51",
    text: '#333',
  },
  spacing: {
    small: '8px',
    medium: '16px',
    large: '24px',
  },
};

const ThemeProvider = ({ children }) => {
  return (
    <StyledThemeProvider theme={theme}>
      {children}
    </StyledThemeProvider>
  );
};

export default ThemeProvider;
