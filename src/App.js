import { useState, useEffect } from 'react';
import axios from 'axios';
import { ThemeProvider } from 'styled-components';
import './App.css';
import Header from './components/Header';
import JobGrid from './components/JobGrid';
import Button from './components/Button';
import Filter from './components/Filter';
import { lightTheme, darkTheme, GlobalStyles } from './components/Themes';

const App = () => {
  const [theme, setTheme] = useState('light');
  const [items, setItems] = useState([]);
  let [filterJobData, setFilterJobData] = useState([]);
  const [search, setSearch] = useState([]);

  const themeToggler = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light');
  };

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json`
      );

      setItems(result.data);
      setFilterJobData(result.data);
    };
    fetchItems();
  }, []);

  filterJobData = items.filter((job) => job.title.includes(search));

  return (
    <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
      <GlobalStyles />
      <div>
        <Header toggle={() => themeToggler()} />
        <Filter getSearch={(q) => setSearch(q)} />
        <JobGrid theme={theme} data={filterJobData} search={search} />
        <Button />
      </div>
    </ThemeProvider>
  );
};

export default App;
