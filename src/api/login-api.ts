import { userRoleChat } from 'components/chat/Chat';
import HTTPTransport from 'utils/HttpTransport';
import { baseUrl, baseHeaders } from './base-api';
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

//type LoginResponseData = UserDTO | APIError;

export const authAPI = {
  login: (data: LoginRequestData) =>
    HTTPTransport.post({
      url: baseUrl + 'auth/signin',
      options: {
        data,
        headers: { ...baseHeaders },
      },
    }),

  me: () =>
    HTTPTransport.get({
      url: baseUrl + 'auth/user',
      options: {
        headers: { ...baseHeaders },
      },
    }).then((data) => JSON.parse(data.response)),

  logout: () => HTTPTransport.post({ url: baseUrl + 'auth/logout' }),

  registr: (data: RegistrRequestData) =>
    HTTPTransport.post({
      url: baseUrl + 'auth/signup',
      options: {
        data,
        headers: { ...baseHeaders },
      },
    }).then((data) => JSON.parse(data.response)),
};
