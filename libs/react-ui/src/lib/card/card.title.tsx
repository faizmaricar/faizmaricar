import React from 'react';
import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface CardTitleProps {
  children?: React.ReactNode;
}

const StyledCardTitle = styled.h3`
  padding: 8px;
  position: relative;
  bottom: 8px;
`;

export function CardTitle(props: CardTitleProps) {
  return <StyledCardTitle {...props} />;
}

export default CardTitle;
