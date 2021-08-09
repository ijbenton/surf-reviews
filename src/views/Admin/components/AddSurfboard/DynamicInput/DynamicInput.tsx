import { Field } from 'formik';
import React from 'react';

const DynamicInput = ({ type, title, property }) => {
  return (
    <div className='flex flex-col mr-3'>
      <label>{title}</label>
      <Field type={type} name={property} />
    </div>
  );
};

export default DynamicInput;
