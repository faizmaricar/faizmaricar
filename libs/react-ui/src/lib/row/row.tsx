import React from 'react';
import styled from '@emotion/styled';

import rowStyles from './row.styles';

/* eslint-disable-next-line */
export interface RowProps {
  children?: React.ReactNode;
}

const StyledRow = styled.div`
  ${rowStyles}
`;

export function Row(props: RowProps) {
  return <StyledRow {...props} />;
}

export default Row;
