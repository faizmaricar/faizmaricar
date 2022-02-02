import { css } from '@emotion/react';

const columnStyles = (props) => {
  const { theme, xs = 1, sm = 1, md = 1, lg = 1, xl = 1 } = props;
  return css`
    padding: ${theme.spaces[2]}px 0;
    grid-column: span ${xs};
    ${theme.breakpoints.sm} {
      grid-column: span ${sm};
    }
    ${theme.breakpoints.md} {
      grid-column: span ${md};
    }
    ${theme.breakpoints.lg} {
      grid-column: span ${lg};
    }
    ${theme.breakpoints.xl} {
      grid-column: span ${xl};
    }
  `;
};

export default columnStyles;
