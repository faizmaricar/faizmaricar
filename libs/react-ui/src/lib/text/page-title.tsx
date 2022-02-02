import styled from '@emotion/styled';
import { pageTitleStyles } from './text.styles';

export interface PageTitleProps {
  children: string;
}

const StyledPageTitle = styled.h1`
  ${pageTitleStyles}
`;

export function PageTitle(props: PageTitleProps) {
  const { children, ...rest } = props;
  return <StyledPageTitle {...rest}>{children}</StyledPageTitle>;
}

export default PageTitle;
