import React from 'react';
import { CardStyled, JobTitle } from './JobItem.styled';
import moment from 'moment';

const JobItem = ({ item, theme }) => {
  return (
    <CardStyled>
      <div className='logo-box'>
        <img src={item.company_logo} alt='logo' />
      </div>
      <p className='type'>
        {moment(new Date(item.created_at)).fromNow()} . {item.type}
      </p>
      <JobTitle theme={theme}>{item.title}</JobTitle>
      <p className='company-name'>{item.company}</p>
      <h5 className='location'>{item.location}</h5>
    </CardStyled>
  );
};

export default JobItem;
