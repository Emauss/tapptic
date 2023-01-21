import { ReactElement } from 'react';
import './input.scss';
import FormField from './FormField';
import { InputProps } from '../../types/form/InputProps';

const Input = ({ label, className, error, errorMessage, disableError, id, ...props }: InputProps): ReactElement => (
  <div className={`${className} mb-2`}>
    {!!label && props.type !== 'checkbox' && <label htmlFor={id}>{label}</label>}
    <FormField error={error} errorMessage={errorMessage} disableError={disableError} {...props}>
      <>
        {!!label && props.type === 'checkbox' ? (
          <span className='checkbox-wrapper'>
            <input
              role='button'
              className={` ${error ? 'error' : ''} ${props.value ? 'checked' : ''} px-2 py-1`}
              id={id}
              data-testid='input'
              {...props}
            />
            <label role='button' htmlFor={id} className='me-md-5 ps-3'>
              {label}
            </label>
          </span>
        ) : (
          <input
            className={` ${error ? 'error' : ''} ${props.type === 'checkbox' ? 'w-auto' : ''} px-2 py-1`}
            id={id}
            data-testid='input'
            {...props}
          />
        )}
      </>
    </FormField>
  </div>
);

export default Input;
