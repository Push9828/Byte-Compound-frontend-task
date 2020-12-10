import styled from 'styled-components';

export const FilterStyle = styled.section`
  max-width: 1080px;

  .form-control {
    width: 90%;
    height: 80px;
    background-color: ${(proos) => proos.theme.background};
    border-radius: 6px;
    transform: translate(15rem, -2rem);
    color: ${(props) => props.theme.color};
    border: none;
  }

  input:focus {
    outline: none;
  }

  @media (max-width: 800px) {
    .form-control {
      width: 50%;
    }
  }

  @media (max-width: 500px) {
    .form-control {
      width: 90%;
      transform: translate(1rem, -2rem);
    }
  }
`;
