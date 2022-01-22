import styled from '@emotion/styled';

/* eslint-disable-next-line */
export interface ReactUiProps {}

const StyledReactUi = styled.div`
  color: pink;
`;

export function ReactUi(props: ReactUiProps) {
  return (
    <StyledReactUi>
      <h1>Welcome to ReactUi!</h1>
    </StyledReactUi>
  );
}

export default ReactUi;
