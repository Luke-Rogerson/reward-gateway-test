import styled from 'styled-components';

const List = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  max-width: ${props => props.theme.maxWidth};
  margin: 0 auto;
`;

const Button = styled.button`
  display: inline-block;
  border-radius: 3px;
  padding: 1rem;
  margin: 0 auto;
  background: transparent;
  color: ${props => props.theme.black};
  border: 2px solid ${props => props.theme.black};
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const InfoText = styled.h1`
  font-size: 5rem;
`;

export { List, Button, Wrapper, InfoText };
