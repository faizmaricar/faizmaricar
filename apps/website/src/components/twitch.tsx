import React from 'react';
import { Column } from '@faizmaricar/react-ui';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const StyledTwitch = styled.iframe`
  width: 100%;
  height: 55vw;
  box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.12);
  ${({ theme }) =>
    css`
      ${theme.breakpoints.md} {
        height: 100%;
        border: 2px solid ${theme.colors.primary.main};
        border-radius: ${theme.spaces[1]}px;
      }
    `}
`;
export function Twitch() {
  return (
    <Column xs={4} sm={8} md={6} lg={6} xl={6}>
      <StyledTwitch
        title="stream"
        src="https://player.twitch.tv/?channel=faizmaricar&parent=faizmaricar.com&parent=www.faizmaricar.com"
        allowFullScreen={true}
      ></StyledTwitch>
    </Column>
  );
}

export default Twitch;
