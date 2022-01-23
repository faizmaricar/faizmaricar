import '@emotion/react';

declare module '@emotion/react' {
  export interface Theme {
    colors: {
      primary: string;
      secondary: string;
      background: string;
      white: string;
      black: string;
      text: string;
    };
    spaces: string[];
  }
}