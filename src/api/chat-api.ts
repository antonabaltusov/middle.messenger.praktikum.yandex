import HTTPTransport from 'utils/HttpTransport';
import { baseUrl, baseHeaders } from './base-api';

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
      url: baseUrl + 'chats',
      options: {
        data,
        headers: { ...baseHeaders },
      },
    }).then((data) => JSON.parse(data.response)),
  getUsersByChats: (id: number, data?: getUsersByChatsParam) =>
    HTTPTransport.get({
      url: baseUrl + `chats/${id}/users`,
      options: {
        data,
        headers: { ...baseHeaders },
      },
    }).then((data) => {
      if (data.status === 200) {
        return JSON.parse(data.response);
      }
      return data.response;
    }),

  newChat: (data: { title: string }) =>
    HTTPTransport.post({
      url: baseUrl + 'chats',
      options: {
        data,
        headers: { ...baseHeaders },
      },
    }).then((data) => {
      if (data.status === 200) {
        return data.response;
      }
      return JSON.parse(data.response);
    }),
  addUsertoChat: (data: { users: number[]; chatId: number }) =>
    HTTPTransport.put({
      url: baseUrl + 'chats/users',
      options: {
        data,
        headers: { ...baseHeaders },
      },
    }).then((data) => {
      if (data.status === 200) {
        return data.response;
      }
      return JSON.parse(data.response);
    }),
  daleteChat: (data: { chatId: number }) =>
    HTTPTransport.delete({
      url: baseUrl + 'chats',
      options: {
        data,
        headers: { ...baseHeaders },
      },
    }),
  deleteUserFromChat: (data: { users: number[]; chatId: number }) =>
    HTTPTransport.delete({
      url: baseUrl + 'chats/users',
      options: {
        data,
        headers: { ...baseHeaders },
      },
    }).then((data) => {
      if (data.status === 400) {
        return JSON.parse(data.response);
      }
      return data.response;
    }),
  getToken: (id: number) =>
    HTTPTransport.post({
      url: baseUrl + `chats/token/${id}`,
      options: {
        headers: { ...baseHeaders },
      },
    }).then((data) => {
      if (data.status === 200) {
        return JSON.parse(data.response);
      }
      return data.response;
    }),
};
