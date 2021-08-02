import React from 'react';
import styles from './ToggleButton.module.css';

interface ToggleProps {
  toggled: boolean;
  setToggled: (isToggled: boolean) => void;
  toggleEnabledMsg: string;
  toggleDisabledMsg: string;
}

const ToggleButton = ({
  toggled,
  setToggled,
  toggleEnabledMsg,
  toggleDisabledMsg,
}: ToggleProps) => {
  return (
    <div className={styles.container}>
      <label htmlFor='toggle' className={styles.label}>
        <div className='relative'>
          <input
            type='checkbox'
            checked={toggled}
            onChange={() => setToggled(!toggled)}
            id='toggle'
            className={styles.input}
          />
          <div className={styles.pill}></div>
          <div className={styles.dot}></div>
        </div>
        {/* <div className={styles.msg}>
          {toggled ? toggleEnabledMsg : toggleDisabledMsg}
        </div> */}
      </label>
    </div>
  );
};

export default ToggleButton;
