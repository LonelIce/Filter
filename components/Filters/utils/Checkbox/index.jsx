import React from 'react';
import styles from './Checkbox.module.scss';

function Checkbox({ title, value, id, checked, onChange }) {
  return (
    <div className={styles.checkbox}>
      <input
        type='checkbox'
        id={id}
        value={value}
        className={styles.input}
        checked={checked}
        onChange={onChange}
      />
      <label htmlFor={id} className={styles.label}>
        <span>{title}</span>
      </label>
    </div>
  );
}

export default Checkbox;
