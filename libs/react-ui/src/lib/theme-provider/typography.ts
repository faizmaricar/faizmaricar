interface TypographyStyle {
  fontSize: number;
  fontWeight: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;
  lineHeight: number;
  letterSpacing: number;
  marginBottom: number;
}

export interface Typography {
  h1: TypographyStyle;
  h2: TypographyStyle;
  h3: TypographyStyle;
  p: TypographyStyle;
}

export const typography: Typography = {
  h1: {
    fontSize: 68,
    lineHeight: 1,
    letterSpacing: 0.2,
    fontWeight: 700,
    marginBottom: 16,
  },
  h2: {
    fontSize: 40,
    lineHeight: 1,
    letterSpacing: 0.2,
    fontWeight: 100,
    marginBottom: 16,
  },
  h3: {
    fontSize: 24,
    lineHeight: 1,
    letterSpacing: 0.2,
    fontWeight: 300,
    marginBottom: 16,
  },
  p: {
    fontSize: 16,
    lineHeight: 1.5,
    letterSpacing: 1.5,
    fontWeight: 400,
    marginBottom: 24,
  },
};

export default typography;
