import { Global, css, useTheme } from '@emotion/react';

export function GlobalStyles() {
  const theme = useTheme();
  return (
    <Global
      styles={css`
        @import url('https://fonts.googleapis.com/css2?family=Jost:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
        * {
          margin: 0;
          padding: 0;
          font-family: 'Jost', sans-serif;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p {
          margin-bottom: ${theme.spaces[2]}px;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
          color: ${theme.colors.primary.main};
        }

        p {
          font-size: ${theme.typography.p.fontSize}px;
          font-weight: ${theme.typography.p.fontWeight};
          line-height: ${theme.typography.p.lineHeight};
          letter-spacing: ${theme.typography.p.letterSpacing}px;
          color: ${theme.colors.text};
        }

        li {
          list-style: none;
        }

        a {
          color: inherit;
          text-decoration: inherit;
        }
      `}
    />
  );
}

export default GlobalStyles;
