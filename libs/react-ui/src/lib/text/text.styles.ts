import { css, Theme } from '@emotion/react';

interface TextStyles {
  theme: Theme;
}

export const pageTitleStyles = ({ theme }: TextStyles) =>
  css({
    ...theme.typography.h2,
    fontWeight: theme.typography.h1.fontWeight,
    [theme.breakpoints.md]: {
      fontSize: theme.typography.h1.fontSize,
    },
  });
