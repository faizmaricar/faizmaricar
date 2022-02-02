import React from 'react';
import styled from '@emotion/styled';

import cardStyles from './card.styles';
import CardImage from './card.image';
import { StyledPaper } from '../paper/paper';
import CardTitle from './card.title';

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

Card.Image = CardImage;
Card.Title = CardTitle;

export default Card;
