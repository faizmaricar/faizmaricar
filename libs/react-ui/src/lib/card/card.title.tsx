import React from 'react';
import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface CardTitleProps {
  children?: React.ReactNode;
}

const StyledCardTitle = styled.h2``;

export function CardTitle(props: CardTitleProps) {
  return <StyledCardTitle {...props} />;
}

export default CardTitle;
