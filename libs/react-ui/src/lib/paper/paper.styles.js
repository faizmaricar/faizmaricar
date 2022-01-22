import { css } from '@emotion/react';

const paperStyles = ({ elevation = 1 }) =>
  css`
    ${[
      'box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.12);',
      'box-shadow: 0px 0px 2px 2px rgba(0, 0, 0, 0.12);',
      'box-shadow: 0px 0px 3px 3px rgba(0, 0, 0, 0.12);',
      'box-shadow: 0px 0px 4px 4px rgba(0, 0, 0, 0.12);',
      'box-shadow: 0px 0px 6px 6px rgba(0, 0, 0, 0.12);',
    ][elevation - 1]};
  `;

export default paperStyles;
