import React from 'react';
import { server } from '../../src/lib/config';
import SurfboardListView from '../../src/views/SurfboardList/SurfboardList';

const AllSurfboardsPage = ({ items }) => (
  <SurfboardListView items={items} title='All Surfboards' />
);

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/surfboards`);
  const data = await res.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: { items: data.data },
  };
};

export default AllSurfboardsPage;
