import { css } from '@emotion/react';

const headerStyles = ({ theme }) =>
  css`
    background-color: ${theme.colors.primary.main};
    color: ${theme.colors.white};
    text-transform: uppercase;
    text-align: center;
  `;

export default headerStyles;
