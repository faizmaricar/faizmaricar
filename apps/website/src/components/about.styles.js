import { css } from '@emotion/react';

export const imageContainerStyles = ({ theme }) => css`
  grid-row: 1 / 2;
  grid-column: 2 / 4;
  ${theme.breakpoints.sm} {
    grid-row: 1 / 4;
    grid-column: 1 / 2;
  }
`;

export const contentContainerStyles = ({ theme }) => css`
  grid-row: 2 / 4;
  grid-column: 1 / 5;
  text-align: center;
  ${theme.breakpoints.sm} {
    grid-row: 1 / 4;
    grid-column: 2 / 5;
    text-align: initial;
  }
`;

export const socialLinksStyle = ({ theme }) => css`
  & li {
    display: inline-block;
    padding: ${theme.spaces[1]}px;
  }
`;
