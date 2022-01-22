import styled from '@emotion/styled';

import pageStyles from './page.styles';

/* eslint-disable-next-line */
export interface PageProps {}

const StyledPage = styled.div`
  ${pageStyles}
`;

export function Page(props: PageProps) {
  return <StyledPage {...props} />;
}

export default Page;
