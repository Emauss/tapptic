import { ReactElement } from 'react';
import { FormFieldProps } from '../../types/form/IFormFieldProps';

const FormField = ({ error = false, errorMessage = '', children, className, disableError, ...props }: FormFieldProps): ReactElement => (
  <div data-testid='style' className={className}>
    {children}
    {!disableError && props.type !== 'checkbox' ? (
      <div data-testid='nameErrorText'>
        <p className={`errorMessage mb-0 ${error ? 'opacity-1' : 'opacity-0 pe-none'}`}>{error ? errorMessage : '_'}</p>
      </div>
    ) : (
      <span className={`errorMessage mb-0 ${error ? 'opacity-1' : 'opacity-0 pe-none'}`}>{error ? errorMessage : ''}</span>
    )}
  </div>
);

export default FormField;
