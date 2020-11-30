import styled from 'styled-components';

export const JobGridStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;

  .container {
    width: 1080px;
    margin-left: 3rem;
  }

  @media (max-width: 800px) {
     {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  @media (max-width: 500px) {
     {
      grid-template-columns: 1fr;
    }
  }
`;
