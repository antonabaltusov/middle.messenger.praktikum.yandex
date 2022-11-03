import Block from 'utils/Block';
import { Chat, ChatItem } from '../chat/Chat';
import './style.scss';

export type ChatListProps = {
  chats: Chat[];
};
type Refs = {
  ChatItem: ChatItem;
};

export class ChatList extends Block<ChatListProps, Refs> {
  constructor(props: ChatListProps) {
    super(props);
  }
  render() {
    return `
    <div class="chat-list">
      {{#each chats}}
        {{{ ChatItem chat=this }}}
      {{/each}}
    </div>
    `;
  }
}
