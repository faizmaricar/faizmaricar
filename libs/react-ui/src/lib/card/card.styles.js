import { css } from '@emotion/react';

const cardStyles = ({ theme }) =>
  css`
    border-radius: ${theme.spaces[1]}px;
    padding: ${theme.spaces[4]}px;
  `;

export default cardStyles;
