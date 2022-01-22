import React from 'react';
import styled from '@emotion/styled';

import cardStyles from './card.styles';
import { StyledPaper } from '../paper/paper';

/* eslint-disable-next-line */
export interface CardProps {
  children?: React.ReactNode;
}

const StyledCard = styled(StyledPaper)`
  ${cardStyles}
`;

export function Card(props: CardProps) {
  return <StyledCard {...props} />;
}

export default Card;
