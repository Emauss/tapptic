import axios from 'axios';
import { IParams } from '../interfaces/api/IParams';
import { IResponse } from '../interfaces/api/IResponse';

export const postForm = async (data: IParams): Promise<IResponse> => {
  const bodyFormData = new FormData();
  bodyFormData.append('login ', data.login);
  bodyFormData.append('password ', data.password);
  data?.description && bodyFormData.append('description ', data.description);

  return await axios
    .post<IResponse>(`${process.env.REACT_APP_API_URL}`, bodyFormData)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
