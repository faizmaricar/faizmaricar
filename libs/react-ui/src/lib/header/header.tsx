import styled from '@emotion/styled';

import headerStyles from './header.styles';

/* eslint-disable-next-line */
export interface HeaderProps {
  brand?: string;
}

const StyledHeader = styled.header`
  ${headerStyles}
`;

export function Header(props: HeaderProps) {
  return (
    <StyledHeader>
      <h4>{props.brand}</h4>
    </StyledHeader>
  );
}

export default Header;
