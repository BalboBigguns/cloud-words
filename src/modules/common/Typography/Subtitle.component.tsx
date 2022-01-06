import styled, { css } from "styled-components";

const Subtitle = styled.h2<{ $color?: string }>`
  ${({ $color, theme }) =>
    $color &&
    css`
      color: ${theme.color[$color] || $color};
    `}

  margin: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 3rem;
  }
`;

export default Subtitle;
