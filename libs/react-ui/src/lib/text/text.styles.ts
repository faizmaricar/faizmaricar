import { css, Theme } from '@emotion/react';

interface TextStyles {
  theme: Theme;
}

export const pageTitleStyles = ({ theme }: TextStyles) =>
  css({
    ...theme.typography.h2,
    fontWeight: theme.typography.h1.fontWeight,
    marginBottom: `${theme.spaces[4]}px`,
    [theme.breakpoints.md]: {
      fontSize: theme.typography.h1.fontSize,
    },
  });

export const pageDescriptionStyles = ({ theme }: TextStyles) =>
  css({
    ...theme.typography.h3,
    marginBottom: `${theme.spaces[6]}px`,
  });
