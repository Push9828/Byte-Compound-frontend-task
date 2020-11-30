import styled from 'styled-components';

export const CardStyled = styled.div`
  margin-top: 5rem;
  border-radius: 6px;
  width: 80%;
  padding: 0rem 0rem 2rem 1.6rem;
  height: auto;
  background-color: ${(props) => props.theme.background};

  .logo-box {
    transform: translate(20px, -20px) scale(1.5);
    width: 2.5rem;
    height: 2.5rem;
    background-color: dodgerblue;
    border-radius: 15px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .logo-box img {
    width: 1.8rem;
  }

  .type {
    color: #6e8098;
    font-size: 1rem;
    padding-bottom: 8px;
  }

  .company-name {
    color: #6e8098;
    padding-bottom: 1.5rem;
  }

  .location {
    color: #5964e0;
    font-size: 14px;
    line-height: 18px;
  }
`;

export const JobTitle = styled.h4`
  color: ${(props) => props.theme.color};
  padding-bottom: 8px;
`;
