import '@emotion/react';

import { Colors } from './colors';
import { Breakpoints } from './breakpoints';
import { Typography } from './typography';

declare module '@emotion/react' {
  export interface Theme {
    colors: Colors;
    breakpoints: Breakpoints;
    spaces: number[];
    typography: Typography;
  }
}
