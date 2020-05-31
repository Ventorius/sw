import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';

import Routes from './Routes';
import theme from './globalStyles/theme';

const App: FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
};

export default App;
