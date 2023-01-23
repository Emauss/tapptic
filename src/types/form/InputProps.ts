import React from 'react';
import { FormFieldProps } from './IFormFieldProps';

export type InputProps = {
  label?: string;
  disableError?: boolean;
} & (React.HTMLProps<HTMLInputElement> & React.HTMLProps<HTMLTextAreaElement> & Omit<FormFieldProps, 'children' | 'className'>);
