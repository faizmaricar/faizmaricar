interface TypographyStyle {
  fontSize: number;
  fontWeight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  lineHeight: number;
  letterSpacing: number;
}

export interface Typography {
  h1: TypographyStyle;
  h2: TypographyStyle;
  h3: TypographyStyle;
  p: TypographyStyle;
}

export const typography: Typography = {
  h1: { fontSize: 68, lineHeight: 1, letterSpacing: 0.2, fontWeight: 700 },
  h2: { fontSize: 40, lineHeight: 1, letterSpacing: 0.2, fontWeight: 100 },
  h3: { fontSize: 24, lineHeight: 1, letterSpacing: 0.2, fontWeight: 300 },
  p: { fontSize: 16, lineHeight: 2, letterSpacing: 1.5, fontWeight: 400 },
};

export default typography;
