import React from 'react';
import { Column } from '@faizmaricar/react-ui';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const StyledTwitch = styled.iframe`
  width: 100%;
  height: 55vw;
  ${({ theme }) =>
    css`
      ${theme.breakpoints.md} {
        height: 100%;
      }
    `}
`;
export function Twitch() {
  return (
    <Column xs={4} sm={8} md={6} lg={6} xl={6}>
      <StyledTwitch
        title="stream"
        src="https://player.twitch.tv/?channel=faizmaricar&parent=localhost"
        allowFullScreen={true}
      ></StyledTwitch>
    </Column>
  );
}

export default Twitch;
