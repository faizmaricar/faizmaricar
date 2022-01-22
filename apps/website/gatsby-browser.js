import React from 'react';
import { GlobalStyles } from '@faizmaricar/react-ui';

export function wrapPageElement({ element }) {
  return (
    <>
      <GlobalStyles />
      {element}
    </>
  );
}
