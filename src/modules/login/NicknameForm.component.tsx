import styled from "styled-components";

const NicknameForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  & > * {
    margin: 0.5rem;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    & > * {
      margin: 1rem;
    }
  }
`;

export default NicknameForm;
