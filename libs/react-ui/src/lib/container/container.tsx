import React from 'react';
import styled from '@emotion/styled';

import containerStyles from './container.styles';

/* eslint-disable-next-line */
export interface ContainerProps {
  children?: React.ReactNode;
  fluid?: boolean;
}

export const StyledContainer = styled.div`
  ${containerStyles}
`;

export function Container(props: ContainerProps) {
  return <StyledContainer {...props} />;
}

export default Container;
