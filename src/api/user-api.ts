import HTTPTransport from 'utils/HttpTransport';
import { baseUrl, baseHeaders } from './base-api';
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

//type LoginResponseData = UserDTO | APIError;

export const userAPI = {
  editUser: (data: UserChangeData) =>
    HTTPTransport.put({
      url: baseUrl + 'user/profile',
      options: {
        data,
        headers: { ...baseHeaders },
      },
    }).then((data) => JSON.parse(data.response)),
  newAvatar: (data: FormData) =>
    HTTPTransport.put({
      url: baseUrl + 'user/profile/avatar',
      options: {
        data,
        headers: {
          'Access-Control-Allow-Origin': ' https://ya-praktikum.tech',
        },
      },
    }).then((data) => JSON.parse(data.response)),
  newPassword: (data: UserChangePasswor) =>
    HTTPTransport.put({
      url: baseUrl + 'user/password',
      options: {
        data,
        headers: { ...baseHeaders },
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
      url: baseUrl + 'user/search',
      options: {
        data,
        headers: { ...baseHeaders },
      },
    }).then((data) => JSON.parse(data.response)),
};
