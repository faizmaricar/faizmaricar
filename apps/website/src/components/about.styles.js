import { css } from '@emotion/react';

export const aboutStyles = ({ theme }) => css`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(4, minmax(10px, auto));
  grid-column-gap: ${theme.spaces[4]}px;
`;

export const imageContainerStyles = ({ theme }) => css`
  grid-row: 1 / 2;
  grid-column: 4 / 6;
  ${theme.breakpoints.sm} {
    grid-row: 1 / 5;
    grid-column: 1 / 3;
  }
  ${theme.breakpoints.md} {
    grid-row: 1 / 5;
    grid-column: 1 / 3;
  }
  ${theme.breakpoints.lg} {
    grid-column: 1 / 4;
  }
`;

export const contentContainerStyles = ({ theme }) => css`
  grid-row: 4 / 5;
  grid-column: 1 / 9;
  text-align: center;
  ${theme.breakpoints.sm} {
    grid-row: 1 / 2;
    grid-column: 3 / 9;
    text-align: initial;
  }
  ${theme.breakpoints.md} {
    grid-row: 1 / 2;
    grid-column: 3 / 9;
    text-align: initial;
  }
  ${theme.breakpoints.lg} {
    grid-row: 1 / 2;
    grid-column: 4 / 9;
    text-align: initial;
  }
`;

export const socialMediaContainerStyles = ({ theme }) => css`
  grid-row: 2 / 4;
  grid-column: 1 / 9;
  text-align: center;
  ${theme.breakpoints.sm} {
    grid-row: 2 / 3;
    grid-column: 3 / 9;
    text-align: initial;
  }
  ${theme.breakpoints.md} {
    grid-row: 3 / 4;
    grid-column: 3 / 9;
    text-align: initial;
  }

  ${theme.breakpoints.md} {
    grid-column: 4 / 9;
    
`;
