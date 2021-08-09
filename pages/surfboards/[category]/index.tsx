import React, { useState } from 'react';
import { server } from '../../../src/lib/config';
import SurfboardList from '../../../src/views/SurfboardList/components/List/List';
import { categories } from '../../../types/surfboards';
const SurfboardPage = ({ surfboards, category }) => {
  const title =
    category
      .replace(/(^|[\s-])\S/g, function (match) {
        return match.toUpperCase();
      })
      .replace(/-/g, ' / ')
      .replace(/_/g, ' ') + ' Surfboards';
  return (
    <div>
      <h1 className='text-2xl font-semibold my-2'>{title}</h1>
      <SurfboardList items={surfboards} />
    </div>
  );
};

export const getStaticProps = async (context) => {
  const res = await fetch(
    `${server}/api/surfboards/${context.params.category}`
  );

  const surfboards = await res.json();

  return {
    props: {
      surfboards: surfboards.data,
      category: context.params.category,
    },
  };
};

export const getStaticPaths = async () => {
  const paths = categories.map((category) => ({ params: { category } }));

  return {
    paths,
    fallback: false,
  };
};

export default SurfboardPage;
