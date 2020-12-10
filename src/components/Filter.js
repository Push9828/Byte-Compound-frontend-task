import React, { useState } from 'react';
import { FilterStyle } from './Filter-styled';

const Filter = ({ getSearch }) => {
  const [text, setText] = useState('');

  const onChange = (q) => {
    setText(q);
    getSearch(q);
  };

  return (
    <FilterStyle>
      <form>
        <input
          type='text'
          className='form-control'
          placeholder='Search Job'
          value={text}
          onChange={(e) => onChange(e.target.value)}
          autoFocus
        ></input>
      </form>
    </FilterStyle>
  );
};

export default Filter;
