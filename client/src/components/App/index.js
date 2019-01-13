import React from 'react';
import { MainPage, Inner, theme, GlobalStyle } from './styles';
import styled, { ThemeProvider } from 'styled-components';
import Header from '../Header';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <div>
        <GlobalStyle />
        <Header />
        <MainPage>
          <Inner>
            <p>HELLO</p>
          </Inner>
        </MainPage>
      </div>
    </ThemeProvider>
  );
};

export default App;
