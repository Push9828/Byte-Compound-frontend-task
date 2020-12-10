import React from 'react';
import JobItem from './JobItem';
import { JobGridStyled } from './JobGrid.styled';

const JobGrid = ({ data, theme }) => {
  return (
    <div className='container'>
      <JobGridStyled>
        {data.map((item) => (
          <JobItem key={item.id} item={item} theme={theme} />
        ))}
      </JobGridStyled>
    </div>
  );
};

export default JobGrid;
