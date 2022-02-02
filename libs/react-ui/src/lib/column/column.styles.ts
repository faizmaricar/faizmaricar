import { css, Theme } from '@emotion/react';
import { ColumnProps } from './column';

interface ColumnStyles extends ColumnProps {
  theme: Theme;
}

const columnStyles = (props: ColumnStyles) => {
  const { theme, xs = 1, sm = 1, md = 1, lg = 1, xl = 1, noPadding } = props;
  return css`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: ${noPadding ? 0 : theme.spaces[2]}px 0;
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
