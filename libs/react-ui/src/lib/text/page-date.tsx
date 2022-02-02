import styled from '@emotion/styled';
import { pageDateStyles } from './text.styles';

export interface PageDateProps {
  children: string;
}

const StyledPageDate = styled.p`
  ${pageDateStyles}
`;

export function PageDate(props: PageDateProps) {
  const { children, ...rest } = props;
  return <StyledPageDate {...rest}>{children}</StyledPageDate>;
}

export default PageDate;
