import styled, { css } from "styled-components";

const Heading = styled.h3<{ $color?: string }>`
  ${({ $color, theme }) =>
    $color &&
    css`
      color: ${theme.color[$color] || $color};
    `}

  margin: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 2rem;
  }
`;

export default Heading;
