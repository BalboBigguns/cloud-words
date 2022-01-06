import styled from "styled-components";

const PrimaryButton = styled.button`
  border-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.primary};
  background-color: transparent;
  padding: 0.5em 2em;
  border-radius: 0.2em;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.5rem;
  }
`;

export default PrimaryButton;
