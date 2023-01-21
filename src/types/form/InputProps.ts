import React from 'react';
import { FormFieldProps } from './IFormFieldProps';

export type InputProps = {
  label?: string;
  disableError?: boolean;
} & React.HTMLProps<HTMLInputElement> &
  Omit<FormFieldProps, 'children' | 'className'>;
