import { css, Theme } from '@emotion/react';

interface ButtonStyles {
  theme: Theme;
  outline?: boolean;
  secondary?: boolean;
  link?: boolean;
}

const buttonStyles = ({
  theme,
  outline = false,
  secondary = false,
  link = false,
}: ButtonStyles) => {
  const color = theme.colors[secondary ? 'secondary' : 'primary'];
  return css`
    ${link && 'border: none'}
    ${!link && `border: 2px solid ${color.main}`};
    ${!link && `border-radius: ${theme.spaces[1]}px`};
    padding: ${theme.spaces[1]}px;
    background-color: ${outline ? 'transparent' : color.main};
    color: ${outline ? color.main : theme.colors.white};
    text-transform: uppercase;
    font-weight: 600;
    font-size: 16px;
    width: 100%;
    margin-bottom: ${theme.spaces[2]}px;
    &:hover {
      cursor: pointer;
    }
  `;
};

export default buttonStyles;
