import { Block } from 'utils/Block';
import { Chat } from '../chat/Chat';
import './style.scss';

export type ChatListProps = {
  chats: Chat[];
};
export class ChatList extends Block<ChatListProps> {
  static componentName = 'ChatList';
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
