import { Block } from 'utils/Block';
import Connect from 'utils/Store/Connect';
import { ChatList } from './ChatList';

export default Connect(ChatList as typeof Block, (state: AppState) => {
  return {
    chats: state.chats,
    userId: state.user?.id,
    activeChatId: state.activeChat.id,
  };
});
