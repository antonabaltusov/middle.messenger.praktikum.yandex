import { chatAPI } from 'api/chat-api';
import { apiHasError } from 'utils/apiHasError';
import { transformUsersChats } from 'utils/apiTransformers';
import { Actions } from 'utils/Store';
import { userService } from './userService';
import store from 'utils/Store';
import { MessageType } from '../typings/app.d';
import { BASEURLWEBSOCKET } from 'api/base-api';

export const chatService = {
  async getChats() {
    try {
      const response = await chatAPI.getChats();

      if (apiHasError(response)) {
        return;
      }

      Actions.addChatList(response);
    } catch (err) {
      console.error(err);
    }
  },
  async getUsersByChats(id: number) {
    try {
      const response = await chatAPI.getUsersByChats(id);

      if (apiHasError(response)) {
        return;
      }

      return transformUsersChats(response);
    } catch (err) {
      console.error(err);
    }
  },
  async newChat() {
    const title = prompt('title for chat');
    if (title) {
      try {
        const response = await chatAPI.newChat({ title });

        if (apiHasError(response)) {
          return;
        }

        chatService.getChats();
      } catch (err) {
        console.error(err);
      }
    }
  },
  async addUsertoChat(chatId: number) {
    const loginUser = prompt('login of user', 'antonabaltusovAAA');
    if (loginUser) {
      try {
        const usersByLogin = await userService.getUsersByLogin(loginUser);
        if (usersByLogin && usersByLogin.length) {
          const userId = usersByLogin[0].id;
          const response = await chatAPI.addUsertoChat({
            chatId,
            users: [userId],
          });

          if (apiHasError(response)) {
            return;
          }

          return true;
        }
      } catch (err) {
        console.error(err);
      }
    }
  },
  async deleteChat(chatId: number) {
    try {
      const response = await chatAPI.daleteChat({ chatId });

      if (apiHasError(response)) {
        return;
      }

      chatService.getChats();
    } catch (err) {
      console.error(err);
    }
  },
  async deleteUserFromChat(chatId: number, userId: number) {
    try {
      const response = await chatAPI.deleteUserFromChat({
        chatId,
        users: [userId],
      });

      if (apiHasError(response)) {
        return;
      }

      return true;
    } catch (err) {
      console.error(err);
    }
  },
  async openChat(chatId: number) {
    try {
      const response = await chatAPI.getToken(chatId);

      if (apiHasError(response)) {
        return;
      }

      chatService.createSocket(chatId, response.token);
    } catch (err) {
      console.error(err);
    }
  },
  createSocket(chatId: number, token: number) {
    const state = store.getState();
    const socket = new WebSocket(
      `${BASEURLWEBSOCKET}${state.user?.id}/${chatId}/${token}`
    );

    socket.addEventListener('open', () => {
      console.log('Соединение установлено');

      socket!.send(
        JSON.stringify({
          content: '',
          type: 'get old',
        })
      );
    });

    socket.addEventListener('close', (event) => {
      if (event.wasClean) {
        console.log('Соединение закрыто чисто');
      } else {
        console.log('Обрыв соединения');
        chatService.createSocket(chatId, token);
      }

      console.log(`Код: ${event.code} | Причина: ${event.reason}`);
    });

    socket.addEventListener('message', (event) => {
      const message = JSON.parse(event.data);
      if (message.type === MessageType.pong) {
        return;
      }
      Actions.addMasseges(chatId, Array.isArray(message) ? message : [message]);
    });

    socket.addEventListener('error', (event) => {
      console.log('Ошибка', event.message);
    });
    store.set('socket', socket);
  },
};
