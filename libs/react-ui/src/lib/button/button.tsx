import React from 'react';
import styled from '@emotion/styled';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import buttonStyles from './button.styles';

/* eslint-disable-next-line */
export interface ButtonProps {
  children?: React.ReactNode;
  icon?: IconDefinition;
  outline?: boolean;
  secondary?: boolean;
  link?: boolean;
}

const StyledButton = styled.button<ButtonProps>`
  ${buttonStyles}
`;

export function Button(props: ButtonProps) {
  const { children, icon, outline, ...rest } = props;
  return (
    <StyledButton outline={outline} {...rest}>
      {icon && <FontAwesomeIcon icon={icon} />} {children}
    </StyledButton>
  );
}

export default Button;
