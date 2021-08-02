import React from 'react';
import { surfboards } from '../../data/surfboards';
import SurfboardListItem from '../SurfboardListItem/SurfboardListItem';
import styles from './SurfboardList.module.css';

const SurfboardList = ({ items }) => {
  return (
    <ul className={styles.list}>
      {items.map((item) => (
        <SurfboardListItem key={item.id} item={item} />
      ))}
    </ul>
  );
};

export default SurfboardList;
