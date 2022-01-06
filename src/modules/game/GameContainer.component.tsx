import styled from "styled-components";

const GameContainer = styled.div`
  width: 100%;
  border: 2px solid black;
  border-radius: 0.5rem;
  margin: 1rem 0;
  flex: 2;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    width: 80%;
    margin: 2rem 0;
  }
`;

export default GameContainer;
