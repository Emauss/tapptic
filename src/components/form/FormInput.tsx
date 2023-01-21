import { ReactElement, useId } from 'react';
import { FieldValues, useController } from 'react-hook-form';
import { FormInputProps } from '../../types/form/FormInputProps';
import Input from './Input';

const FormInput = <T extends FieldValues>(props: FormInputProps<T>): ReactElement => {
  const {
    field: { onChange, onBlur, value },
    fieldState: { error },
  } = useController(props);
  const id = useId();
  return (
    <Input
      id={id}
      error={!!error}
      errorMessage={error?.message}
      onChange={(value) => {
        onChange(value);
      }}
      onBlur={onBlur}
      value={value}
      {...props}
    />
  );
};

export default FormInput;
