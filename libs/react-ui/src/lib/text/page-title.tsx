import styled from '@emotion/styled';

export interface PageTitleProps {
  children: string;
}

const StyledPageTitle = styled.h1`
  font-size: 60px;
`;

export function PageTitle(props: PageTitleProps) {
  const { children, ...rest } = props;
  return <StyledPageTitle {...rest}>{children}</StyledPageTitle>;
}

export default PageTitle;
