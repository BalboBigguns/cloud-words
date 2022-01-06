import styled from "styled-components";

const CongratulationsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 1rem;

  & > * {
    text-align: center;
    margin: 0.2rem 0;
  }

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    & > * {
      text-align: center;
      margin: 0.5rem 0;
    }
  }
`;

export default CongratulationsContainer;
