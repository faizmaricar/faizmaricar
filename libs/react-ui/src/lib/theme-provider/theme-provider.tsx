import React from 'react';
import { Theme, ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import colors from './colors';
import breakpoints from './breakpoints';
import spaces from './spaces';
import typography from './typography';

/* eslint-disable-next-line */
export interface ThemeProps {
  children?: React.ReactNode;
}

export const theme: Theme = {
  colors,
  breakpoints,
  spaces,
  typography,
};

export function ThemeProvider(props: ThemeProps) {
  return <EmotionThemeProvider {...props} theme={theme} />;
}

export default ThemeProvider;
