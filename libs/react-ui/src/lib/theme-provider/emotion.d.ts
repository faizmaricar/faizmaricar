import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: { main: string; l1: string };
      secondary: { main: string; l1: string };
      background: string;
      white: string;
      black: string;
      text: string;
    };
    breakpoints: {
      sm: string;
      md: string;
      lg: string;
      xl: string;
    };
    spaces: number[];
  }
}
