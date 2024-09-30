import ReduxProvider from './ReduxProvider';
import ThemeProvider from './ThemeProvider';

const AppProviders = ({ children }) => (
  <ReduxProvider>
    <ThemeProvider>{children}</ThemeProvider>
  </ReduxProvider>
);

export default AppProviders;
