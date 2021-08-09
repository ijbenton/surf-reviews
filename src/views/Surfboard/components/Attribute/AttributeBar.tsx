import React from 'react';
import styles from './Attribute.module.css';

type AttributeBarProps = {
  data: any[];
  attributes: readonly any[];
  title: string;
};

function AttributeBar({ data, attributes, title }: AttributeBarProps) {
  return (
    <div className='text-center'>
      <h3 className='mt-2 uppercase text-sm'>{title}</h3>
      <div className='border-t border-l border-r border-gray-700'>
        <div className='relative h-4 border-b border-gray-700'>
          <div className='flex h-full'>
            <span
              className={`${styles.chunk} ${data[0] ? styles.filled : ''}`}
            ></span>
            <span
              className={`${styles.chunk} ${data[0] ? styles.filled : ''}`}
            ></span>
            <span
              className={`${styles.chunk} ${data[1] ? styles.filled : ''}`}
            ></span>
            <span
              className={`${styles.chunk} ${data[1] ? styles.filled : ''}`}
            ></span>
            <span
              className={`${styles.chunk} ${data[2] ? styles.filled : ''}`}
            ></span>
            <span
              className={`${styles.chunk} ${data[2] ? styles.filled : ''}`}
            ></span>
          </div>
        </div>
        <div className='w-full h-2'>
          <span className='block w-1/2 h-full border-r border-gray-700'></span>
        </div>
      </div>
      <div className='w-full'>
        <ul className='flex justify-between text-gray-400 text-xs uppercase'>
          <li className='w-1/3 text-left'>{attributes[0]}</li>
          <li className='w-1/3'>{attributes[1]}</li>
          <li className='w-1/3 text-right'>{attributes[2]}</li>
        </ul>
      </div>
    </div>
  );
}

export default AttributeBar;
