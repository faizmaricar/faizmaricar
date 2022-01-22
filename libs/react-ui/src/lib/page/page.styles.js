import { css } from '@emotion/react';

const pageStyles = ({ theme }) =>
  css`
    min-height: 100vh;
    background-color: ${theme.colors.background};
  `;

export default pageStyles;
