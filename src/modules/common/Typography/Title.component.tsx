import styled, { css } from "styled-components";

const Title = styled.h1<{ $color?: string }>`
  ${({ $color, theme }) =>
    $color &&
    css`
      color: ${theme.color[$color] || $color};
    `}

  margin: 1rem;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 4rem;
  }
`;

export default Title;
