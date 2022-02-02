import React from 'react';
import styled from '@emotion/styled';

import columnStyles from './column.styles';

/* eslint-disable-next-line */
export interface ColumnProps {
  children?: React.ReactNode;
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
  noPadding?: boolean;
}

const StyledColumn = styled.div<ColumnProps>`
  ${columnStyles}
`;

export function Column(props: ColumnProps) {
  return <StyledColumn {...props} />;
}

export default Column;
