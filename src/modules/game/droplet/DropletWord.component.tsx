import styled, { css } from "styled-components";

const DropletWord = styled.p<{
  $isSelected: boolean;
  $isValidated: boolean;
  $isCorrect: boolean;
}>`
  padding: 0.5em 1em;
  cursor: ${({ $isValidated }) => ($isValidated ? "default" : "pointer")};

  ${({ $isSelected }) =>
    $isSelected &&
    css`
      opacity: 0.5;
    `}

  ${({ $isValidated, $isCorrect, $isSelected, theme }) =>
    $isValidated &&
    $isSelected &&
    css`
      color: ${$isCorrect ? theme.color.correct : theme.color.error};
    `}
`;

export default DropletWord;
