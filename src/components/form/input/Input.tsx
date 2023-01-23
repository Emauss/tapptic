import React, { ReactElement } from 'react';
import styles from './input.module.scss';
import FormField from '../formField/FormField';
import { InputProps } from '../../../types/form/InputProps';

const Input = ({ label, error, errorMessage, disableError, id, ...props }: InputProps): ReactElement => (
  <div className={`${styles.inputWrapper}`}>
    <label className={styles.label} htmlFor={id}>
      {label}
    </label>

    <FormField error={error} errorMessage={errorMessage} disableError={disableError} {...props}>
      {props.type === 'textarea' ? (
        <textarea className={`${styles.input} ${styles.textarea} ${error ? styles.inputError : ''}`} id={id} rows={4} {...props} />
      ) : (
        <input className={`${styles.input} ${error ? styles.inputError : ''}`} id={id} type={props.type ? props.type : 'text'} {...props} />
      )}
    </FormField>
  </div>
);

export default Input;
