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
            <Column xs={4} sm={8} md={8} lg={12} xl={12}>
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
