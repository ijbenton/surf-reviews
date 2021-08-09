import React from 'react';
import Filters from '../Filters/Filters';
import SurfboardListItem from '../ListItem/ListItem';
import styles from './List.module.css';

interface SurfboardListProps {
  items: [];
  filters: boolean;
}

const SurfboardList = ({ items, filters }: SurfboardListProps) => {
  return (
    <div className='flex'>
      {filters && <Filters />}
      {items.length > 0 ? (
        <ul className={styles.list}>
          {items.map((item) => (
            <SurfboardListItem key={item._id} item={item} />
          ))}
        </ul>
      ) : (
        <p>No Surfboards Added Yet</p>
      )}
    </div>
  );
};

export default SurfboardList;
