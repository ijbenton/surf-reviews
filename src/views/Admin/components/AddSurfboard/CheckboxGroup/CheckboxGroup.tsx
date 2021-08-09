import { Field } from 'formik';
import React from 'react';

const CheckboxGroup = ({ items, title, property }) => {
  return (
    <div className='flex justify-center items-center mr-4'>
      <span className='mr-2 italic text-sm font-medium'>{title}</span>
      {items.map((item, idx) => (
        <span
          className='mr-2 uppercase text-xs font-normal'
          key={`${item} + ${idx}`}
        >
          <label className='mr-1'>{item}</label>
          <Field type='checkbox' name={property} value={item} />
        </span>
      ))}
    </div>
  );
};

export default CheckboxGroup;
