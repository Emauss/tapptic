import { ReactElement } from 'react';
import { FormFieldProps } from '../../../types/form/IFormFieldProps';
import styles from './formField.module.scss';

const FormField = ({ error = false, errorMessage = '', children, className }: FormFieldProps): ReactElement => (
  <div className={className}>
    {children}
    <span className={`${styles.errorMessage} mb-0 ${error ? 'opacity-1' : 'opacity-0 pe-none'}`}>{error ? errorMessage : ''}</span>
  </div>
);

export default FormField;
