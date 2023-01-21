import axios from 'axios';
import { IResponse } from '../interfaces/api/IResponse';

export const getNews = async (): Promise<IResponse> => {
  return await axios
    .get(`${process.env.REACT_APP_API_URL}`)
    .then((response) => {
      return Promise.resolve(response.data);
    })
    .catch((error) => {
      return Promise.reject(error);
    });
};
