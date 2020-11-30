import { createGlobalStyle } from 'styled-components';

export const lightTheme = {
  body: '#f2f2f2',
  Color: '#19202D',
  background: '#ffffff',
};

export const darkTheme = {
  body: '#000000',
  Color: '#ffffff',
  background: '#19202D',
};

export const GlobalStyles = createGlobalStyle`
body {
    background-color: ${(props) => props.theme.body};
    Color: ${(props) => props.theme.Color};
}
`;
