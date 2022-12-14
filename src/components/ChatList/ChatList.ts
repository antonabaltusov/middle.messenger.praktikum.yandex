import { chatService } from 'services/chatService';
import { Block } from 'utils/Block';
import './style.scss';
export class ChatList extends Block<AppState> {
  static componentName = 'ChatList';
  constructor(props: AppState) {
    chatService.getChats();
    super(props);
  }
  render() {
    return `
    <div class="chat-list">
      {{#each chats}}
        {{{ ChatItem chat=this userId=../userId activeChatId=../activeChatId}}}
      {{/each}}
    </div>
    `;
  }
}
