import { FieldValues, UseControllerProps } from 'react-hook-form';
import { InputProps } from './InputProps';

export type FormInputProps<T extends FieldValues> = UseControllerProps<T> & InputProps;
