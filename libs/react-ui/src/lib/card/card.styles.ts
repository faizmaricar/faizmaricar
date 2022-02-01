import { css, Theme } from '@emotion/react';

interface CardStyles {
  theme: Theme;
}
const cardStyles = ({ theme }: CardStyles) =>
  css`
    flex: 1;
    border: 2px solid ${theme.colors.primary.main};
    border-radius: ${theme.spaces[1]}px;

    & h2 {
      color: ${theme.colors.primary.main};
    }
  `;

export default cardStyles;
