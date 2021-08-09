import React from 'react';
import SurfboardList from './components/List/List';

interface SurfboardListViewProps {
  items: [];
  title: String;
}

const SurfboardListView = ({ items, title }: SurfboardListViewProps) => {
  return (
    <div>
      <h1 className='text-2xl font-semibold my-2'>{title}</h1>
      <SurfboardList filters items={items} />
    </div>
  );
};

export default SurfboardListView;
