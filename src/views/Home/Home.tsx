import React from 'react';
import SurfboardList from '../SurfboardList/components/List/List';

interface HomeViewProps {
  items: [];
}

const HomeView = ({ items }: HomeViewProps) => {
  return (
    <div>
      <SurfboardList items={items} filters={false} />
    </div>
  );
};

export default HomeView;
