import HTTPTransport from 'utils/HttpTransport';
import { BASEURL, BASEHEADERS } from './base-api';
export type APIError = {
  reason: string;
};

type UserChangeData = {
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
};
type UserChangePasswor = {
  oldPassword: string;
  newPassword: string;
};

export const userAPI = {
  editUser: (data: UserChangeData) =>
    HTTPTransport.put({
      url: BASEURL + 'user/profile',
      options: {
        data,
        headers: { ...BASEHEADERS },
      },
    }).then((data) => JSON.parse(data.response)),
  newAvatar: (data: FormData) =>
    HTTPTransport.put({
      url: BASEURL + 'user/profile/avatar',
      options: {
        data,
        headers: {
          'Access-Control-Allow-Origin': ' https://ya-praktikum.tech',
        },
      },
    }).then((data) => JSON.parse(data.response)),
  newPassword: (data: UserChangePasswor) =>
    HTTPTransport.put({
      url: BASEURL + 'user/password',
      options: {
        data,
        headers: { ...BASEHEADERS },
      },
    }).then((data) => {
      if (data.status === 400) {
        return JSON.parse(data.response);
      } else {
        return data;
      }
    }),
  getUserByLogin: (data: { login: string }) =>
    HTTPTransport.post({
      url: BASEURL + 'user/search',
      options: {
        data,
        headers: { ...BASEHEADERS },
      },
    }).then((data) => JSON.parse(data.response)),
};
