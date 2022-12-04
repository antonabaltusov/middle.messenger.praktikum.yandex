import { Block } from 'utils/Block';
import Connect from 'utils/Store/Connect';
import { MassegeList } from './MassegeList';

export default Connect(MassegeList as typeof Block, (state) => {
  return {
    activeChatId: state.activeChat?.id,
    socket: state.socket,
    masseges: state.activeChat?.masseges,
  };
});
