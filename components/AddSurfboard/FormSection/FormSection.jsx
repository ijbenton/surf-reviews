import React from 'react';

const FormSection = ({ title, children }) => {
  return (
    <div>
      <div className='text-lg font-semibold mb-2'>
        <span className='border-b border-gray-500 uppercase'>{title}</span>
      </div>
      {children}
    </div>
  );
};

export default FormSection;
