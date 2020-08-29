import axios from 'axios';
import {USER_TYPE} from '../Types';
const USER_API = 'https://randomuser.me/api';

export const getUserApi = (): Promise<void | USER_TYPE> => {
  return axios
    .get(USER_API)
    .then((res) => {
      return res.data?.results[0] as USER_TYPE;
    })
    .catch((error) => {
      console.log('fetch error', error);
    });
};
