import { ThemeProvider as EmotionThemeProvider } from '@emotion/react';

import colors from './colors';
import breakpoints from './breakpoints';
import spaces from './spaces';

/* eslint-disable-next-line */
export interface ThemeProps {}

export const theme = {
  colors,
  breakpoints,
  spaces,
};

export function ThemeProvider(props: ThemeProps) {
  return <EmotionThemeProvider {...props} theme={theme} />;
}

export default ThemeProvider;
