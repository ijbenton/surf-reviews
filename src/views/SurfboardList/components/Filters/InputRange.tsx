import React, { useCallback, useEffect, useState, useRef } from 'react';
import styles from './InputRange.module.css';

const MultiRangeSlider = ({
  min,
  max,
  onMinChange,
  onMaxChange,
  prepend,
  append,
  step,
}) => {
  const [minVal, setMinVal] = useState(min);
  const [maxVal, setMaxVal] = useState(max);
  const minValRef = useRef(min);
  const maxValRef = useRef(max);
  const range = useRef(null);

  // Convert to percentage
  const getPercent = useCallback(
    (value) => Math.round(((value - min) / (max - min)) * 100),
    [min, max]
  );

  // Set width of the range to decrease from the left side
  useEffect(() => {
    const minPercent = getPercent(minVal);
    const maxPercent = getPercent(maxValRef.current);

    if (range.current) {
      range.current.style.left = `${minPercent}%`;
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [minVal, getPercent]);

  // Set width of the range to decrease from the right side
  useEffect(() => {
    const minPercent = getPercent(minValRef.current);
    const maxPercent = getPercent(maxVal);

    if (range.current) {
      range.current.style.width = `${maxPercent - minPercent}%`;
    }
  }, [maxVal, getPercent]);

  // Get min and max values when their state changes
  useEffect(() => {
    onMinChange(minVal);
  }, [minVal, onMinChange]);
  useEffect(() => {
    onMaxChange(maxVal);
  }, [maxVal, onMaxChange]);

  return (
    <div className={styles.container}>
      <input
        type='range'
        min={min}
        max={max}
        value={minVal}
        onChange={(event) => {
          const value = Math.min(Number(event.target.value), maxVal - step);
          setMinVal(value);
          minValRef.current = value;
        }}
        className={`${styles.thumb} ${styles['thumb--left']}`}
        style={{ zIndex: minVal > max - 100 && '5' }}
      />
      <input
        type='range'
        min={min}
        max={max}
        value={maxVal}
        onChange={(event) => {
          const value = Math.max(Number(event.target.value), minVal + step);
          setMaxVal(value);
          maxValRef.current = value;
        }}
        className={`${styles.thumb} ${styles['thumb--right']}`}
      />

      <div className={styles.slider}>
        <div className={`${styles['slider__track']}`} />
        <div ref={range} className={`${styles['slider__range']}`} />
        <div
          className={`${styles['slider__left-value']}`}
        >{`${prepend}${minVal}${append}`}</div>
        <div
          className={`${styles['slider__right-value']}`}
        >{`${prepend}${maxVal}${append}`}</div>
      </div>
    </div>
  );
};

export default MultiRangeSlider;
