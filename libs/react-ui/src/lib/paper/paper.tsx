import React from 'react';
import styled from '@emotion/styled';
import paperStyles from './paper.styles';

/* eslint-disable-next-line */
export interface PaperProps {
  elevation?: number;
  children?: React.ReactNode;
}

export const StyledPaper = styled.div`
  ${paperStyles}
`;

export function Paper(props: PaperProps) {
  return <StyledPaper {...props} />;
}

export default Paper;
