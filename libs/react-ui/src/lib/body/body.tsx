import React from 'react';
import styled from '@emotion/styled';

import bodyStyles from './body.styles';
import { StyledContainer } from '../container/container';

/* eslint-disable-next-line */
export interface BodyProps {
  children?: React.ReactNode;
}

const StyledBody = styled(StyledContainer)`
  ${bodyStyles}
`;

export function Body(props: BodyProps) {
  return <StyledBody {...props} />;
}

export default Body;
