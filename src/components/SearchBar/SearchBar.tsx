import React, { useState } from 'react';
import { SearchIcon } from '@heroicons/react/outline';
import styles from './SearchBar.module.css';

const SearchBar = () => {
  const [term, setTerm] = useState('');
  const termChangeHandler = (e) => {
    setTerm(e.target.value);
  };
  return (
    <div className='relative mx-auto text-gray-600'>
      <input
        className='border-2 border-gray-300 bg-white h-9 pl-10 pr-6 sm:pr-8 md:pr-16 rounded-lg text-sm focus:outline-none'
        type='search'
        name='search'
        value={term}
        onChange={termChangeHandler}
        placeholder='Search'
      />

      <SearchIcon className={styles.icon} />
    </div>
  );
};

export default SearchBar;
