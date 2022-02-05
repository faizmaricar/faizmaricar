import { css } from '@emotion/react';

export const aboutStyles = ({ theme }) => css`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  grid-template-rows: repeat(3, minmax(10px, auto));
  grid-column-gap: ${theme.spaces[4]}px;
  padding: ${theme.spaces[4]}px;

  ul {
    grid-row: 3 / 4;
    grid-column: 1 / 9;
    text-align: center;
  }

  ${theme.breakpoints.sm} {
    grid-template-rows: repeat(1, minmax(10px, auto));
  }

  ${theme.breakpoints.md} {
    ul {
      margin-top: ${theme.spaces[4]}px;
    }
  }

  ${theme.breakpoints.lg} {
    grid-template-rows: repeat(3, minmax(10px, auto));
  }
`;

export const imageContainerStyles = ({ theme }) => css`
  grid-row: 1 / 2;
  grid-column: 4 / 6;

  ${theme.breakpoints.md} {
    grid-row: 1 / 2;
    grid-column: 1 / 4;
  }
  ${theme.breakpoints.lg} {
    grid-column: 1 / 4;
    grid-row: 1 / 3;
  }
`;

export const contentContainerStyles = ({ theme }) => css`
  grid-row: 2 / 3;
  grid-column: 1 / 9;
  text-align: center;
  ${theme.breakpoints.md} {
    grid-row: 1 / 2;
    grid-column: 4 / 9;
    text-align: initial;
  }
  ${theme.breakpoints.lg} {
    grid-row: 1 / 4;
    grid-column: 4 / 9;
    text-align: initial;
  }
`;
