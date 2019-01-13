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
`;

export { Title, StyledHeader };
