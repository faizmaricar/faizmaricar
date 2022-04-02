import { css } from '@emotion/react';

const headerStyles = ({ theme }) =>
  css`
    background-color: ${theme.colors.primary.main};
    text-transform: uppercase;
    text-align: center;
    position: fixed;
    width: 100%;
    z-index: 1;
    & h4 {
      color: ${theme.colors.white};
      margin: 0;
    }
    ${theme.breakpoints.sm} {
      text-align: initial;
    }
  `;

export default headerStyles;
