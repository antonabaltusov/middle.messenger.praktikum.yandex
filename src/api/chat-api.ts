import HTTPTransport from 'utils/HttpTransport';
import { BASEURL, BASEHEADERS } from './base-api';

type queryParam = {
  offset?: number;
  limit?: number;
  title?: string;
};
type getUsersByChatsParam = {
  offset?: number;
  limit?: number;
  name?: string;
  email?: string;
};

export const chatAPI = {
  getChats: (data: queryParam = { offset: 0, limit: 10, title: '' }) =>
    HTTPTransport.get({
      url: BASEURL + 'chats',
      options: {
        data,
        headers: { ...BASEHEADERS },
      },
    }).then((data) => JSON.parse(data.response)),
  getUsersByChats: (id: number, data?: getUsersByChatsParam) =>
    HTTPTransport.get({
      url: BASEURL + `chats/${id}/users`,
      options: {
        data,
        headers: { ...BASEHEADERS },
      },
    }).then((data) => {
      if (data.status === 200) {
        return JSON.parse(data.response);
      }
      return data.response;
    }),

  newChat: (data: { title: string }) =>
    HTTPTransport.post({
      url: BASEURL + 'chats',
      options: {
        data,
        headers: { ...BASEHEADERS },
      },
    }).then((data) => {
      if (data.status === 200) {
        return data.response;
      }
      return JSON.parse(data.response);
    }),
  addUsertoChat: (data: { users: number[]; chatId: number }) =>
    HTTPTransport.put({
      url: BASEURL + 'chats/users',
      options: {
        data,
        headers: { ...BASEHEADERS },
      },
    }).then((data) => {
      if (data.status === 200) {
        return data.response;
      }
      return JSON.parse(data.response);
    }),
  daleteChat: (data: { chatId: number }) =>
    HTTPTransport.delete({
      url: BASEURL + 'chats',
      options: {
        data,
        headers: { ...BASEHEADERS },
      },
    }),
  deleteUserFromChat: (data: { users: number[]; chatId: number }) =>
    HTTPTransport.delete({
      url: BASEURL + 'chats/users',
      options: {
        data,
        headers: { ...BASEHEADERS },
      },
    }).then((data) => {
      if (data.status === 400) {
        return JSON.parse(data.response);
      }
      return data.response;
    }),
  getToken: (id: number) =>
    HTTPTransport.post({
      url: BASEURL + `chats/token/${id}`,
      options: {
        headers: { ...BASEHEADERS },
      },
    }).then((data) => {
      if (data.status === 200) {
        return JSON.parse(data.response);
      }
      return data.response;
    }),
};
