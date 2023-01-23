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
import styles from './home.module.scss';

const Register = (): ReactElement => {
  const [response, setResponse] = useState<string>('');

  const { handleSubmit, control } = useForm<FormValues>({
    defaultValues: {
      login: '',
      password: '',
      description: '',
    },
    resolver: yupResolver(schema),
  });

  const submitForm: SubmitHandler<FormValues> = (data: IParams) => {
    setResponse('');

    postForm(data).then(
      (res) => {
        console.log(res);
      },
      (err: AxiosError) => {
        console.log(err.message);
        setResponse(err.message);
      }
    );
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
          <div className={styles.formContentSubmit}>
            <button className={styles.formContentSubmitBtn} type='submit'>
              Wyślij
            </button>
          </div>
          {!!response && <p className='fs-4 mt-3'>{response}</p>}
        </form>
      </div>
    </div>
  );
};

export default Register;
