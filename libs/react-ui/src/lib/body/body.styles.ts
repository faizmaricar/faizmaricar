import { css, Theme } from '@emotion/react';

interface BodyStyles {
  theme: Theme;
}

const bodyStyles = ({ theme }: BodyStyles) =>
  css`
    padding: ${theme.spaces[2]}px 0;
    & > div {
      margin-bottom: ${theme.spaces[4]}px;
    }
  `;

export default bodyStyles;
