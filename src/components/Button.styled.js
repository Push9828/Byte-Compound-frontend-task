import styled from 'styled-components';

const styledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #5964e0;
  border-radius: 5px;
  border: none;
  color: white;
  cursor: pointer;
  padding: 15px 32px;
  margin: 2% 0% 5% 50%;

  &:hover {
    background-color: #939bf4;
  }

  @media (max-width: 500px) {
     {
      margin: 2% 0% 5% 35%;
    }
  }
`;

export default styledButton;
