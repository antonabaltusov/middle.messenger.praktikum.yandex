import { transformMessage } from 'utils/apiTransformers';
import { mergeDeep } from 'utils/mergeDeep';
import store from './index';
import { MessageType } from 'typings/app.d';

const getUserState = () => {
  const state = store.getState();
  return state.user ?? {};
};
const addUserData = (newUserInfo: User) => {
  const user = getUserState();
  store.set('user', mergeDeep(user, newUserInfo));
};

const addChatList = (data: Chats) => {
  const state = store.getState();
  const chats = state.chats;

  const newChats = data.reduce((acc, currrent): Chats => {
    const index = chats.findIndex((el: Chat) => el?.id === currrent.id);
    if (index < 0) {
      acc.push(currrent);
      return acc;
    } else {
      acc.push(currrent);
      return acc;
    }
  }, [] as Chats);

  store.set('chats', newChats);
};

const changeIdActiveChat = (id: number) => {
  const state = store.getState();
  const activeChat = state.activeChat;

  store.set('activeChat', { ...activeChat, id });
};
const addMasseges = (chatId: number, massseges: MessageDTO[]) => {
  const state = store.getState();
  const activeChat = state.activeChat;
  const currentMes = activeChat?.masseges ?? [];

  const filterMassseges = massseges
    .filter((item) => item.type == MessageType.message)
    .map((item) => {
      return {
        ...transformMessage(item),
        isMy: state.user?.id === item.user_id,
      };
    });

  if (chatId == activeChat.id) {
    const newMassseges = [...filterMassseges, ...currentMes];
    store.set('activeChat', { id: chatId, masseges: newMassseges });
  } else {
    store.set('activeChat', { id: chatId, masseges: filterMassseges });
  }
};

export { addUserData, addChatList, changeIdActiveChat, addMasseges };
