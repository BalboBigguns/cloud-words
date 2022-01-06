import styled, { css } from "styled-components";

const DropletHint = styled.p<{
  $isValidated: boolean;
  $isSelected: boolean;
  $isCorrect: boolean;
}>`
  display: none;
  color: ${({ $isCorrect, theme }) =>
    $isCorrect ? theme.color.correct : theme.color.error};

  ${({ $isValidated, $isSelected }) =>
    $isValidated &&
    $isSelected &&
    css`
      display: block;
    `}
`;

export default DropletHint;
