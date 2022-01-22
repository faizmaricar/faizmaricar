import styled from '@emotion/styled';

import headerStyles from './header.styles';
import { StyledPaper } from '../paper/paper';

/* eslint-disable-next-line */
export interface HeaderProps {
  brand?: string;
}

const StyledHeader = styled(StyledPaper)`
  ${headerStyles}
`;

export function Header(props: HeaderProps) {
  return (
    <StyledHeader elevation={2}>
      <h4>{props.brand}</h4>
    </StyledHeader>
  );
}

export default Header;
