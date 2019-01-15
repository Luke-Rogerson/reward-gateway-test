import styled from 'styled-components';

const StyledHeader = styled.header`
  border-bottom: 10px solid ${props => props.theme.black};
`;

const Title = styled.h1`
  font-size: 4rem;
  margin-left: 2rem;
  position: relative;
  z-index: 2;
  transform: skew(-7deg);
  text-align: center;
  a {
    padding: 0.5rem 1rem;
    background: ${props => props.theme.red};
    color: ${props => props.theme.offWhite};
    text-decoration: none;
    text-transform: uppercase;
  }
`;

export { Title, StyledHeader };
