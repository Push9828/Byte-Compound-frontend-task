import { useState, useEffect } from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Header from './components/Header';
import JobGrid from './components/JobGrid';
import Button from './components/Button';
import { lightTheme, darkTheme, GlobalStyles } from './components/Themes';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [items, setItems] = useState([]);

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json`
      );
      setItems(result.data);
    };
    fetchItems();
  });

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div>
        <Header toggle={() => themeToggler()} />
        <JobGrid items={items} theme={theme} />
        <Button />
      </div>
    </ThemeProvider>
  );
};

export default App;
