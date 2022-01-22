import styled from '@emotion/styled';

import headerStyles from './header.styles';
import Paper from '../paper/paper';
import Container from '../container/container';

/* eslint-disable-next-line */
export interface HeaderProps {
  brand?: string;
}

const StyledHeader = styled.header`
  ${headerStyles}
`;

export function Header(props: HeaderProps) {
  return (
    <Paper elevation={2}>
      <StyledHeader>
        <Container>
          <h4>{props.brand}</h4>
        </Container>
      </StyledHeader>
    </Paper>
  );
}

export default Header;
