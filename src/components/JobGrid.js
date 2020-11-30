import React from 'react';
import JobItem from './JobItem';
import { JobGridStyled } from './JobGrid.styled';

const JobGrid = ({ items, theme }) => {
  return (
    <div className='container'>
      <JobGridStyled>
        {items.map((item) => (
          <JobItem key={item.id} item={item} theme={theme} />
        ))}
      </JobGridStyled>
    </div>
  );
};

export default JobGrid;
