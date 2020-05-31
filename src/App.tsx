import React, { FC } from 'react';
import { ThemeProvider } from 'styled-components';
import { Provider } from 'react-redux';

import Routes from './Routes';

import theme from './globalStyles/theme';
import store from './store';

const App: FC = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
};

export default App;
