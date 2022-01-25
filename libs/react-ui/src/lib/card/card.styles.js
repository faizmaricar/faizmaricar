import { css } from '@emotion/react';

const cardStyles = ({ theme }) =>
  css`
    border: 2px solid ${theme.colors.primary.main};
    border-radius: ${theme.spaces[1]}px;
    padding: ${theme.spaces[4]}px;
    height: 172px;
    & h2 {
      color: ${theme.colors.primary.main};
    }
  `;

export default cardStyles;
