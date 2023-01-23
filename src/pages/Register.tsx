import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { ReactElement, useState } from 'react';
import { AxiosError } from 'axios';
import { postForm } from '../api/api';
import { schema } from '../utils/misc/formSchema';
import { FormValues } from '../types/form/FormValues';
import { IParams } from '../interfaces/api/IParams';
import FormInput from '../components/form/formInput/FormInput';

import styles from './register.module.scss';
import Spinner from '../components/form/spinner/Spinner';
import Submit from '../components/form/submit/Submit';

const Register = (): ReactElement => {
  const [response, setResponse] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);

  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      login: '',
      password: '',
      description: '',
    },
    resolver: yupResolver(schema),
  });

  const submitForm: SubmitHandler<FormValues> = async (data: IParams) => {
    setLoading(true);
    setResponse('');

    await postForm(data).then(
      (res) => {
        setResponse(res.message);
        if (!res.registrationSuccessful) setError(true);
      },
      (err: AxiosError) => {
        setResponse(err.message);
        setError(true);
      }
    );

    setLoading(false);
  };

  return (
    <div className={styles.form}>
      <div className={styles.formHeader}>
        <h1 className={styles.formHeaderTitle}>Formularz rejestracyjny</h1>
      </div>
      <div className={styles.formContent}>
        <form
          onSubmit={(e: React.FormEvent<HTMLFormElement>): void => {
            e.preventDefault();
            void handleSubmit(submitForm)();
          }}
          autoComplete='off'
        >
          <FormInput label={'Login:'} name='login' control={control} />
          <FormInput label={'Hasło:'} name='password' control={control} type='password' />
          <FormInput label={'Opis'} name='description' control={control} type='textarea' />
          <Submit />

          {response.length ? (
            <p className={`${styles.formResponse} ${error ? styles.formError : styles.formCorrect}`}>{response}</p>
          ) : (
            <Spinner loading={loading} />
          )}
        </form>
      </div>
    </div>
  );
};

export default Register;
