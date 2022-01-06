import styled, { css } from "styled-components";

const DropletContainer = styled.div<{ $position: { x: number; y: number } }>`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 0.8em;

  ${({ $position }) =>
    css`
      top: ${$position.y}%;
      left: ${$position.x}%;
    `}

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1em;
    ${({ $position }) =>
      css`
        left: ${$position.x + 10}%;
      `}
  }
`;

export default DropletContainer;
