import { ChatService } from 'services/chatService';
import { Block } from 'utils/Block';
import { Actions } from 'utils/Store';
import './style.scss';

type ChatProps = {
  userId: number;
  chat: Chat;
  events: {};
  users: User[];
  admin: boolean;
  active: boolean;
  activeChatId: number;
};
export enum userRoleChat {
  regular = 'regular',
  admin = 'admin',
}

export class ChatItem extends Block<ChatProps> {
  static componentName = 'ChatItem';
  constructor(props: ChatProps) {
    super({
      ...props,
      active: props.activeChatId === props.chat.id,
      events: {
        click: (e: Event) => {
          const el = e.target as HTMLElement;
          if (el.id === 'btnAddUser') {
            this.addUser();
          } else if (el.id === 'btnDeleteChat') {
            ChatService.deleteChat(this.props.chat.id);
          } else if (el.classList.contains('delete-user')) {
            if (this.props.admin) {
              this.deleteUser(+el.id);
            }
          } else {
            ChatService.openChat(this.props.chat.id);
          }
        },
      },
    });
    this.getUsers();
  }
  async addUser() {
    const res = await ChatService.addUsertoChat(this.props.chat.id);
    if (res) {
      this.getUsers();
    }
  }
  async deleteUser(userId: number) {
    const res = await ChatService.deleteUserFromChat(
      this.props.chat.id,
      userId
    );
    if (res) {
      this.getUsers();
    }
  }
  async getUsers() {
    const newProp = {
      users: [] as unknown as UserInChat[] | undefined,
      admin: false,
    };
    const id = this.props.chat.id;

    const response = await ChatService.getUsersByChats(id);

    newProp.users = response?.filter((user) => {
      if (user.role === userRoleChat.admin && user.id === this.props.userId) {
        newProp.admin = true;
      }
      return user.id !== this.props.userId;
    });

    if (newProp.users) {
      this.setProps({
        ...this.props,
        users: newProp.users,
        admin: newProp.admin,
      });
    }
  }

  render() {
    return `
    <div class="chat {{#if active}}active{{/if}}">
      <div>
        {{{ Avatar img=chat.img }}}
        <p class="chat-name">{{chat.title}}</p>
        {{#each users}}
          <div>{{ this.firstName }}
            {{#if ../admin}}<button id="{{this.id}}" class="delete-user">-</button>{{/if}}
          </div>
        {{/each}}
        <button id="btnAddUser">+ user</button>
        {{#if admin}}<button id="btnDeleteChat">delete chat</button>{{/if}}
      </div>
      {{#if chat.newMessageCount}}
        <div class="new-message-count">{{chat.unread_count}}</div>
      {{/if}}
    </div>
    `;
  }
}
