import styled from '@emotion/styled';
import { pageDescriptionStyles } from './text.styles';

export interface PageDescriptionProps {
  children: string;
}

const StyledPageDescription = styled.h3`
  ${pageDescriptionStyles}
`;

export function PageDescription(props: PageDescriptionProps) {
  const { children, ...rest } = props;
  return <StyledPageDescription {...rest}>{children}</StyledPageDescription>;
}

export default PageDescription;
