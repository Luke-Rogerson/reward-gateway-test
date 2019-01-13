import styled, { createGlobalStyle } from 'styled-components';

const theme = {
  red: '#FF0000',
  black: '#393939',
  offWhite: '#EDEDED',
  maxWidth: '1000px',
  bs: '0 12px 24px 0 rgba(0, 0, 0, 0.09)'
};

const GlobalStyle = createGlobalStyle`
  font-family: "Courier New", Courier, monospace
  html {
    box-sizing: border-box;
    font-size: 10px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
  }
  body {
    font-size: 1.5rem;
    line-height: 2;
  }


`;

const MainPage = styled.div`
  background: white;
  color: ${props => props.theme.black};
`;

const Inner = styled.div`
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
  padding: 2rem;
`;

export { MainPage, Inner, theme, GlobalStyle };
