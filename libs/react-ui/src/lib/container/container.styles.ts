import { css, Theme } from '@emotion/react';

interface ContainerStyles {
  theme: Theme;
}

const containerStyles = ({ theme }: ContainerStyles) =>
  css`
    margin: 0 ${theme.spaces[4]}px;

    ${theme.breakpoints.sm} {
      margin: 0 ${theme.spaces[8]}px;
    }

    ${theme.breakpoints.md} {
      margin: 0 auto;
      width: 840px;
    }

    ${theme.breakpoints.lg} {
      width: 75%;
    }

    ${theme.breakpoints.xl} {
      width: 1040px;
    }
  `;

export default containerStyles;
