import { userRoleChat } from 'components/chat/Chat';
import HTTPTransport from 'utils/HttpTransport';
import { BASEURL, BASEHEADERS } from './base-api';
export type APIError = {
  reason: string;
};

export type UserDTO = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
};
export type UserDTOChat = {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  login: string;
  email: string;
  phone: string;
  avatar: string;
  role: userRoleChat;
};
type LoginRequestData = {
  login: string;
  password: string;
};
type RegistrRequestData = {
  first_name: string;
  second_name: string;
  login: string;
  email: string;
  password: string;
  phone: string;
};

export const authAPI = {
  login: (data: LoginRequestData) =>
    HTTPTransport.post({
      url: BASEURL + 'auth/signin',
      options: {
        data,
        headers: { ...BASEHEADERS },
      },
    }).then((data) => {
      return JSON.parse(data.response);
    }),

  me: () =>
    HTTPTransport.get({
      url: BASEURL + 'auth/user',
      options: {
        headers: { ...BASEHEADERS },
      },
    }).then((data) => JSON.parse(data.response)),

  logout: () => HTTPTransport.post({ url: BASEURL + 'auth/logout' }),

  registr: (data: RegistrRequestData) =>
    HTTPTransport.post({
      url: BASEURL + 'auth/signup',
      options: {
        data,
        headers: { ...BASEHEADERS },
      },
    }).then((data) => JSON.parse(data.response)),
};
