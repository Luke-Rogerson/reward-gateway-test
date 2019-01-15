import styled, { createGlobalStyle } from 'styled-components';

const theme = {
  red: '#FF0000',
  black: '#393939',
  offWhite: '#EDEDED',
  maxWidth: '1000px'
};

const GlobalStyle = createGlobalStyle`
  html {
    font-family: "Bookman Old Style", Courier, monospace;
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
