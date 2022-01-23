import styled from '@emotion/styled';

import headerStyles from './header.styles';
import Paper from '../paper/paper';
import Container from '../container/container';
import Row from '../row/row';
import Column from '../column/column';

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
          <Row>
            <Column xs={2} sm={2} md={2} lg={2} xl={2}>
              <h4>
                <a href="/">{props.brand}</a>
              </h4>
            </Column>
          </Row>
        </Container>
      </StyledHeader>
    </Paper>
  );
}

export default Header;
