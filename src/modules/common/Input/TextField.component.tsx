import styled from "styled-components";

const TextField = styled.input`
  width: 200px;
  padding: 0.5em 1em;
  border-radius: 0.2em;

  @media (min-width: ${({ theme }) => theme.breakpoints.lg}) {
    font-size: 1.5rem;
    width: 400px;
  }
`;

export default TextField;
