import React, { ReactElement } from 'react';

export type FormFieldProps =
  | {
      error?: boolean;
      errorMessage?: string;
      children?: ReactElement | ReactElement[];
      className?: string;
      disableError?: boolean;
    } & (React.HTMLProps<HTMLInputElement> | React.HTMLProps<HTMLTextAreaElement>);
