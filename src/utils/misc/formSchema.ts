import * as yup from 'yup';

export const schema = yup
  .object({
    login: yup.string().required('Login jest wymagany'),
    password: yup.string().required('Hasło jest wymagane').min(8, 'Hasło jest za krótkie - powinno się składać z co najmniej 8 znaków'),
    description: yup.string(),
  })
  .required();
