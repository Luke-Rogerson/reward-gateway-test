import React from 'react';
import { MainPage, Inner, theme, GlobalStyle } from './styles';
import { ThemeProvider } from 'styled-components';
import Header from '../Header';
import EmployeesList from '../EmployeesList';

class App extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div>
          <GlobalStyle />
          <Header />
          <MainPage>
            <Inner>
              <EmployeesList />
            </Inner>
          </MainPage>
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
