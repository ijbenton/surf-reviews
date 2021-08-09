import { Disclosure, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { PlusIcon } from '@heroicons/react/outline';
import styles from './Filters.module.css';
import MultiRangeSlider from './InputRange';

export default function PriceFilter() {
  const [min, setMin] = useState(300);
  const [max, setMax] = useState(1200);
  return (
    <Disclosure>
      <Disclosure.Button className={styles.filter}>
        <h6 className={styles['filter__title']}>Price</h6>
        <PlusIcon className='h-5 w-5 text-black' />
      </Disclosure.Button>
      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform scale-95 opacity-0'
        enterTo='transform scale-100 opacity-100'
        leave='transition ease-out duration-75'
        leaveFrom='transform scale-100 opacity-100'
        leaveTo='transform scale-95 opacity-0'
      >
        <Disclosure.Panel className='w-full my-2 origin-top bg-white divide-y divide-gray-100 rounded-md shadow-sm ring-1 ring-black ring-opacity-5 focus:outline-none'>
          <div className='px-1 py-1 '>
            <MultiRangeSlider
              min={300}
              max={1200}
              prepend='$'
              append=''
              step={100}
              onMinChange={(newMin) => setMin(newMin)}
              onMaxChange={(newMax) => setMax(newMax)}
            />
          </div>
        </Disclosure.Panel>
      </Transition>
    </Disclosure>
  );
}
