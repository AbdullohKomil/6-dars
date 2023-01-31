import React from 'react';

export const Search = ({ setSearch,setActivePage }) => {
  return (
    <input
      onChange={(evt) => {
        setActivePage(1)
        setSearch(evt.target.value)
      }}
      type='search'
      className='form-control w-50 mx-auto mb-5 rounded-pill'
      placeholder='Search...'
    />
  );
};
