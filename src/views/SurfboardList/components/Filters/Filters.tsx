import { PlusIcon } from '@heroicons/react/outline';
import React from 'react';
import styles from './Filters.module.css';
import PriceFilter from './PriceFilter';
import VolumeFilter from './VolumeFilter';

const Filters = () => {
  return (
    <div className={styles.filters}>
      <PriceFilter />
      <VolumeFilter />
    </div>
  );
};

export default Filters;
