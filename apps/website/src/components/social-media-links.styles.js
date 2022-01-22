import { css } from '@emotion/react';

export const socialMediaLinksStyle = ({ theme }) => css`
  margin: ${theme.spaces[2]}px auto;
  & li {
    display: inline-block;
    padding: 0 ${theme.spaces[2]}px 0 0;
    color: ${theme.colors.primary.main};
  }
`;
