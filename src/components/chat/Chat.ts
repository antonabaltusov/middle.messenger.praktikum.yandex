import Block from 'utils/Block';
import './style.scss';

export type Chat = {
  chatname: string;
  newMessageCount: number;
  img: string;
};
type ChatProps = {
  chat: Chat;
};

export class ChatItem extends Block<ChatProps> {
  constructor(props: ChatProps) {
    super(props);
  }
  render() {
    return `
    <div class="chat">
      <div>
        {{{ Avatar img=chat.img }}}
        <p class="chat-name">{{chat.chatname}}</p>
      </div>
      {{#if chat.newMessageCount}}
        <div class="new-message-count">{{chat.newMessageCount}}</div>
      {{/if}}
    </div>
    `;
  }
}
